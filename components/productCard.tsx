// components/ProductCard.tsx
"use client";
import Link from "next/link";
import { Product } from "@prisma/client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { addToCart } from "@/hooks/addToCart";
import ProductOverview from "./productOverview";
import { addToWishesList } from "@/hooks/addToWishesList";
import { Heart } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { ShoppingCart } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Separator } from "@/components/ui/separator";
import { BlurFade } from "@/components/magicui/blur-fade";
import { ConfettiButton } from "@/components/magicui/confetti";
import { useWishes } from "@/hooks/useWishes";
import { toast } from "sonner";

export function ProductCard({ product }: { product: Product }) {
  const images = product.images as string[];
  const { wishes } = useWishes();
  const isInWishes = wishes.includes(product.id);

  return (
    <BlurFade>
      <Card className="w-full max-w-sm shadow-lg shadow-neutral-500/50 duration-500 hover:scale-105 hover:shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between py-2">
          <CardTitle>{product.title}</CardTitle>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                onClick={() => {
                  toast("Producto añadido a favortios", {
                    description: "Ve tu lista de deseos",
                    action: {
                      label: "Wishes",
                      onClick: () => console.log("Undo"),
                    },
                  });
                  addToWishesList({ productId: String(product.id) });
                }}
                variant="ghost"
              >
                {isInWishes ? (
                  <Heart style={{ fill: "red", border: "none" }} />
                ) : (
                  <Heart />
                )}
              </Button>
            </TooltipTrigger>
            <TooltipContent>
              <p>Add to my wishesList</p>
            </TooltipContent>
          </Tooltip>
        </CardHeader>
        <Link href={`/products/${product.id}`}>
          <CardContent className="flex justify-center items center mx-auto">
            <Image
              src={images[0]}
              alt={product.title}
              height={200}
              width={200}
            />
          </CardContent>
        </Link>
        <CardDescription className="py-2 px-2 text-center mx-auto">
          <Collapsible>
            <CollapsibleTrigger>Ver descripcion</CollapsibleTrigger>
            <CollapsibleContent>{product.description}</CollapsibleContent>
          </Collapsible>
        </CardDescription>
        <Separator className="my-4 border border-neutral-950" />
        <CardFooter className="flex justify-around items center gap-4 py-2 px-2">
          <div>
            <Badge
              variant="secondary"
              className="bg-blue-500 text-white dark:bg-blue-600 p-4"
            >
              ${product.price}
            </Badge>
          </div>
          <div className="flex">
            <ProductOverview product={product} />
            <Tooltip>
              <TooltipTrigger asChild>
                <div className="relative">
                  <ConfettiButton>
                    <Button
                      onClick={() => {
                        toast("Product añadido correctamente", {
                          description:
                            "Haz click en el icono para ver tus productos",
                          action: {
                            label: "Cart",
                            onClick: () => console.log("Undo"),
                          },
                        });
                        addToCart({ productId: String(product.id) });
                      }}
                      variant="ghost"
                    >
                      <ShoppingCart />
                    </Button>
                  </ConfettiButton>
                </div>
              </TooltipTrigger>
              <TooltipContent>
                <p>Add to Cart</p>
              </TooltipContent>
            </Tooltip>
          </div>
        </CardFooter>
      </Card>
    </BlurFade>
  );
}
