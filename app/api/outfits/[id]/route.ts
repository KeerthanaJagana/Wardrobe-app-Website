import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { DEMO_USER_ID } from "@/lib/demo-user";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const outfit = await prisma.outfit.findFirst({
    where: { id, userId: DEMO_USER_ID },
    include: { items: { include: { item: { include: { category: true } } } } },
  });
  if (!outfit) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(outfit);
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const { name, occasion, itemIds } = await req.json();
  const outfit = await prisma.outfit.findFirst({ where: { id, userId: DEMO_USER_ID } });
  if (!outfit) return NextResponse.json({ error: "Not found" }, { status: 404 });

  await prisma.outfitItem.deleteMany({ where: { outfitId: id } });
  const updated = await prisma.outfit.update({
    where: { id },
    data: {
      ...(name && { name }),
      ...(occasion && { occasion }),
      ...(itemIds && { items: { create: itemIds.map((itemId: string) => ({ itemId })) } }),
    },
    include: { items: { include: { item: true } } },
  });
  return NextResponse.json(updated);
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const result = await prisma.outfit.deleteMany({ where: { id, userId: DEMO_USER_ID } });
  if (result.count === 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
