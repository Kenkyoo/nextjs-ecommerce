import CartProducts from "@/app/ui/profile/cart/cart-products";
import { auth } from "@/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const session = await auth();

  if (!session) {
    redirect("/login");
  }

  return (
    <div className="flex h-full flex-col overflow-y-auto py-8 px-12 shadow-xl">
      <div className="flex-1 overflow-y-auto px-12 py-6 sm:px-6">
        <div className="flex items-start justify-between">
          <h1 className="text-xl font-bold mb-4">Mi Carrito</h1>
        </div>
        <CartProducts />
      </div>
    </div>
  );
}
