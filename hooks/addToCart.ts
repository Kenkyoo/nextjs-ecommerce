"use client";

import { mutate } from "swr";

export const addToCart = async ({ productId }: { productId: string }) => {
  try {
    const response = await fetch("/api/cart", {
      method: "POST",
      body: JSON.stringify({ productId }),
    });
    if (!response.ok) throw new Error("Failed");

    // Actualizar el carrito luego de agregar
    mutate("/api/cart");
  } catch (error) {
    console.error("Error:", error);
  }
};
