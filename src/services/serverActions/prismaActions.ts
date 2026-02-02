"use server";

import { ITEMS_PER_PAGE } from "@/src/utils/vars";

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

export async function findPosts(userId: number, currentPage: number = 1) {
  const posts = await prisma.user.findUnique({
    where: { id: userId },
    include: {
      posts: {
        take: ITEMS_PER_PAGE,
        skip: (currentPage - 1) * ITEMS_PER_PAGE,
        orderBy: {
          createdAt: "desc",
        },
      },
    },
  });

  return posts;
}

export async function findPostsCount(userId: number) {
  const count = await prisma.summarizedText.count({
    where: {
      authorId: userId,
    },
  });

  return count;
}

type PostData = {
  originalText: string;
  summarizedText: string;
  userId: number;
};

export async function addPost(postData: PostData) {
  const newPost = await prisma.summarizedText.create({
    data: {
      originalText: postData.originalText,
      summarizedText: postData.summarizedText,
      authorId: postData.userId,
    },
  });

  return newPost;
}
