import { prisma } from "@/lib/prisma";
import { DEMO_USER_ID } from "@/lib/demo-user";
import OutfitsList from "@/components/dashboard/OutfitsList";

export const dynamic = "force-dynamic";

export default async function OutfitsPage() {
  const [outfits, items] = await Promise.all([
    prisma.outfit.findMany({
      where: { userId: DEMO_USER_ID },
      include: { items: { include: { item: { include: { category: true } } } } },
      orderBy: { createdAt: "desc" },
    }),
    prisma.item.findMany({
      where: { userId: DEMO_USER_ID },
      include: { category: true },
      orderBy: { name: "asc" },
    }),
  ]);

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#4a1f38]">My Outfits</h1>
        <p className="text-sm text-[#7a4f5a] mt-1">{outfits.length} outfits saved</p>
      </div>
      <OutfitsList outfits={outfits} items={items} />
    </div>
  );
}
