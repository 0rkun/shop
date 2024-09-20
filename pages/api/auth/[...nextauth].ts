import NextAuth from "next-auth/next";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { PrismaClient } from "@prisma/client";
import GoogleProvider from "next-auth/providers/google"
import prisma from "@/libs/prismadb"
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt"
import { AuthOptions } from "next-auth";


export const authOptions : AuthOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    GoogleProvider({
      clientId:process.env.GOOGLE_CLIENT_ID as string,
      clientSecret:process.env.GOOGLE_CLIENT_SECRET as string,
    }),

    CredentialsProvider({
      name:"credentials",
      credentials: {
        email: {label:"email", type:"text"},
        password: {label:"password", type:"password"},
      },
      async authorize( credentials, req) {
        if(!credentials?.email || !credentials?.password){
          throw new Error("Geçersiz email ya da parola")
        }
        const user = await prisma.user.findUnique({
          where : {
            email: credentials.email
          }
        })

        if(!user || !user.hashedPassword){
            throw new Error("Bulunamadı!")
        }

        const comparePassword = await bcrypt.compare(credentials.password, user.hashedPassword)

        if(!user || !user.hashedPassword){
            throw new Error("Yanlış Parola!")
        }
        return user 
      }
    })
    
  ],
  pages : {
    signIn: "/login"
  },
  debug: process.env.NODE_ENV === "development",
  session : {
    strategy:"jwt"
  },
  secret: process.env.NEXTAUTH_SECRET
}


export default NextAuth(authOptions);
 