import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import { findUser } from "@/src/services/serverActions/prismaActions";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        const user = await findUser(credentials.username);

        if (!user) {
          return null;
        }

        const isPasswordCorrect = credentials.password === user.password;

        if (isPasswordCorrect) {
          return { id: user.id, username: user.username, name: user.name };
        }
        return null;
      },
    }),
  ],
  session: {
    strategy: "jwt", // Оце робить сесію stateless
  },
  callbacks: {
    // Ці колбеки дозволяють додати дані в токен і сесію
    // @ts-expect-error no type

    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.username = user.username;
      }
      return token;
    },
    // @ts-expect-error no type

    async session({ session, token }) {
      if (session.user) {
        session.user.id = token.id;
        session.user.username = token.username; // тепер він буде в useSession()
      }
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Ключ для шифрування JWT
};

// @ts-expect-error no type
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
