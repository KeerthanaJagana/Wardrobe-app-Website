"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type Category = { id: string; name: string };

const SEASONS = ["Spring", "Summer", "Autumn", "Winter", "All"];
const OCCASIONS = ["Casual", "Formal", "Sport", "Party", "Work"];

export default function AddItemButton({ categories }: { categories: Category[] }) {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "", imageUrl: "", color: "", season: "", occasion: "", categoryId: "",
  });
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    if (!form.name || !form.categoryId) return;
    setLoading(true);

    await fetch("/api/items", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setLoading(false);
    setOpen(false);
    setForm({ name: "", imageUrl: "", color: "", season: "", occasion: "", categoryId: "" });
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
        Add Item
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 backdrop-blur-sm">
          <div className="bg-white rounded-2xl shadow-xl w-full max-w-md mx-4 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-bold text-[#4a1f38]">Add New Item</h2>
              <button onClick={() => setOpen(false)} className="text-[#c084a0] hover:text-[#9b5c7a]">
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <Field label="Name *">
                <input
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="e.g. White linen shirt"
                  className={inputClass}
                />
              </Field>

              <Field label="Category *">
                <select
                  required
                  value={form.categoryId}
                  onChange={(e) => setForm({ ...form, categoryId: e.target.value })}
                  className={inputClass}
                >
                  <option value="">Select category</option>
                  {categories.map((c) => (
                    <option key={c.id} value={c.id}>{c.name}</option>
                  ))}
                </select>
              </Field>

              <Field label="Image URL">
                <input
                  value={form.imageUrl}
                  onChange={(e) => setForm({ ...form, imageUrl: e.target.value })}
                  placeholder="https://..."
                  className={inputClass}
                />
              </Field>

              <div className="grid grid-cols-2 gap-4">
                <Field label="Color">
                  <input
                    value={form.color}
                    onChange={(e) => setForm({ ...form, color: e.target.value })}
                    placeholder="e.g. White"
                    className={inputClass}
                  />
                </Field>

                <Field label="Season">
                  <select
                    value={form.season}
                    onChange={(e) => setForm({ ...form, season: e.target.value })}
                    className={inputClass}
                  >
                    <option value="">Any</option>
                    {SEASONS.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                </Field>
              </div>

              <Field label="Occasion">
                <select
                  value={form.occasion}
                  onChange={(e) => setForm({ ...form, occasion: e.target.value })}
                  className={inputClass}
                >
                  <option value="">Any</option>
                  {OCCASIONS.map((o) => <option key={o} value={o}>{o}</option>)}
                </select>
              </Field>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-3 bg-[#9b5c7a] text-white font-semibold rounded-xl hover:bg-[#6b3050] transition-colors disabled:opacity-50"
              >
                {loading ? "Adding..." : "Add to Wardrobe"}
              </button>
            </form>
          </div>
        </div>
      )}
    </>
  );
}

function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label className="block text-xs font-semibold text-[#7a4f5a] mb-1.5">{label}</label>
      {children}
    </div>
  );
}

const inputClass = "w-full px-3 py-2.5 text-sm text-[#4a1f38] bg-[#fdf6f0] border border-[#ffc2cc] rounded-xl focus:outline-none focus:border-[#c084a0] transition-colors";
