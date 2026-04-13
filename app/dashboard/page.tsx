import { prisma } from "@/lib/prisma";
import { DEMO_USER_ID } from "@/lib/demo-user";
import WardrobeGrid from "@/components/dashboard/WardrobeGrid";
import AddItemButton from "@/components/dashboard/AddItemButton";

export const dynamic = "force-dynamic";

export default async function DashboardPage({
  searchParams,
}: {
  searchParams: Promise<{ categoryId?: string; season?: string; occasion?: string }>;
}) {
  const params = await searchParams;

  const [items, categories] = await Promise.all([
    prisma.item.findMany({
      where: {
        userId: DEMO_USER_ID,
        ...(params.categoryId && { categoryId: params.categoryId }),
        ...(params.season && { season: params.season }),
        ...(params.occasion && { occasion: params.occasion }),
      },
      include: { category: true },
      orderBy: { createdAt: "desc" },
    }),
    prisma.category.findMany({ orderBy: { name: "asc" } }),
  ]);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-[#4a1f38]">My Wardrobe</h1>
          <p className="text-sm text-[#7a4f5a] mt-1">{items.length} items</p>
        </div>
        <AddItemButton categories={categories} />
      </div>

      <div className="flex flex-wrap gap-3">
        <FilterLink label="All" href="/dashboard" active={!params.categoryId && !params.season} />
        {categories.map((cat: { id: string; name: string }) => (
          <FilterLink
            key={cat.id}
            label={cat.name}
            href={`/dashboard?categoryId=${cat.id}`}
            active={params.categoryId === cat.id}
          />
        ))}
      </div>

      <WardrobeGrid items={items} />
    </div>
  );
}

function FilterLink({ label, href, active }: { label: string; href: string; active: boolean }) {
  return (
    <a
      href={href}
      className={`px-4 py-1.5 rounded-full text-sm font-medium transition-colors duration-200 ${
        active
          ? "bg-[#9b5c7a] text-white"
          : "bg-white border border-[#ffc2cc] text-[#7a4f5a] hover:border-[#c084a0]"
      }`}
    >
      {label}
    </a>
  );
}
