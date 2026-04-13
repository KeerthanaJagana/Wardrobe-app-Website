import { prisma } from "@/lib/prisma";
import { DEMO_USER_ID } from "@/lib/demo-user";
import Link from "next/link";

export const dynamic = "force-dynamic";

export default async function CategoriesPage() {
  const categories = await prisma.category.findMany({
    orderBy: { name: "asc" },
    include: {
      _count: { select: { items: { where: { userId: DEMO_USER_ID } } } },
    },
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-[#4a1f38]">Categories</h1>
        <p className="text-sm text-[#7a4f5a] mt-1">Browse your wardrobe by category</p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((cat) => (
          <Link
            key={cat.id}
            href={`/dashboard?categoryId=${cat.id}`}
            className="bg-white rounded-2xl border border-[#ffc2cc] p-6 hover:border-[#c084a0] hover:shadow-md transition-all duration-200 text-center group"
          >
            <div className="w-12 h-12 rounded-full bg-[#fce8e0] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-200">
              <span className="text-xl">👗</span>
            </div>
            <p className="font-semibold text-[#4a1f38]">{cat.name}</p>
            <p className="text-sm text-[#c084a0] mt-1">{cat._count.items} items</p>
          </Link>
        ))}
      </div>
    </div>
  );
}
