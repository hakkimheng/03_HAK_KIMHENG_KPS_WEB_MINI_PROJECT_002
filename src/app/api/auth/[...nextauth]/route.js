import { loginService } from "@/service/auth/login.sevice";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(data) {
        const userData = {
          email: data?.email,
          password: data?.password,
        };

        const userInfo = await loginService(userData);
        if (!userInfo || userInfo?.status === "INTERNAL_SERVER_ERROR" || !userInfo?.payload?.token) {
          throw new Error(userInfo?.detail || "Invalid credentials");
        }
        return { token: userInfo.payload.token }; // Return token in an object
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/login",
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.token = user.token; // Store the token
      }
      return token;
    },
    async session({ session, token }) {
      session.user = { ...session.user, token: token.token }; // Add token to user object
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };