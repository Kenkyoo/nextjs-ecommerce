import LoginForm from "@/app/ui/login/login-form";
import RegisterForm from "@/app/ui/login/register-form";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Form } from "@/app/ui/login/form";
import { Suspense } from "react";

export default function FormPage() {
  return (
    <div className="flex flex-1 items-center justify-center">
      <div className="w-full max-w-xs">
        <Tabs defaultValue="register">
          <TabsList>
            <TabsTrigger value="register">Register</TabsTrigger>
            <TabsTrigger value="login">Login</TabsTrigger>
          </TabsList>
          <TabsContent value="register">
            <Suspense>
              <Form>
                <RegisterForm />
              </Form>
            </Suspense>
          </TabsContent>
          <TabsContent value="login">
            <Suspense>
              <Form>
                <LoginForm />
              </Form>
            </Suspense>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
