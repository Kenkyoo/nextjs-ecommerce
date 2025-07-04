"use client";

import useSWR, { mutate } from "swr";
import { Product } from "@prisma/client";
import fetcher from "@/app/lib/utils";
import deleteItem from "@/hooks/deleteItem";
import Link from "next/link";
import Image from "next/image";
import { AnimatedList } from "@/components/magicui/animated-list";

export default function CartProducts() {
  const { data, error, isLoading } = useSWR(`/api/cart`, fetcher);
  if (error) return <div>failed to load</div>;
  if (isLoading) return <div>loading...</div>;
  // render data
  const products = data.cartItems;
  if (!products) return <div>No hay productos en el carrito</div>;
  return (
    <div>
      {products.length === 0 ? (
        <div>No hay productos en el carrito</div>
      ) : (
        <ul role="list" className="-my-6 divide-y divide-gray-200">
          <AnimatedList>
            {products.map((item: { id: number | string; product: Product }) => (
              <li key={item.id} className="flex py-6">
                <div className="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
                  <Image
                    height={100}
                    width={100}
                    alt={item.product.title}
                    src={item.product.thumbnail}
                    className="size-full object-cover"
                  />
                </div>

                <div className="ml-4 flex flex-1 flex-col">
                  <div>
                    <div className="flex justify-between text-base font-medium text-gray-900">
                      <h3>
                        <Link href={`/products/${item.product.id}`}>
                          {item.product.title}
                        </Link>
                      </h3>
                      <p className="ml-4">{item.product.price}</p>
                    </div>
                    <p className="mt-1 text-sm text-gray-500">
                      {item.product.category}
                    </p>
                  </div>
                  <div className="flex flex-1 items-end justify-between text-sm">
                    <p className="text-gray-500">Qty {item.product.brand}</p>

                    <div className="flex">
                      <button
                        onClick={async () => {
                          await deleteItem(String(item.product.id));
                          mutate("/api/cart");
                        }}
                        type="button"
                        className="font-medium text-indigo-600 hover:text-indigo-500"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </AnimatedList>
        </ul>
      )}
    </div>
  );
}
