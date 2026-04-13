"use client";

import Image from "next/image";

type Item = {
  id: string;
  name: string;
  imageUrl: string | null;
  color: string | null;
  season: string | null;
  occasion: string | null;
  category: { name: string };
};

export default function WardrobeGrid({ items }: { items: Item[] }) {
  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-24 text-center">
        <div className="w-16 h-16 rounded-full bg-[#fce8e0] flex items-center justify-center mb-4">
          <svg className="w-8 h-8 text-[#c084a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 4v16m8-8H4" />
          </svg>
        </div>
        <p className="text-[#4a1f38] font-semibold text-lg">No items yet</p>
        <p className="text-[#7a4f5a] text-sm mt-1">Add your first wardrobe item to get started.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
      {items.map((item) => (
        <div
          key={item.id}
          className="bg-white rounded-2xl border border-[#ffc2cc] overflow-hidden hover:border-[#c084a0] hover:shadow-md transition-all duration-200 group"
        >
          <div className="aspect-square bg-[#fce8e0] relative overflow-hidden">
            {item.imageUrl ? (
              <Image
                src={item.imageUrl}
                alt={item.name}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
                sizes="(max-width: 640px) 50vw, 25vw"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <svg className="w-10 h-10 text-[#f4b0a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
            )}
          </div>
          <div className="p-3">
            <p className="text-sm font-semibold text-[#4a1f38] truncate">{item.name}</p>
            <p className="text-xs text-[#c084a0] mt-0.5">{item.category.name}</p>
            {(item.color || item.season) && (
              <div className="flex gap-1 mt-2 flex-wrap">
                {item.color && (
                  <span className="text-xs bg-[#fdf6f0] text-[#7a4f5a] px-2 py-0.5 rounded-full">{item.color}</span>
                )}
                {item.season && (
                  <span className="text-xs bg-[#fdf6f0] text-[#7a4f5a] px-2 py-0.5 rounded-full">{item.season}</span>
                )}
              </div>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
