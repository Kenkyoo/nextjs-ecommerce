import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { auth } from "@/auth";
import Link from "next/link";

export default async function AvatarUser() {
  const session = await auth();
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger>
          <Avatar>
            <AvatarImage src={session?.user?.image ?? undefined} />
            <AvatarFallback>My</AvatarFallback>
          </Avatar>
        </MenubarTrigger>
        <MenubarContent>
          <MenubarItem>
            <Link href="/products/profile">Profile</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/products/profile/cart">Cart</Link>
          </MenubarItem>
          <MenubarItem>
            <Link href="/products/profile/wishes">Wishes</Link>
          </MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
}
