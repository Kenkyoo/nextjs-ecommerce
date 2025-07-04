import { PrismaClient } from "@prisma/client";

declare global {
// eslint-disable-next-line @typescript-eslint/no-namespace  
  namespace NodeJS {
    interface Global {
      prisma: PrismaClient;
    }
  }
}

let prisma: PrismaClient;

if (typeof window === "undefined") {
  if (process.env.NODE_ENV === "production") {
    prisma = new PrismaClient();
  } else {
    const globalWithPrisma = global as typeof global & {
      prisma?: PrismaClient;
    };

    if (!globalWithPrisma.prisma) {
      globalWithPrisma.prisma = new PrismaClient();
    }

    prisma = globalWithPrisma.prisma;
  }
} else {
  // If running in the browser, create a new PrismaClient (or throw error if not supported)
  prisma = new PrismaClient();
}

export default prisma;
