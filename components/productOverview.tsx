import {
  Dialog,
  DialogContent,
  DialogTrigger,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import ProductOverviewDetails from "./productOverviewDetails";
import { Product } from "@prisma/client";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScanSearch } from "lucide-react";

export default function ProductOverview({ product }: { product: Product }) {
  return (
    <Dialog>
      <DialogTrigger>
        <Tooltip>
          <TooltipTrigger asChild>
            <ScanSearch />
          </TooltipTrigger>
          <TooltipContent>
            <p>QuickView</p>
          </TooltipContent>
        </Tooltip>
      </DialogTrigger>
      <div className="flex min-h-full items-stretch justify-center text-center md:items-center md:px-2 lg:px-4">
        <DialogContent className="sm:max-w-5xl">
          <DialogHeader>
            <DialogTitle>Product details</DialogTitle>
          </DialogHeader>
          <ProductOverviewDetails product={product} />
        </DialogContent>
      </div>
    </Dialog>
  );
}
