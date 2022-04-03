import { makeSchema, objectType, queryType, list, inputObjectType, mutationType } from 'nexus'
import path from 'path'

const Task = objectType({
  name: 'Task',
  definition(t) {
    t.int('id')
    t.string('name')
    t.int('plan')
    t.int('actual')
  },
})

const Query = queryType({
  definition(t) {
    t.field('tasks', {
      type: list(Task),
    })
  },
})

const TaskInputType = inputObjectType({
  name: 'TaskInputType',
  definition(t) {
    t.nonNull.int('id')
    t.nonNull.int('actual')
  }
})

const Mutation = mutationType({
  definition(t) {
    t.field('updateActual', {
      type: list(Task),
      args: {
        tasks: list('TaskInputType')
      }
    })
  },
})

export const typeDefs = makeSchema({
  types: [Task, Query, TaskInputType, Mutation],
  shouldGenerateArtifacts: true,
  outputs: {
    // https://nexusjs.org/docs/api/make-schema#shouldgenerateartifacts-outputs-sourcetypes
    schema: path.join(__dirname, 'generated/schema.gen.graphql'),
  },
})