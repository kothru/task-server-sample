import { PrismaClient } from '@prisma/client'
import { faker } from '@faker-js/faker';
const prisma = new PrismaClient()

async function main() {
  const tasks = [...Array(5)].map(() => {
    return {
      name: faker.name.findName(),
      plan: faker.datatype.number(),
      actual: 0,
    }
  })

  console.log(tasks)
  const task = prisma.task.createMany({
    data: tasks,
  })
  return task
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })