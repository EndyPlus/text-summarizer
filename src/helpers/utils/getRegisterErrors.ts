import { ErrorsData, InputError } from "../types/types";

/**
 * Handles inputs validation.
 * 
 * 
 * @returns An array of objects, which contains inputName string and errosList array.
 * 
 * @example 
 * errors = [
 *  {
      inputName: "lastName",
      errorsList: ["Last name must be at least 3 characters long."],
    },
    {
      inputName: "password",
      errorsList: ["Password must be at least 8 characters long.", 
      "Password must have at least 1 capital letter."],
    }
 * ]
 *
 */
export default function getRegisterErrors(data: ErrorsData) {
  const { firstName, lastName, username, password, confirmPassword } = data;

  // creating an empty errors array
  const errors: InputError[] = [];

  // creating a separated errors arrays for different inputs
  const firstNameErrors = [];
  const lastNameErrors = [];
  const usernameErrors = [];
  const passwordErrors = [];
  const confirmPasswordErrors = [];

  // if some error spotted, push it to this input's errors array.
  if (!firstName) {
    firstNameErrors.push("First name is missing.");
  } else {
    if (firstName.length < 3) {
      firstNameErrors.push("First name must be at least 3 characters long.");
    }

    if (firstName.length > 15) {
      firstNameErrors.push(
        "First name cannot be longer than 15 characters long.",
      );
    }
  }

  if (!lastName) {
    lastNameErrors.push("Last name is missing.");
  } else {
    if (lastName.length < 3) {
      lastNameErrors.push("Last name must be at least 3 characters long.");
    }

    if (lastName.length > 15) {
      lastNameErrors.push(
        "Last name cannot be longer than 15 characters long.",
      );
    }
  }

  if (!username) {
    usernameErrors.push("Username is missing.");
  } else {
    if (username.length < 5) {
      usernameErrors.push("Username must be at least 5 characters long.");
    }

    if (username.length > 15) {
      usernameErrors.push("Username cannot be longer than 15 characters long.");
    }
  }

  if (!password) {
    passwordErrors.push("Password is missing.");
  } else {
    if (password.length < 8) {
      passwordErrors.push("Password must be at least 8 characters long.");
    }

    if (password.replace(/[0-9]/g, "").length === password.length) {
      passwordErrors.push("Password must have at least 1 number.");
    }

    if (password.replace(/[a-z]/g, "").length === password.length) {
      passwordErrors.push("Password must have at least 1 lowercase letter.");
    }

    if (password.replace(/[A-Z]/g, "").length === password.length) {
      passwordErrors.push("Password must have at least 1 capital letter.");
    }
  }

  if (!confirmPassword) {
    confirmPasswordErrors.push("Password confirmation is missing.");
  }

  if (password !== confirmPassword) {
    passwordErrors.push("");
    confirmPasswordErrors.push("Passwords are not matching.");
  }

  // if some input's array is not empty,
  // push an object which contains input name and it's errors.
  if (firstNameErrors.length > 0) {
    errors.push({
      inputName: "firstName",
      errorsList: firstNameErrors,
    });
  }

  if (lastNameErrors.length > 0) {
    errors.push({
      inputName: "lastName",
      errorsList: lastNameErrors,
    });
  }

  if (usernameErrors.length > 0) {
    errors.push({
      inputName: "username",
      errorsList: usernameErrors,
    });
  }

  if (passwordErrors.length > 0) {
    errors.push({
      inputName: "password",
      errorsList: passwordErrors,
    });
  }

  if (confirmPasswordErrors.length > 0) {
    errors.push({
      inputName: "confirmPassword",
      errorsList: confirmPasswordErrors,
    });
  }

  return errors;
}
