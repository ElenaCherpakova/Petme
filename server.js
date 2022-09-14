import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  const breeder = await prisma.breeder.create({
    data: { firstName: 'John Doe' },
  });

  console.log(breeder);
}

main()
  .catch((e) => {
    console.error(e.message);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
