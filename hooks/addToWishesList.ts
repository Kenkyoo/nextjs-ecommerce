"use client";

import useSWR, { mutate } from "swr";

export const addToWishesList = async ({ productId }: { productId: string }) => {
  try {
    const response = await fetch("/api/wishes", {
      method: "POST",
      body: JSON.stringify({ productId }),
    });
    if (!response.ok) throw new Error("Failed");

    // Actualizar el carrito luego de agregar
    mutate("/api/wishes");
  } catch (error) {
    console.error("Error:", error);
  }
};
