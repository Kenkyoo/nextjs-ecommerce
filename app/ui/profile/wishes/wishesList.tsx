"use client";

import useSWR, { mutate } from "swr";
import { Product } from "@prisma/client";
import { ProductCard } from "@/components/productCard";
import fetcher from "@/app/lib/utils";
import deleteWishes from "@/hooks/deleteWishes";

export default function WishesList() {
  const { data, error, isLoading } = useSWR(`/api/wishes`, fetcher);

  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // render data
  const wishes = data.wishes[0].wishes;
  if (!wishes) return <div>No hay productos favoritos</div>;
  return (
    <>
      {wishes.length === 0 ? (
        <div>No hay productos en el carrito</div>
      ) : (
        wishes.map((product: Product) => (
          <div key={product.id}>
            <ProductCard product={product} />
            <button
              onClick={async () => {
                await deleteWishes(String(product.id));
                mutate("/api/wishes");
              }}
              className="text-red-500"
            >
              Eliminar
            </button>
          </div>
        ))
      )}
    </>
  );
}
