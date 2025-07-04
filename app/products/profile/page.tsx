import { auth } from "@/auth";
import { redirect } from "next/navigation";
import ProfileCard from "@/app/ui/profile/profileCard";
import Container from "@/app/ui/profile/container";
import CartProducts from "@/app/ui/profile/cart/cart-products";
import Heading from "@/app/ui/heading";

export default async function Page() {
  const session = await auth();
  console.log(session);
  if (!session) {
    redirect("/login");
  }

  console.log(session);

  return (
    <>
      <Heading title="Mi perfil" />
      <Container>
        <ProfileCard session={session} />
        <CartProducts />
      </Container>
    </>
  );
}
