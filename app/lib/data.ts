import prisma from "@/app/lib/prisma";
import { Product } from "@prisma/client";

export async function fetchSmartPhones(
  query: string,
  page = 1,
  pageSize = 3
): Promise<Product[]> {
  try {
    const data = await prisma.product.findMany({
      where: {
        category: "smartphones",
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        id: "asc",
      },
    });
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch smartphones data.");
  }
}

export async function fetchAllProducts(
  query: string,
  page = 1,
  pageSize = 12
): Promise<Product[]> {
  try {
    const data = await prisma.product.findMany({
      where: {
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        id: "asc",
      },
    });
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch smartphones data.");
  }
}

export async function fetchTotalProducts(query: string) {
  return await prisma.product.count({
    where: {
      OR: [
        { title: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
  });
}

export async function fetchTotalSmartPhones(query: string) {
  return await prisma.product.count({
    where: {
      category: "smartphones",
      OR: [
        { title: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
  });
}

export async function fetchTotalLaptops(query: string) {
  return await prisma.product.count({
    where: {
      category: "laptops",
      OR: [
        { title: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
  });
}

export async function fetchTotalTablets(query: string) {
  return await prisma.product.count({
    where: {
      category: "tablets",
      OR: [
        { title: { contains: query, mode: "insensitive" } },
        { description: { contains: query, mode: "insensitive" } },
      ],
    },
  });
}

export async function fetchLatestSmartPhones(): Promise<{
  smart1: Product;
  smart2: Product;
  smart3: Product;
  smart4: Product;
}> {
  try {
    const data = await prisma.product.findMany({
      where: { category: "smartphones" },
      take: 4,
      orderBy: { id: "desc" },
    });

    return {
      smart1: data[0],
      smart2: data[1],
      smart3: data[2],
      smart4: data[3],
    };
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch smartphones data.");
  }
}

export async function fetchLatestProducts() {
  try {
    const data = await prisma.product.findMany({
      take: 8,
      orderBy: { id: "desc" },
    });

    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch products data.");
  }
}

export async function fetchLaptops(
  query: string,
  page = 1,
  pageSize = 8
): Promise<Product[]> {
  try {
    const data = await prisma.product.findMany({
      where: {
        category: "laptops",
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        id: "asc",
      },
    });
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch laptops data.");
  }
}

export async function fetchTablets(
  query: string,
  page = 1,
  pageSize = 8
): Promise<Product[]> {
  try {
    const data = await prisma.product.findMany({
      where: {
        category: "tablets",
        OR: [
          { title: { contains: query, mode: "insensitive" } },
          { description: { contains: query, mode: "insensitive" } },
        ],
      },
      skip: (page - 1) * pageSize,
      take: pageSize,
      orderBy: {
        id: "asc",
      },
    });
    return data;
  } catch (error) {
    console.error("Database Error:", error);
    throw new Error("Failed to fetch tablets data.");
  }
}

export async function fetchProductById(id: number) {
  return await prisma.product.findUnique({ where: { id } });
}
