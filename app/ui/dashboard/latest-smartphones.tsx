import { fetchLatestSmartPhones } from "@/app/lib/data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { BaseProduct } from "@/app/lib/types";

export default async function LatestSmartPhones() {
  const { smart1, smart2, smart3, smart4 } =
    (await fetchLatestSmartPhones()) as {
      smart1: BaseProduct;
      smart2: BaseProduct;
      smart3: BaseProduct;
      smart4: BaseProduct;
    };

  return (
    <div className="vh-90 min-h-screen py-2 sm:py-4 lg:py-6">
      <div className="mx-auto max-w-screen-2xl px-2 md:px-4">
        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <div className="group relative flex h-48 overflow-hidden rounded-lg bg-dark shadow-lg md:h-80 p-4">
            {smart1.images[0] ? (
              <Image
                src={smart1.images[0]}
                alt={smart1.title ?? "Producto"}
                width={200}
                height={200}
                className="absolute inset-0 object-cover object-center transition duration-200 group-hover:scale-110"
              />
            ) : (
              <p>No hay imagen</p>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                {smart1.title}
              </Badge>{" "}
            </span>
          </div>
          <div className="group relative flex h-48 p-4 overflow-hidden rounded-lg bg-dark shadow-lg md:col-span-2 md:h-80">
            {smart2.images[0] ? (
              <Image
                width={400}
                height={400}
                src={smart2.images[0]}
                loading="lazy"
                alt={smart2.title ?? "Producto"}
                className="absolute inset-0 object-cover object-center transition duration-200 group-hover:scale-110"
              />
            ) : (
              <p>No hay imagen</p>
            )}
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                {smart2.title}
              </Badge>{" "}
            </span>
          </div>
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-dark shadow-lg md:col-span-2 md:h-80">
            {smart3.images[0] ? (
              <Image
                width={400}
                height={400}
                src={smart3.images[0]}
                loading="lazy"
                alt={smart2.title ?? "Producto"}
                className="absolute inset-0 object-cover object-center transition duration-200 group-hover:scale-110"
              />
            ) : (
              <p>No hay imagen</p>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                {smart3.title}
              </Badge>{" "}
            </span>
          </div>
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-dark shadow-lg md:h-80">
            {smart4.images[0] ? (
              <Image
                width={200}
                height={200}
                src={smart4.images[0]}
                loading="lazy"
                alt={smart2.title ?? "Producto"}
                className="absolute inset-0  object-cover object-center transition duration-200 group-hover:scale-110"
              />
            ) : (
              <p>No hay imagen</p>
            )}

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg">
              <Badge
                variant="secondary"
                className="bg-blue-500 text-white dark:bg-blue-600"
              >
                {" "}
                {smart4.title}
              </Badge>{" "}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
