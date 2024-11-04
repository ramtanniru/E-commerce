// app/api/auth/[...nextauth].js
import NextAuth from "next-auth";
import Providers from "next-auth/providers";

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: "Credentials",
      credentials: {
        username: { label: "Username", type: "text" },
        password: { label: "Password", type: "password" }
      },
      authorize: async (credentials) => {
        // Here you could validate credentials against a database or API
        if (credentials.username === "user" && credentials.password === "pass") {
          return { id: 1, name: "User" };
        }
        return null;
      }
    })
  ],
  pages: {
    signIn: '/auth/signin',  // Custom sign-in page path
    signOut: '/auth/signout',
    error: '/auth/error',
    verifyRequest: '/auth/verify-request',
    newUser: null // New users will be redirected here on first sign-in
  },
  session: {
    jwt: true,
  },
  callbacks: {
    async session(session, user) {
      session.user = user;
      return session;
    }
  }
});
