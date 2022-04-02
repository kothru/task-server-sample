import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient()

async function main() {
  Promise.all(
    [...Array(5)].map(async () => {
      const task = prisma.task.create({
        data: {
          name: faker.name.findName(),
          plan: faker.datatype.number(),
          actual: 0,
        },
      })
      console.log({ task })
      return task
    })
  )
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })