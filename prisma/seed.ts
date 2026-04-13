import "dotenv/config";
import { Pool } from "pg";
import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@prisma/client";

const pool = new Pool({ connectionString: process.env.DATABASE_URL });
const adapter = new PrismaPg(pool);
const prisma = new PrismaClient({ adapter });

async function main() {
  // Seed demo user
  await prisma.user.upsert({
    where: { id: "demo-user" },
    update: {},
    create: { id: "demo-user", email: "demo@closet.app", name: "Demo User" },
  });

  // Seed categories
  const categories = ["Tops", "Shoes", "Bags", "Accessories", "Dresses", "Jackets", "Bottoms", "Activewear"];
  for (const name of categories) {
    await prisma.category.upsert({
      where: { name },
      update: {},
      create: { name },
    });
  }

  console.log("Seeded demo user and categories.");
}

main()
  .catch(console.error)
  .finally(() => prisma.$disconnect());
