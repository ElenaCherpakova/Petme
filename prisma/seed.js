import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function main() {
  const breeder = await prisma.Breeder.createMany({
    data: [
      {
        firstName: "Bob",
        lastName: "Fork",
        email: "Bobfork@hotmail.com",
        password: "password123",
        phoneNumber: "123-123-123",
        address: "2250 farmville rd",
        profileImage: "test",
      },
      {
        firstName: "Mark",
        lastName: "Korn",
        email: "Mark@hotmail.com",
        password: "password123",
        phoneNumber: "123-123-123",
        address: "2230 farmville rd",
        profileImage: "test",
      },
    ],
  });

  const pet = await prisma.Pet.createMany({
    data: [
      {
        name: "Alex",
        dateOfBirth: "November 23, 2019",
        description: "Energetic",
        profileImage: "test123",
        price: 1000,
        gender: "Male",
        breederId: 1,
      },
      {
        name: "Coconut",
        dateOfBirth: "November 22, 2019",
        description: "Energetic",
        profileImage: "test123",
        price: 1000,
        gender: "Male",
        breederId: 2,
      },
    ],
  });

  const customer = await prisma.Customer.create({
    data: {
      firstName: "John",
      lastName: "Artuz",
      email: "johnartuz@hotmail.com",
      password: "password123",
      phoneNumber: "6475429109",
      address: "test",
      profileImage: "test",
    },
  });

  const petCategory = await prisma.PetCategory.createMany({
    data: [
      {
        pureBreed: false,
        breedName: "Poodle, shitzu",
        categoryName: "Dog",
        petId: 1,
      },
      {
        pureBreed: true,
        breedName: "Poodle",
        categoryName: "Dog",
        petId: 2,
      },
    ],
  });

  const sale = await prisma.Sale.createMany({
    data: [
      {
        salesDate: "April 12, 2022",
        breederId: 1,
        customerId: 1,
        petId: 1,
        paymentStatus: "Paid",
        amountPayed: 1000,
        refNumber: 123123,
      },
    ],
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
