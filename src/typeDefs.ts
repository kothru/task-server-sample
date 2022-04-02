import { makeSchema, objectType, queryType, list } from 'nexus'

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

export const typeDefs = makeSchema({
  types: [Task, Query],
})