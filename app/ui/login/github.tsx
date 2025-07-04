"use client";

import { signIn } from "next-auth/react";
import { Button } from "@/components/ui/button";

export default function GithubBtn() {
  return (
    <Button
      onClick={() => signIn("github")}
      variant="outline"
      className="w-full"
    >
      Login with Github
    </Button>
  );
}
