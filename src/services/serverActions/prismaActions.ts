"use server";

import prisma from "../prismaClient/prisma";

export async function findUser(username: string) {
  const user = prisma.user.findUnique({
    where: {
      username,
    },
  });

  return user;
}

type Data = {
  name: string;
  username: string;
  password: string;
};

export async function createUser(data: Data) {
  const newUser = await prisma.user.create({
    data: {
      name: data.name,
      username: data.username,
      password: data.password,
    },
  });

  return newUser;
}

export async function findPosts(userId: number) {
  const posts = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      posts: {
        take: 5, // Отримати 5 штук
        skip: 0, // Пропустити 0 (почати з першого)
        orderBy: {
          createdAt: "desc", // Найновіші тексти будуть першими
        },
      },
    },
  });

  return posts;
}
