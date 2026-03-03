"use server";

import { ITEMS_PER_PAGE } from "@/src/utils/vars";

import prisma from "../prismaClient/prisma";

import getDateFilter from "@/src/utils/getDateFilter";
import getErrorMessage from "@/src/utils/getErrorMessage";
import { PostData, UserCreateData } from "@/src/types/types";

export async function findUser(username: string) {
  if (!username) return { success: false, error: "Username is missing." };

  try {
    const user = await prisma.user.findUnique({
      where: {
        username,
      },
    });

    if (!user) {
      throw new Error("User was not found.");
    }

    return { success: true, data: user };
  } catch (err) {
    return { success: false, error: getErrorMessage(err) };
  }
}

export async function createUser(data: UserCreateData) {
  const { name, username, password } = data;

  if (!name || !username || !password) {
    return { success: false, error: "Missing required register data." };
  }

  try {
    const newUser = await prisma.user.create({
      data: {
        name,
        username,
        password,
      },
    });

    if (!newUser) throw new Error("Failed to register a user.");

    return { success: true, data: newUser };
  } catch (err) {
    return { success: false, error: getErrorMessage(err) };
  }
}

export async function findPosts(
  userId: number,
  currentPage: number = 1,
  searchTerm: string = "",
  timeOption = "all",
) {
  try {
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

    return { success: true, data: { posts, count } };
  } catch (err) {
    return { success: false, error: getErrorMessage(err) };
  }
}

export async function findPostsCount(userId: number) {
  const count = await prisma.summarizedText.count({
    where: {
      authorId: userId,
    },
  });

  return count;
}

export async function addPost(postData: PostData) {
  const { originalText, summarizedText, userId } = postData;

  if (!originalText || !summarizedText || !userId) {
    return {
      success: false,
      error: "Required data for post creation is missing.",
    };
  }

  try {
    const newPost = await prisma.summarizedText.create({
      data: {
        originalText,
        summarizedText,
        authorId: userId,
      },
    });

    if (!newPost) {
      throw new Error("Failed to create a post.");
    }

    return { success: true, data: newPost };
  } catch (err) {
    return { success: false, error: getErrorMessage(err) };
  }
}

export async function deletePost(postId: number) {
  if (typeof postId !== "number" || isNaN(postId)) {
    return {
      success: false,
      error: "Post id is missing or it has a wrong format.",
    };
  }

  try {
    const deletePost = await prisma.summarizedText.delete({
      where: {
        id: postId,
      },
    });

    if (!deletePost) {
      throw new Error("Failed post deleting.");
    }

    return { success: true, data: deletePost };
  } catch (err) {
    return { success: false, error: getErrorMessage(err) };
  }
}

export async function updatePost(postId: number, postData: PostData) {
  if (isNaN(postId)) {
    return { success: false, error: "Wrong post id format." };
  }

  const { originalText, summarizedText, userId } = postData;

  if (!originalText || !summarizedText || !userId) {
    return { success: false, error: "Missing required data for post update." };
  }

  try {
    const updatedPost = await prisma.summarizedText.update({
      where: {
        id: postId,
      },
      data: {
        originalText,
        summarizedText,
        authorId: userId,
      },
    });

    if (!updatedPost) {
      throw new Error("Post update was failed.");
    }

    return { success: true, data: updatedPost };
  } catch (err) {
    return { success: false, error: getErrorMessage(err) };
  }
}
