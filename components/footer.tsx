import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <div className="text-center mx-auto py-4 w-full">
      <Separator className="my-4 border border-neutral-950" />
      <div className="text-lg font-semibold p-4">
        A modal dialog that interrupts the user with important content and
        expects a response.
      </div>
    </div>
  );
}
