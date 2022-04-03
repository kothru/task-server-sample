import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

type TaskInputType = {
  id: number
  actual: number
}

type UpdateActualArgsType = {
  tasks: TaskInputType[]
}

export const resolvers = {
  Query: {
    tasks: async () => await prisma.task.findMany({
      orderBy: [{ id: 'asc' }]
    })
  },
  Mutation: {
    // https://www.apollographql.com/docs/apollo-server/data/resolvers/#resolver-arguments
    updateActual: async (_parent: any, args: UpdateActualArgsType) => {
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
