import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { DEMO_USER_ID } from "@/lib/demo-user";

export async function GET() {
  const outfits = await prisma.outfit.findMany({
    where: { userId: DEMO_USER_ID },
    include: { items: { include: { item: { include: { category: true } } } } },
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json(outfits);
}

export async function POST(req: NextRequest) {
  const { name, occasion, itemIds } = await req.json();
  if (!name || !Array.isArray(itemIds) || itemIds.length === 0) {
    return NextResponse.json({ error: "name and itemIds are required" }, { status: 400 });
  }

  const outfit = await prisma.outfit.create({
    data: {
      name, occasion, userId: DEMO_USER_ID,
      items: { create: itemIds.map((itemId: string) => ({ itemId })) },
    },
    include: { items: { include: { item: true } } },
  });

  return NextResponse.json(outfit, { status: 201 });
}
