import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";
import { signInSchema } from "@/lib/zod";
import bcrypt from "bcryptjs";
import { PrismaAdapter } from "@auth/prisma-adapter";
import prisma from "@/app/lib/prisma";
import { ZodError } from "zod";
import GitHub from "next-auth/providers/github";
import Google from "next-auth/providers/google";

export const { handlers, auth, signIn, signOut } = NextAuth({
  session: {
    strategy: "jwt",
  },
  adapter: PrismaAdapter(prisma),
  providers: [
    Google,
    GitHub,
    Credentials({
      credentials: {
        email: {},
        password: {},
      },
      authorize: async (credentials) => {
        console.log("Credenciales recibidas:", credentials);
        try {
          // Validar credenciales con Zod
          const { email, password } = await signInSchema.parseAsync(
            credentials
          );

          // Buscar usuario
          let user = await prisma.user.findUnique({ where: { email } });

          if (!user) {
            // Registrar nuevo usuario si no existe
            const hashedPassword = await bcrypt.hash(password, 10);
            user = await prisma.user.create({
              data: {
                email,
                password: hashedPassword,
              },
            });
          } else {
            // Verificar contraseña
            const isValid = await bcrypt.compare(password, user.password || "");
            if (!isValid) {
              throw new Error("Invalid credentials.");
            }
          }

          return user;
        } catch (error) {
          if (error instanceof ZodError) {
            console.error("Zod validation failed:", error.flatten());
            return null;
          }

          console.error("Authorization error:", error);
          return null;
        }
      },
    }),
  ],
});
