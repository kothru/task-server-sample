import { makeSchema, objectType, queryType, list } from 'nexus'
// import { makeSchema, objectType, queryType, list, mutationType, nonNull, intArg, stringArg } from 'nexus'

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

// const Mutation = mutationType({
//   definition(t) {
//     t.nonNull.field('updateActual', {
//       type: list(Task),
//       args: list(Task),
//       resolve(_root, args, ctx) {
//         let draftToPublish = ctx.db.tasks.find(p => p.id === args.draftId)
//         if (!draftToPublish) {
//           throw new Error('Could not find draft with id ' + args.draftId)
//         }
//         draftToPublish.published = true
//         return draftToPublish
//       },
//     })
//   },
// })

export const typeDefs = makeSchema({
  types: [Task, Query],
})