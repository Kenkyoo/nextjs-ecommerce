import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";
import prisma from "@/app/lib/prisma";
import { signInSchema } from "@/lib/zod";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = signInSchema.parse(body);

    const userExists = await prisma.user.findUnique({
      where: { email },
    });

    if (userExists) {
      return NextResponse.json(
        { error: "El usuario ya existe" },
        { status: 400 }
      );
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser = await prisma.user.create({
      data: { email, password: hashedPassword },
    });

    return NextResponse.json({ message: "Usuario creado", user: newUser });
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { error: "Error al registrar usuario"},
      { status: 500 }
    );
  }
}
