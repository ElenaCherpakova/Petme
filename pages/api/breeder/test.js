import { prisma } from "../../../lib/prisma";

export default async function handler(req, res) {
  const pet = await prisma.Pet.findMany();
  res.status(200).json({ pet });
}
