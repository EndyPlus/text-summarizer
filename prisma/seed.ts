import { PrismaClient, Prisma } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

const userData: Prisma.UserCreateInput[] = [
  {
    name: "Artem",
    email: "artem@prisma.io",
    posts: {
      create: [
        {
          content: "some summary",
        },
        {
          content: "some summary2",
        },
        {
          content: "some summary3",
        },
      ],
    },
  },
  {
    name: "Vlad",
    email: "vlad@prisma.io",
    posts: {
      create: [
        {
          content: "some summary",
        },
        {
          content: "some summary2",
        },
        {
          content: "some summary3",
        },
      ],
    },
  },
];

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
