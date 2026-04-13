import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { DEMO_USER_ID } from "@/lib/demo-user";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const item = await prisma.item.findFirst({
    where: { id, userId: DEMO_USER_ID },
    include: { category: true },
  });
  if (!item) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json(item);
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const body = await req.json();
  const result = await prisma.item.updateMany({ where: { id, userId: DEMO_USER_ID }, data: body });
  if (result.count === 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}

export async function DELETE(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const result = await prisma.item.deleteMany({ where: { id, userId: DEMO_USER_ID } });
  if (result.count === 0) return NextResponse.json({ error: "Not found" }, { status: 404 });
  return NextResponse.json({ success: true });
}
