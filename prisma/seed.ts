import "dotenv/config";
import bcrypt from "bcryptjs";
import { PrismaClient, Prisma } from "@/generated/prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";

import { mockPosts } from "@/src/helpers/mock/mockDBPosts";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

export async function main() {
  const userData: Prisma.UserCreateInput[] = [
    {
      username: "admin",
      password: await bcrypt.hash("admin", 10),
      name: "John Doe",
      posts: {
        create: mockPosts,
      },
    },
  ];

  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
