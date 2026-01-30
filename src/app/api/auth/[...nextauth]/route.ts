import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        // Тут ваша логіка перевірки (наприклад, запит до зовнішнього API)
        // Або просто хардкод для тесту:
        if (
          // @ts-expect-error no type

          credentials.username === "admin" &&
          // @ts-expect-error no type

          credentials.password === "admin"
        ) {
          return { id: "0", name: "Artem", username: "admin" };
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
      }
      return token;
    },
    // @ts-expect-error no type

    async session({ session, token }) {
      session.user.id = token.id;
      return session;
    },
  },
  secret: process.env.NEXTAUTH_SECRET, // Ключ для шифрування JWT
};

// @ts-expect-error no type
const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
