import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const customer = await prisma.customer.create({
    data: {
      firstName: 'John',
      lastName: 'Doe',
      email: 'john@test.com',
      password: 'test',
      phoneNumber: '1234',
      address: 'test',
      profileImage: 'yes',
    },
  });
  console.log(customer);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
