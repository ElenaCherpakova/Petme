import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  await prisma.Breeder.deleteMany();
  await prisma.Sale.deleteMany();
  await prisma.Customer.deleteMany();
  await prisma.Pet.deleteMany();
  await prisma.PetCategory.deleteMany();
  const breeder = await prisma.Breeder.createMany({
    data: {
      firstName: 'Tom',
      lastName: 'Bolt',
      email: 'Bolt@hotmail.com',
      password: 'password123',
      phoneNumber: '123-123-123',
      address: '2250 farm rd',
      profileImage: 'test',
    },
  });

  const pet = await prisma.Pet.createMany({
    data: {
      name: 'Alex',
      dateOfBirth: 'November 23, 2019',
      description: 'Energetic',
      profileImage: 'test123',
      price: 1000,
      gender: 'Male',
      breederId: 1,
    },
  });

  const customer = await prisma.Customer.create({
    data: {
      firstName: 'Elena',
      lastName: 'Cherpakova',
      email: 'elena@hotmail.com',
      password: 'password123',
      phoneNumber: '6479628292',
      address: 'test',
      profileImage: 'test',
    },
  });

  const petCategory = await prisma.PetCategory.createMany({
    data: {
      pureBreed: false,
      breedName: 'Poodle, shitzu',
      categoryName: 'Dog',
      petId: 1,
    },
  });

  const sale = await prisma.Sale.createMany({
    data: {
      salesDate: 'April 12, 2022',
      breederId: 1,
      customerId: 1,
      petId: 1,
      paymentStatus: 'Paid',
      amountPayed: 1000,
      refNumber: 123123,
    },
  });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
