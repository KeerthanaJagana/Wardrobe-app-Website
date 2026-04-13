import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

// Clerk webhook — syncs user creation/deletion to our DB
export async function POST(req: NextRequest) {
  const payload = await req.json();
  const { type, data } = payload;

  if (type === "user.created") {
    await prisma.user.create({
      data: {
        id: data.id,
        email: data.email_addresses[0]?.email_address ?? "",
        name: `${data.first_name ?? ""} ${data.last_name ?? ""}`.trim() || null,
      },
    });
  }

  if (type === "user.deleted") {
    await prisma.user.deleteMany({ where: { id: data.id } });
  }

  return NextResponse.json({ received: true });
}
