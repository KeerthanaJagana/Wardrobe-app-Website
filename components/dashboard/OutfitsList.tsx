"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type Item = {
  id: string;
  name: string;
  imageUrl: string | null;
  category: { name: string };
};

type Outfit = {
  id: string;
  name: string;
  occasion: string | null;
  items: { item: Item }[];
};

const OCCASIONS = ["Casual", "Formal", "Sport", "Party", "Work"];

export default function OutfitsList({ outfits, items }: { outfits: Outfit[]; items: Item[] }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [occasion, setOccasion] = useState("");
  const [selectedIds, setSelectedIds] = useState<string[]>([]);
  const router = useRouter();

  function toggleItem(id: string) {
    setSelectedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!name || selectedIds.length === 0) return;
    setLoading(true);

    await fetch("/api/outfits", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, occasion, itemIds: selectedIds }),
    });

    setLoading(false);
    setOpen(false);
    setName(""); setOccasion(""); setSelectedIds([]);
    router.refresh();
  }

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="flex items-center gap-2 px-5 py-2.5 bg-[#9b5c7a] text-white text-sm font-semibold rounded-xl hover:bg-[#6b3050] transition-colors"
      >
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
        </svg>
        Create Outfit
      </button>

      {outfits.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-center">
          <div className="w-16 h-16 rounded-full bg-[#fce8e0] flex items-center justify-center mb-4">
            <svg className="w-8 h-8 text-[#c084a0]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
            </svg>
          </div>
          <p className="text-[#4a1f38] font-semibold text-lg">No outfits yet</p>
          <p className="text-[#7a4f5a] text-sm mt-1">Create your first outfit by mixing items from your wardrobe.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {outfits.map((outfit) => (
            <div key={outfit.id} className="bg-white rounded-2xl border border-[#ffc2cc] p-5 hover:border-[#c084a0] hover:shadow-md transition-all duration-200">
              <div className="flex items-start justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-[#4a1f38]">{outfit.name}</h3>
                  {outfit.occasion && (
                    <span className="text-xs text-[#c084a0] bg-[#fce8e0] px-2 py-0.5 rounded-full mt-1 inline-block">
                      {outfit.occasion}
                    </span>
                  )}
                </div>
                <span className="text-xs text-[#7a4f5a]">{outfit.items.length} items</span>
              </div>
              <div className="flex gap-2 flex-wrap">
                {outfit.items.slice(0, 4).map(({ item }) => (
                  <div key={item.id} className="w-14 h-14 rounded-xl bg-[#fce8e0] overflow-hidden relative">
                    {item.imageUrl ? (
                      <Image src={item.imageUrl} alt={item.name} fill className="object-cover" sizes="56px" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="text-xs text-[#c084a0] text-center px-1 leading-tight">{item.name}</span>
                      </div>
                    )}
                  </div>
                ))}
                {outfit.items.length > 4 && (
                  <div className="w-14 h-14 rounded-xl bg-[#fdf6f0] border border-[#ffc2cc] flex items-center justify-center">
                    <span className="text-xs text-[#7a4f5a] font-medium">+{outfit.items.length - 4}</span>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}

      {/* Create Outfit Modal */}
      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-lg mx-4 p-6 max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[#4a1f38]">Create Outfit</h2>
              <button onClick={() => setOpen(false)} className="text-[#c084a0] hover:text-[#9b5c7a]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-[#7a4f5a] mb-1.5">Outfit Name *</label>
                <input
                  required
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="e.g. Sunday brunch look"
                  className="w-full px-3 py-2.5 text-sm text-[#4a1f38] bg-[#fdf6f0] border border-[#ffc2cc] rounded-xl focus:outline-none focus:border-[#c084a0]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#7a4f5a] mb-1.5">Occasion</label>
                <select
                  value={occasion}
                  onChange={(e) => setOccasion(e.target.value)}
                  className="w-full px-3 py-2.5 text-sm text-[#4a1f38] bg-[#fdf6f0] border border-[#ffc2cc] rounded-xl focus:outline-none focus:border-[#c084a0]"
                >
                  <option value="">Any</option>
                  {OCCASIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#7a4f5a] mb-2">
                  Select Items * ({selectedIds.length} selected)
                </label>
                <div className="grid grid-cols-3 gap-2 max-h-60 overflow-y-auto">
                  {items.map((item) => {
                    const selected = selectedIds.includes(item.id);
                    return (
                      <button
                        type="button"
                        key={item.id}
                        onClick={() => toggleItem(item.id)}
                        className={`rounded-xl border p-2 text-left transition-all ${
                          selected
                            ? "border-[#9b5c7a] bg-[#fce8e0]"
                            : "border-[#ffc2cc] bg-white hover:border-[#c084a0]"
                        }`}
                      >
                        <div className="aspect-square rounded-lg bg-[#fdf6f0] mb-1.5 overflow-hidden relative">
                          {item.imageUrl ? (
                            <Image src={item.imageUrl} alt={item.name} fill className="object-cover" sizes="80px" />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center">
                              <span className="text-xs text-[#c084a0]">No img</span>
                            </div>
                          )}
                        </div>
                        <p className="text-xs font-medium text-[#4a1f38] truncate">{item.name}</p>
                        <p className="text-xs text-[#c084a0]">{item.category.name}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || selectedIds.length === 0}
                className="w-full py-3 bg-[#9b5c7a] text-white font-semibold rounded-xl hover:bg-[#6b3050] transition-colors disabled:opacity-50"
              >
                {loading ? "Saving..." : "Save Outfit"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}
