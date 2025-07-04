"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function GoogleBtn() {
  return (
    <Button
      onClick={() => signIn("google")}
      variant="outline"
      className="w-full"
    >
      Login with Google
    </Button>
  );
}
