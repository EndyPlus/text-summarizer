"use server";

import {
  createUser,
  findUser,
} from "@/src/services/serverActions/prismaActions";

import getRegisterErrors from "@/src/utils/getRegisterErrors";

export async function registerFormAction(formState, formData) {
  const userData = Object.fromEntries(formData.entries());
  const { firstName, lastName, username, password, confirmPassword } = userData;

  const errorsArray = getRegisterErrors(userData);

  // prevent spam submitting
  if (formState.success) {
    return {
      success: formState.success,
      errors: null,
      credentials: null,
      firstName,
      lastName,
      username,
      password,
      confirmPassword,
    };
  }

  try {
    if (errorsArray.length) {
      console.log("FORM DATA ERRORS");
      throw new Error();
    }

    const user = await findUser(username);

    if (user) {
      errorsArray.push("User is already existing.");
      throw new Error();
    }

    const newUser = await createUser({
      name: `${firstName} ${lastName}`,
      username,
      password,
    });

    if (!newUser) {
      errorsArray.push("Failed user registration.");
      throw new Error();
    }

    return {
      success: true,
      errors: null,
      credentials: { username, password },
    };
  } catch (err) {
    // console.log(err);
    return {
      success: false,
      errors: errorsArray,
      credentials: null,
      firstName,
      lastName,
      username,
      password,
      confirmPassword,
    };
  }
}
