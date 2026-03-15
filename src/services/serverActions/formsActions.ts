"use server";

import {
  createUser,
  findUser,
} from "@/src/services/serverActions/prismaActions";

import {
  RegisterActionFormData,
  RegisterFormActionState,
} from "@/src/helpers/types/types";

import getFormattedCredentials from "@/src/helpers/utils/getFormattedCredentials";
import getRegisterErrors from "@/src/helpers/utils/getRegisterErrors";

export async function registerFormAction(
  formState: RegisterFormActionState,
  formData: FormData,
) {
  const userData = Object.fromEntries(
    formData.entries(),
  ) as RegisterActionFormData;

  const { firstName, lastName, username, password, confirmPassword } = userData;

  // getting errors from inputs
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
    // triggering a catch block if inputs errors
    if (errorsArray.length) {
      throw new Error();
    }

    const { formattedUsername, hashedPassword, formattedName } =
      await getFormattedCredentials({
        username,
        password,
        firstName,
        lastName,
      });

    const findUserResponse = await findUser(formattedUsername);

    // if user exists - add an error to erros array and trigger catch block
    if (findUserResponse.success) {
      errorsArray.push({
        inputName: null,
        errorsList: ["User is already existing."],
      });
      throw new Error();
    }

    // if user not found - creating a new one
    const registerResult = await createUser({
      name: formattedName,
      username: formattedUsername,
      password: hashedPassword,
    });

    if (!registerResult.success) {
      errorsArray.push({
        inputName: null,
        errorsList: [registerResult.error],
      });
      throw new Error();
    }

    // if everything is ok, returning credentials to Log In
    // also return all inputs because otherwise they will disappear before user enters account
    return {
      success: true,
      errors: null,
      credentials: { username, password },
      firstName,
      lastName,
      username,
      password,
      confirmPassword,
    };
  } catch {
    // if catch block was triggered also returning saved inputs
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
