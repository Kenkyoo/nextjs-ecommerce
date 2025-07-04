// pages/api/wishes/route.ts (GET)
import { NextResponse } from "next/server";
import { auth } from "@/auth"; // si usás NextAuth
import prisma from "@/app/lib/prisma";

export async function GET() {
  const session = await auth();
  if (!session?.user?.email)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const user = await prisma.user.findUnique({
    where: { email: session.user.email },
    include: {
      wishes: {
        select: { id: true },
      },
    },
  });

  if (!user) {
    return NextResponse.json({ error: "User not found" }, { status: 404 });
  }

  return NextResponse.json({ wishes: user.wishes.map((w) => w.id) });
}
