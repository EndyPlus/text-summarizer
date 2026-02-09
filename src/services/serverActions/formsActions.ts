"use server";

import {
  createUser,
  findUser,
} from "@/src/services/serverActions/prismaActions";

export async function registerFormAction(_, formData) {
  const { name, username, password, confirmPassword } = Object.fromEntries(
    formData.entries(),
  );

  // HERE DATA VALIDATION

  try {
    const user = await findUser(username);

    if (user) {
      return { error: "User is already existing." };
    }

    if (password !== confirmPassword) {
      return { error: "Passwords are not matching." };
    }

    const newUser = await createUser({
      name,
      username,
      password,
    });

    if (!newUser) {
      return { error: "Failed user registration." };
    }

    return {
      success: true,
      credentials: { username, password },
    };
  } catch (err) {
    console.log(err);
    return { error: "Unknown error." };
  }
}
