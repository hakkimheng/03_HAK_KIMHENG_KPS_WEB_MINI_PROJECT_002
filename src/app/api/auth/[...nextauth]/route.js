import { loginService } from "@/service/auth/login.sevice";
import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(data) {
        try {
          const userData = {
            email: data?.email,
            password: data?.password,
          };
          console.log(userData);
          const userInfo = await loginService(userData);
          if (!userInfo || userInfo?.status === "INTERNAL_SERVER_ERROR") {
            throw new Error(userInfo?.detail || "Invalid credentials");
          }
          console.log(userInfo?.payload.token);
          
          return userInfo?.payload.token;

          
        } catch (error) {
          throw new Error(error.message || "Something went wrong");
        }
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
      return { ...token, ...user };
    },
    async session({ session, token }) {
      session.user = token;
      return session;
    },
  },
};

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };