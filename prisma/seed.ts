import { PrismaClient } from "@prisma/client";
import smartphones from "./data/smartphones.json";
import laptops from "./data/laptops.json";
import tablets from "./data/tablets.json";

const prisma = new PrismaClient();

async function main() {
  const allProducts = [...smartphones, ...laptops, ...tablets];

  const productData = allProducts.map((item, index) => ({
    title: item.title,
    price: item.price,
    discountPercentage: item.discountPercentage || 0,
    thumbnail: item.thumbnail,
    images: item.images,
    description: item.description || "",
    category: item.category || "general",
    rating: item.rating || 0,
    stock: BigInt(item.stock || 0),
    tags: item.tags || [],
    brand: item.brand || "Desconocida",
    sku: item.sku || `SKU-${index}`,
    returnPolicy: item.returnPolicy || "Sin política de devolución",
  }));

  await prisma.product.createMany({
    data: productData,
  });

  console.log("✅ Base de datos sembrada con éxito.");
}

main()
  .catch((e) => {
    console.error("❌ Error al sembrar la base de datos:", e);
    process.exit(1);
  })
  .finally(() => prisma.$disconnect());
