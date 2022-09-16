import { prisma } from "../../../lib/prisma";

export default async function handler({ query: { id } }, res) {
  const filtered = await prisma.Pet.findUnique({
    where: {
      id: Number(id),
    },
  });
  res.status(200).json(filtered);
  return prisma.$disconnect();
}