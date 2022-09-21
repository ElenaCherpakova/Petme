import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // await prisma.breeder.deleteMany();
  const breeder = await prisma.breeder.create({
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

  const pet = await prisma.pet.create({
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

  const customer = await prisma.customer.create({
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

  const petCategory = await prisma.petCategory.create({
    data: {
      pureBreed: false,
      breedName: 'Poodle, shitzu',
      categoryName: 'Dog',
      petId: 1,
    },
  });

  const sale = await prisma.sale.create({
    data: {
      breederId: 1,
      customerId: 1,
      petId: 1,
      paymentStatus: 'Paid',
      amountPayed: 1000,
      refNumber: 123123,
    },
  });

  const review = await prisma.review.create({
    data: {
      rating: 5,
      review: 'Great breeder',
      breederId: 1,
      customerId: 1,
    },
  });

  console.log({ breeder, pet, customer, petCategory, sale, review });
}

main()
  .catch((e) => {
    console.error(e.message);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
