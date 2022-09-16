import { prisma } from '../../../lib/prisma';

export default async function handler(req, res) {
  const { id } = req.query;

  const getCategoryPets = await prisma.pet.findMany({
    where: {},
    include: {
      petCategory: true,
    },
  });

  const filterPetCategory = getCategoryPets.filter(
    (category) => category.petCategory[0].categoryName === id,
  );

  // console.log(filterPetCategory);

  res.status(200).json(filterPetCategory);
  return prisma.$disconnect();
}
