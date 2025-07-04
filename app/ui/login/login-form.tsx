"use client";

import { lusitana } from "@/app/ui/fonts";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { AlertCircleIcon } from "lucide-react";

import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

export default function LoginForm() {
  const router = useRouter();
  const [error, setError] = useState<React.ReactNode>("");

  const credentialsAction = async (formData: FormData) => {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    const res = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (res?.error) {
      setError(
        <Alert variant="destructive">
          <AlertCircleIcon />
          <AlertTitle>Error al inicar sesion.</AlertTitle>
          <AlertDescription>
            <p>Please verify your billing information and try again.</p>
          </AlertDescription>
        </Alert>
      );
    } else {
      toast("Inicio de sesion exitoso!", {
        description: "Seras reedirigido a la pagina principal",
        action: {
          label: "Success",
          onClick: () => console.log("Undo"),
        },
      });
      router.push("/products");
    }
  };

  return (
    <form action={credentialsAction}>
      <div className="flex flex-col gap-6">
        <div className="grid gap-2">
          <Label htmlFor="credentials-email">Email</Label>
          <Input
            id="credentials-email"
            type="email"
            name="email"
            placeholder="m@example.com"
            required
          />
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="credentials-password">Password</Label>
          </div>
          <Input
            id="credentials-password"
            type="password"
            name="password"
            required
          />
        </div>
        <Button type="submit" className="w-full">
          Login
        </Button>
      </div>
      {error && (
        <p className={`${lusitana.className} mb-3 text-2xl`}>{error}</p>
      )}
    </form>
  );
}
