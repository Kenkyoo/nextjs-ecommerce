"use client";

import { BaseDetails } from "@/app/lib/types";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import { addToCart } from "@/hooks/addToCart";
import { ScratchToReveal } from "@/components/magicui/scratch-to-reveal";
import { Badge } from "@/components/ui/badge";

export default function ProductDetails({ product }: { product: BaseDetails }) {
  return (
    <div>
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {/* Producto */}
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Galería */}
          <div className="space-y-4">
            <Image
              src={product.thumbnail}
              alt={product.title}
              width={500}
              height={500}
              className="w-full rounded-lg object-cover"
            />
            <div className="grid grid-cols-4 gap-2">
              {product.images.slice(0, 4).map((src, i) => (
                <Image
                  key={i}
                  src={src}
                  alt={`Imagen ${i + 1}`}
                  width={100}
                  height={100}
                  className="rounded-lg object-cover w-full h-24"
                />
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="mt-10 lg:mt-0">
            <h1 className="text-3xl font-bold text-base">{product.title}</h1>

            <p className="mt-4 text-xl text-base">${product.price}</p>

            {/* Rating */}
            <div className="mt-4 flex items-center">
              {[0, 1, 2, 3, 4].map((i) => (
                <StarIcon
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(product.rating)
                      ? "text-yellow-400"
                      : "text-gray-200"
                  }`}
                  aria-hidden="true"
                />
              ))}
              <span className="ml-2 text-sm text-gray-500">
                ({product.rating.toFixed(1)} estrellas)
              </span>
            </div>

            {/* Descripción */}
            <div className="mt-6">
              <h2 className="text-sm font-medium text-base">Descripción</h2>
              <p className="mt-2 text-sm text-base">{product.description}</p>
            </div>

            {/* Información adicional */}
            <div className="mt-6 space-y-1 text-sm text-base">
              <p>
                <strong>Categoría:</strong> {product.category}
              </p>
              <p>
                <strong>Marca:</strong> {product.brand}
              </p>
              <p>
                <strong>SKU:</strong> {product.sku}
              </p>
              <p>
                <strong>Stock:</strong> {product.stock}
              </p>

              <p>
                <strong>Política de devolución:</strong> {product.returnPolicy}
              </p>
            </div>
            <p className="my-4 py-2">
              <strong>Descubre el descuento que tenemos para ti</strong>
            </p>
            <ScratchToReveal
              width={150}
              height={150}
              minScratchPercentage={70}
              className="flex items-center justify-center overflow-hidden rounded-2xl border-2 bg-gray-100"
              gradientColors={["#A97CF8", "#F38CB8", "#FDCC92"]}
            >
              <p className="text-base">% {product.discountPercentage}</p>
            </ScratchToReveal>
            {/* Tags */}
            {product.tags.length > 0 && (
              <div className="mt-6">
                <h3 className="text-sm font-medium text-base">Tags</h3>
                <ul className="mt-2 flex flex-wrap gap-2 text-sm text-base">
                  {product.tags.map((tag, idx) => (
                    <li key={idx} className="bg-base px-2 py-1 rounded">
                      <Badge variant="destructive">{tag}</Badge>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* Botón */}
            <button
              onClick={() => addToCart({ productId: String(product.id) })}
              className="mt-6 w-full rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
            >
              Agregar al carrito
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
