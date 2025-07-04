import { Button } from "@/components/ui/button";
import { Logo } from "./logo";
import { NavMenu } from "./nav-menu";
import { NavigationSheet } from "./navigation-sheet";
import { auth } from "@/auth";
import { ModeToggle } from "@/components/toogle-mode";
import AvatarUser from "./avatar";

export default async function Navbar({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await auth();

  return (
    <div className="bg-base">
      <nav className="h-16 bg-background border-b">
        <div className="h-full flex items-center justify-between gap-4 max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
          <Logo />
          <NavMenu className="hidden md:block" />
          <div className="flex items-center gap-3">
            {session ? (
              <AvatarUser />
            ) : (
              <Button variant="outline" className="hidden sm:inline-flex">
                Sign In
              </Button>
            )}
            <ModeToggle />
            {children}
            <div className="md:hidden">
              <NavigationSheet />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
