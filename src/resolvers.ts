import { PrismaClient } from '@prisma/client';
// import { PrismaClient, Task } from '@prisma/client';

const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    tasks: async () => await prisma.task.findMany()
  },
  // Mutation: {
  //   updateActual: async (_: any, args: Task[]) => {
  //     args.forEach(async (task) => {
  //       await prisma.task.update({
  //         where: { id: task.id },
  //         data: { actual: task.actual }
  //       })
  //     })
  //   }
  // }
}
