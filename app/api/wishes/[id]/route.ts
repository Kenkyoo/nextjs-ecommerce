import { NextResponse } from "next/server";
import { auth } from "@/auth";
import prisma from "@/app/lib/prisma";

export async function DELETE(req: Request) {
  const session = await auth();

  if (!session?.user?.email) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { productId } = await req.json();

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  await prisma.user.update({
    where: { id: user.id },
    data: {
      wishes: {
        disconnect: { id: productId },
      },
    },
  });

  return NextResponse.json({ success: true });
}
