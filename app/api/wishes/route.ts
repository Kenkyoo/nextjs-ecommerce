import { NextResponse } from "next/server";
import { auth } from "@/auth"; // si usás NextAuth
import prisma from "@/app/lib/prisma";

export async function POST(req: Request) {
  const session = await auth();
  if (!session?.user?.email)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const productId = Number(body.productId);

  if (isNaN(productId)) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  }

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  // Opcional: verificar si ya existe antes de conectar
  const alreadyInList = await prisma.user.findFirst({
    where: {
      id: user.id,
      wishes: {
        some: { id: productId },
      },
    },
  });

  if (alreadyInList) {
    return NextResponse.json(
      { message: "Product already in wishes" },
      { status: 200 }
    );
  }

  await prisma.user.update({
    where: {
      id: user.id, // el ID del usuario
    },
    data: {
      wishes: {
        connect: {
          id: productId, // el ID del producto que querés agregar a la lista de deseos
        },
      },
    },
  });

  return NextResponse.json({ success: true });
}

export async function GET() {
  const session = await auth();
  if (!session?.user?.email)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  const wishes = await prisma.user.findMany({
    where: { email: session.user.email },
    include: { wishes: true },
  });

  const serialized = serializeBigInt(wishes);
  return NextResponse.json({ wishes: serialized });
}

function serializeBigInt(obj: unknown): unknown {
  return JSON.parse(
    JSON.stringify(obj, (_key, value) =>
      typeof value === "bigint" ? value.toString() : value
    )
  );
}
