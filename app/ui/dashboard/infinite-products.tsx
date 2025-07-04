"use client";

import { fetchLatestProducts } from "@/app/lib/data";
import { InfiniteMovingCards } from "@/app/ui/dashboard/infinite-moving-cards";
import { BaseProduct } from "@/app/lib/types";
import Image from "next/image";

export default async function InfiniteProducts() {
  const data = (await fetchLatestProducts()) as BaseProduct[];

  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards direction="right" speed="slow">
        {data.map((item) => (
          <li
            className="relative w-[350px] max-w-full shrink-0 rounded-2xl border border-b-0 border-zinc-200 bg-[linear-gradient(180deg,#fafafa,#f5f5f5)] px-8 py-6 md:w-[450px] dark:border-zinc-700 dark:bg-[linear-gradient(180deg,#27272a,#18181b)]"
            key={item.id}
          >
            <div
              aria-hidden="true"
              className="user-select-none pointer-events-none absolute -top-0.5 -left-0.5 -z-1 h-[calc(100%_+_4px)] w-[calc(100%_+_4px)]"
            ></div>
            <span className="relative z-20 text-sm leading-[1.6] font-normal text-neutral-800 dark:text-gray-100">
              <Image
                width={300}
                height={300}
                src={item.images[0]}
                alt={item.title}
              />
            </span>
            <div className="relative z-20 mt-6 flex flex-row items-center">
              <span className="flex flex-col gap-1">
                <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                  {item.price}
                </span>
                <span className="text-sm leading-[1.6] font-normal text-neutral-500 dark:text-gray-400">
                  {item.title}
                </span>
              </span>
            </div>
          </li>
        ))}
      </InfiniteMovingCards>
    </div>
  );
}
