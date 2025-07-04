import { fetchProductById } from "@/app/lib/data";
import { notFound } from "next/navigation";
import ProductDetails from "@/components/productDetails";
import { BaseDetails } from "@/app/lib/types";

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const product = (await fetchProductById(Number(id))) as BaseDetails | null;

  if (!product) {
    notFound();
    return null;
  }

  return <ProductDetails product={product} />;
}
