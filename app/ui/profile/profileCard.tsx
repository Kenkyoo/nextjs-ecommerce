"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { signOut } from "next-auth/react";
import { Button } from "@/components/ui/button";

interface ProfileCardProps {
  session: {
    user?: {
      name?: string | null;
      email?: string | null;
      image?: string | null;
    };
  };
}

export default function ProfileCard({ session }: ProfileCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>{session.user?.name ?? "Usuario"}</CardTitle>
        <CardDescription>{session.user?.email}</CardDescription>
      </CardHeader>
      <CardContent>
        {session.user?.image ? (
          <Image
            src={session.user.image}
            width={300}
            height={300}
            alt={session.user?.name ?? "User"}
          />
        ) : (
          <Image
            src="https://github.com/shadcn.png"
            width={300}
            height={300}
            alt="avatar"
          />
        )}
      </CardContent>
      <CardFooter>
        <div className="flex flex-wrap items-center gap-2 md:flex-row">
          <Button onClick={() => signOut()}>Sign Out</Button>
        </div>
      </CardFooter>
    </Card>
  );
}
