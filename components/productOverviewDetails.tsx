import { Product } from "@prisma/client";
import { StarIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import Link from "next/link";

export default function ProductOverviewDetails({
  product,
}: {
  product: Product;
}) {
  return (
    <div className="relative flex w-full items-center overflow-hidden px-4 pt-14 pb-8 shadow-2xl sm:px-6 sm:pt-8 md:p-6 lg:p-8">
      <div className="grid w-full grid-cols-1 items-start gap-x-6 gap-y-8 sm:grid-cols-12 lg:gap-x-8">
        <Image
          height={200}
          width={200}
          alt={product.title}
          src={product.thumbnail}
          className="aspect-2/3 w-full rounded-lg bg-gray-100 object-cover sm:col-span-4 lg:col-span-5"
        />
        <div className="sm:col-span-8 lg:col-span-7">
          <h2 className="text-2xl font-bold sm:pr-12">{product.title}</h2>

          <section aria-labelledby="information-heading" className="mt-2">
            <h3 id="information-heading" className="sr-only">
              Product information
            </h3>

            <p className="text-2xl">{product.price}</p>

            {/* Reviews */}
            <div className="mt-6">
              <h4 className="sr-only">Reviews</h4>
              <div className="flex items-center">
                <div className="flex items-center">
                  {[0, 1, 2, 3, 4].map((rating) => (
                    <StarIcon key={rating} aria-hidden="true" />
                  ))}
                </div>
                <p className="sr-only">{product.rating} out of 5 stars</p>
                <h4 className="ml-3 text-sm font-medium text-indigo-600 hover:text-indigo-500">
                  % {product.discountPercentage} Discount
                </h4>
              </div>
            </div>
          </section>

          <section aria-labelledby="options-heading" className="mt-10">
            <h3 id="options-heading" className="sr-only">
              Product options
            </h3>
            <div className="mt-4 flex items-center gap-x-3">
              {product.brand}
            </div>

            <div className="mt-2">
              <p className="leading-7 [&:not(:first-child)]:mt-2">
                {product.description}
              </p>
            </div>

            <button className="mt-6 flex w-full items-center justify-center rounded-md border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:outline-hidden">
              <Link href={`/products/${product.id}`}>Ver mas</Link>
            </button>
          </section>
        </div>
      </div>
    </div>
  );
}
