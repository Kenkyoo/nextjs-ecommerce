import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <div>
      <Separator className="my-2 border border-base-950" />
      <div className="text-lg text-center font-semibold p-4">
        A modal dialog that interrupts the user with important content and
        expects a response.
      </div>
    </div>
  );
}
