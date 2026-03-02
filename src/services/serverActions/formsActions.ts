"use server";

import {
  createUser,
  findUser,
} from "@/src/services/serverActions/prismaActions";
import {
  RegisterActionFormData,
  RegisterFormActionState,
} from "@/src/types/types";
import getFormattedCredentials from "@/src/utils/getFormattedCredentials";

import getRegisterErrors from "@/src/utils/getRegisterErrors";

export async function registerFormAction(
  formState: RegisterFormActionState,
  formData: FormData,
) {
  const userData = Object.fromEntries(
    formData.entries(),
  ) as RegisterActionFormData;

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

    const { formattedUsername, hashedPassword, formattedName } =
      await getFormattedCredentials({
        username,
        password,
        firstName,
        lastName,
      });

    const user = await findUser(formattedUsername);

    if (user) {
      errorsArray.push({
        inputName: null,
        errorsList: ["User is already existing."],
      });
      throw new Error();
    }

    const newUser = await createUser({
      name: formattedName,
      username: formattedUsername,
      password: hashedPassword,
    });

    if (!newUser) {
      errorsArray.push({
        inputName: null,
        errorsList: ["Failed user registration."],
      });
      throw new Error();
    }

    return {
      success: true,
      errors: null,
      credentials: { username, password },
    };
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (err) {
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
