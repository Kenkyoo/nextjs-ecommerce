"use client";

import { useSidebar } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import { ShoppingCart } from "lucide-react";

export function CustomTrigger() {
  const { toggleSidebar } = useSidebar();

  return (
    <Button variant="outline" onClick={toggleSidebar}>
      <ShoppingCart />
    </Button>
  );
}
