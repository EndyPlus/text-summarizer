"use server";

import { ITEMS_PER_PAGE } from "@/src/utils/vars";

import prisma from "../prismaClient/prisma";

import getDateFilter from "@/src/utils/getDateFilter";
import getErrorMessage from "@/src/utils/getErrorMessage";
import { PostData, UserCreateData } from "@/src/types/types";

export async function findUser(username: string) {
  try {
    if (!username) {
      throw new Error("Username is missing.");
    }

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
  try {
    const { name, username, password } = data;

    if (!name || !username || !password) {
      throw new Error("Missing required register data.");
    }

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
  try {
    if (isNaN(userId)) throw new Error("Invalid user id.");

    const count = await prisma.summarizedText.count({
      where: {
        authorId: userId,
      },
    });

    if (typeof count !== "number")
      throw new Error("Failed to fetch posts count.");

    return { success: true, data: count };
  } catch (err) {
    return { success: false, error: getErrorMessage(err) };
  }
}

export async function addPost(postData: PostData) {
  try {
    const { originalText, summarizedText, userId } = postData;

    if (!originalText || !summarizedText || !userId) {
      throw new Error("Required data for post creation is missing.");
    }

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
  try {
    if (typeof postId !== "number" || isNaN(postId)) {
      throw new Error("Post id is missing or it has a wrong format.");
    }

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
  try {
    if (isNaN(postId)) {
      throw new Error("Wrong post id format.");
    }

    const { originalText, summarizedText, userId } = postData;

    if (!originalText || !summarizedText || !userId) {
      throw new Error("Missing required data for post update.");
    }

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
