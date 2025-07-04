import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  Menu,
  MenuItem,
  MenuButton,
  MenuItems,
} from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import NavLinks from "./nav-links";
import Image from "next/image";
import { auth } from "@/auth";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ModeToggle } from "@/components/toogle-mode";

export default async function Navbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <Disclosure as="nav">
      <div className="min-w-screen max-w-screen mx-auto px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button*/}
            <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 hover:bg-gray-700  focus:ring-2 focus:ring-white focus:outline-hidden focus:ring-inset">
              <span className="absolute -inset-0.5" />
              <span className="sr-only">Open main menu</span>
              <Bars3Icon
                aria-hidden="true"
                className="block size-6 group-data-open:hidden"
              />
              <XMarkIcon
                aria-hidden="true"
                className="hidden size-6 group-data-open:block"
              />
            </DisclosureButton>
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <div className="flex shrink-0 items-center">
              <Image
                alt="Your Company"
                src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=500"
                className="h-8 w-auto"
                width={100}
                height={100}
              />
            </div>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                <NavLinks />
              </div>
            </div>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            {children}
            <ModeToggle />
            {/* Profile dropdown */}
            <Menu as="div" className="relative ml-3">
              <div>
                <MenuButton className="relative flex rounded-full text-sm focus:outline-hidden focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-gray-800">
                  <span className="absolute -inset-1.5" />
                  <span className="sr-only">Open user menu</span>
                  {session?.user?.image ? (
                    <Image
                      alt={session?.user?.name ?? "User"}
                      src={session?.user?.image ?? ""}
                      className="size-8 rounded-full"
                      height={80}
                      width={60}
                    />
                  ) : (
                    <Avatar>
                      <AvatarFallback>My</AvatarFallback>
                    </Avatar>
                  )}
                </MenuButton>
              </div>

              <MenuItems
                transition
                className="absolute right-0 z-10 mt-2 w-48 origin-top-right rounded-md  py-1 shadow-lg ring-1 ring-black/5 transition focus:outline-hidden data-closed:scale-95 data-closed:transform data-closed:opacity-0 data-enter:duration-100 data-enter:ease-out data-leave:duration-75 data-leave:ease-in"
              >
                <MenuItem>
                  <Link
                    className="block px-4 py-2 text-sm text-base data-focus:bg-base-100 data-focus:outline-hidden"
                    href="/products/profile"
                  >
                    Your Profile
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    className="block px-4 py-2 text-sm text-base-700 data-focus:bg-base-100 data-focus:outline-hidden"
                    href="/products/profile/cart"
                  >
                    My Cart
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    className="block px-4 py-2 text-sm text-base-700 data-focus:bg-base-100 data-focus:outline-hidden"
                    href="/products/profile/wishes"
                  >
                    My Wishlist
                  </Link>
                </MenuItem>
              </MenuItems>
            </Menu>
          </div>
        </div>
      </div>
      <Separator className="w-full my-4 border border-base-950" />
      <DisclosurePanel className="sm:hidden">
        <div className="space-y-1 px-2 pt-2 pb-3">
          <NavLinks />
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
}
