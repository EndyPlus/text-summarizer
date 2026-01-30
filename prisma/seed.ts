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
    username: "admin",
    password: "admin", // Пам'ятай: у реальному проекті тут має бути хеш (наприклад, від bcrypt)
    name: "Artem Pliusnin",
    posts: {
      create: [
        {
          originalText:
            "Штучний інтелект — це галузь комп'ютерних наук, яка займається створенням інтелектуальних машин, здатних виконувати завдання, що зазвичай потребують людського інтелекту, таких як візуальне сприйняття, розпізнавання мови та прийняття рішень.",
          summarizedText:
            "ШІ створює розумні машини для виконання людських завдань: розпізнавання мови та прийняття рішень.",
          createdAt: new Date(),
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
