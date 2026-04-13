import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// GET /api/categories — public, no auth needed
export async function GET() {
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
  });
  return NextResponse.json(categories);
}
