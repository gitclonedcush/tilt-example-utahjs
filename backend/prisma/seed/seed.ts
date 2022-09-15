import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function seedCrews() {
  await prisma.crew.createMany({
    data: [
      {
        id: 'dfb500a3-ca61-4fde-94f6-5eb9bc0263dd',
        name: 'Planet Express Ship Crew',
        description: 'The Planet Express Ship Crew',
        members: ['Fry', 'Leela', 'Bender']
      },
      {
        id: '866c92b4-e03b-4318-9d8e-6ce8493b4b95',
        name: 'Planet Express Full Crew',
        description: 'The Planet Express Full Crew',
        members: ['Fry', 'Leela', 'Bender', 'Amy', 'Hermes', 'Zoidberg', 'Scruffy', 'Nibbler', 'Professor Farnsworth']
      }
    ]
  })
}

async function seedDeliveries() {
  await prisma.delivery.createMany(
    {
      data: [
        {
          id: '0f637435-083a-474a-bb19-5a0665421d7a',
          name: 'Delivery 1',
          destination: 'Luna Park',
          contents: 'Prizes for the claw crane',
          completedAt: new Date('3000-01-11T00:00:00.000Z'),
          completed: true,
        },
        {
          id: 'bf709670-5751-47e5-9f9c-f093b3402d54',
          name: 'Delivery 2',
          destination: 'Chapek 9',
          contents: 'Lug nuts',
          completedAt: new Date('3000-05-01T00:00:00.000Z'),
          completed: true,
        }
      ]
    }
  )
}

async function main() {
  await seedCrews()
  await seedDeliveries()
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await prisma.$disconnect()
    process.exit(1)
  })