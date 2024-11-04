import React from 'react'
import CredentialsProvider from "next-auth/providers/credentials";

export const options = {
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {
          username: { label: "Username", type: "text" },
          password: { label: "Password", type: "password" }
        },
        async authorize(credentials) {
          if (credentials?.username === "user" && credentials?.password === "pass") {
            return { id: 1, name: "User" }; 
          }
          return null;
        }
      })
    ],
    pages: {
      signIn: '/auth/sign-in',
      signOut: '/auth/sign-out',
      error: '/auth/error',
      verifyRequest: '/auth/verify-request',
      newUser: '/auth/new-user'
    },
    session: {
      jwt: true
    },
    callbacks: {
      async jwt({ token, user }) {
        if (user) {
          token.user = user;
        }
        return token;
      },
      async session({ session, token }) {
        session.user = token.user;
        return session;
      }
    }
};