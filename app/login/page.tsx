import FormPage from "../ui/login/formPage";
import { auth } from "@/auth";
import { redirect } from "next/navigation";
import Footer from "@/components/footer";
import FormIcon from "../ui/login/formIcon";
import FormImage from "../ui/login/formImage";
import Container from "../ui/login/container";

export default async function Page() {
  const session = await auth();

  if (session) {
    redirect("/products");
  }

  return (
    <>
      <div className="grid min-h-svh lg:grid-cols-2">
        <Container>
          <FormIcon />
          <FormPage />
        </Container>
        <FormImage />
      </div>
      <Footer />
    </>
  );
}
