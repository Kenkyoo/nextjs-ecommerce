"use client";

import {
  House,
  Smartphone,
  Tablet,
  Laptop,
  ShoppingBasket,
} from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
// Map of links to display in the side navigation.
// Depending on the size of the application, this would be stored in a database.
const links = [
  { name: "Home", href: "/", icon: House },
  { name: "Products", href: "/products", icon: ShoppingBasket },
  { name: "Smarthpones", href: "/products/smartphones", icon: Smartphone },
  {
    name: "Laptops",
    href: "/products/laptops",
    icon: Laptop,
  },
  { name: "Tablets", href: "/products/tablets", icon: Tablet },
];

export default function NavLinks() {
  const pathname = usePathname();
  return (
    <>
      {links.map((link) => {
        const LinkIcon = link.icon;
        return (
          <Link
            key={link.name}
            href={link.href}
            className={clsx(
              "flex h-[48px] grow items-center justify-center gap-2 rounded-md p-3 text-sm font-medium hover:bg-base md:flex-none md:justify-start md:p-2 md:px-3",
              {
                "bg-base text-base": pathname === link.href,
              }
            )}
          >
            <LinkIcon className="w-6" />
            <p className="hidden md:block">{link.name}</p>
          </Link>
        );
      })}
    </>
  );
}
