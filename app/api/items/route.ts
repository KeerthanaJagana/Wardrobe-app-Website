import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { DEMO_USER_ID } from "@/lib/demo-user";

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url);
  const categoryId = searchParams.get("categoryId");
  const season     = searchParams.get("season");
  const occasion   = searchParams.get("occasion");
  const color      = searchParams.get("color");

  const items = await prisma.item.findMany({
    where: {
      userId: DEMO_USER_ID,
      ...(categoryId && { categoryId }),
      ...(season     && { season }),
      ...(occasion   && { occasion }),
      ...(color      && { color }),
    },
    include: { category: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(items);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, imageUrl, color, season, occasion, categoryId } = body;

  if (!name || !categoryId) {
    return NextResponse.json({ error: "name and categoryId are required" }, { status: 400 });
  }

  const item = await prisma.item.create({
    data: { name, imageUrl, color, season, occasion, categoryId, userId: DEMO_USER_ID },
    include: { category: true },
  });

  return NextResponse.json(item, { status: 201 });
}
