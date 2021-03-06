import { ApolloServer } from 'apollo-server-fastify';
import { ApolloServerPluginDrainHttpServer } from 'apollo-server-core';
import { ApolloServerPlugin } from 'apollo-server-plugin-base';
import fastify, { FastifyInstance } from 'fastify';
import { resolvers } from './resolvers';
import { typeDefs } from './typeDefs';

function fastifyAppClosePlugin(app: FastifyInstance): ApolloServerPlugin {
  return {
    async serverWillStart() {
      return {
        async drainServer() {
          await app.close();
        },
      };
    },
  };
}

const app = fastify();
const server = new ApolloServer({
  typeDefs,
  resolvers,
  plugins: [
    fastifyAppClosePlugin(app),
    ApolloServerPluginDrainHttpServer({ httpServer: app.server }),
  ],
});

(async function () {
  await server.start();
  app.register(server.createHandler());

  await app.listen(4000);
  console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`);
}());


