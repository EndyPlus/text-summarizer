import bcrypt from "bcryptjs";

type Credentials = {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
};

const formatName = (str: string) =>
  str[0].toUpperCase() + str.slice(1, str.length).toLowerCase();

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
