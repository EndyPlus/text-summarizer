"use server";

import { ITEMS_PER_PAGE } from "@/src/utils/vars";

import prisma from "../prismaClient/prisma";

import getDateFilter from "@/src/utils/getDateFilter";

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

export async function findPosts(
  userId: number,
  currentPage: number = 1,
  searchTerm: string = "",
  timeOption = "all",
) {
  const posts = await prisma.summarizedText.findMany({
    where: {
      authorId: userId,
      summarizedText: {
        contains: searchTerm,
        mode: "insensitive",
      },
      createdAt: getDateFilter(timeOption),
    },
    take: ITEMS_PER_PAGE,
    skip: (currentPage - 1) * ITEMS_PER_PAGE,
    orderBy: [{ createdAt: "desc" }, { summarizedText: "asc" }],
  });

  const count = await prisma.summarizedText.count({
    where: {
      authorId: userId,
      summarizedText: {
        contains: searchTerm,
        mode: "insensitive",
      },
      createdAt: getDateFilter(timeOption),
    },
  });

  return { posts, count };
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

export async function deletePost(postId: number) {
  const deletePost = await prisma.summarizedText.delete({
    where: {
      id: postId,
    },
  });

  return deletePost;
}

export async function updatePost(postId: number, postData: PostData) {
  const updatedPost = await prisma.summarizedText.update({
    where: {
      id: postId,
    },
    data: {
      originalText: postData.originalText,
      summarizedText: postData.summarizedText,
      authorId: postData.userId,
    },
  });

  return updatedPost;
}
