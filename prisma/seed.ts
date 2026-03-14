import { PrismaClient, Prisma } from "@/generated/prisma/client";
import { mockPosts } from "@/src/helpers/mock/mockDBPosts";
import { PrismaPg } from "@prisma/adapter-pg";
import bcrypt from "bcryptjs";
import "dotenv/config";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({
  adapter,
});

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

export async function main() {
  for (const u of userData) {
    await prisma.user.create({ data: u });
  }
}

main();
