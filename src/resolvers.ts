import { PrismaClient } from '@prisma/client';
import { MutationUpdateActualArgs } from './type';

const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    tasks: async () => await prisma.task.findMany({
      orderBy: [{ id: 'asc' }]
    })
  },
  Mutation: {
    // https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments
    updateActual: async (_parent: any, args: MutationUpdateActualArgs) => {
      const updateTasks = Promise.all(
        args.tasks.map(async (taskArgs) => {
          const task = await prisma.task.update({
            where: { id: taskArgs.id },
            data: { actual: taskArgs.actual }
          })
          return task
        })
      )
      return updateTasks
    }
  }
}
