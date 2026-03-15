import bcrypt from "bcryptjs";

type Credentials = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
};

// Capitalizing a string
const formatName = (str: string) =>
  str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();

/**
 * Handle credentials formatting
 *
 * @returns A Promise which if resolved return a formatted name, username and hashed password.
 *
 * @example
 * resolvedPromise = {
 * formattedUsername: "janedoe",
 * hashedPassword: "$2b$10$6DhIalzvYRLABMNRAUlN0ec5csp1SV2V2kFMkn3xU8EuGVousfTu.",
 * formattedName: "Jane Doe",
 * }
 */
export default async function getFormattedCredentials({
  username,
  password,
  firstName,
  lastName,
}: Credentials) {
  const formattedUsername = username.toLowerCase();

  const formattedName = `${formatName(firstName)} ${formatName(lastName)}`;

  const hashedPassword = await bcrypt.hash(password, 10);

  return { formattedUsername, hashedPassword, formattedName };
}
