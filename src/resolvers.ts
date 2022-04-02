import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient()

export const resolvers = {
  Query: {
    tasks: async () => await prisma.task.findMany()
  },
}
