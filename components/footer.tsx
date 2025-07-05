import { Separator } from "@/components/ui/separator";

export default function Footer() {
  return (
    <div>
      <Separator className="my-2 border border-base-950" />
      <div className="text-lg text-center font-semibold p-4">
        Built by Kenkyo at Vercel. The source code is available on GitHub.
      </div>
    </div>
  );
}
