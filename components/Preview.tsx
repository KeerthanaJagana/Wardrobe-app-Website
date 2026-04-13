import Image from "next/image";

const items = [
  { label: "Top", image: "/tops.jpeg" },
  { label: "Shoes", image: "/shoes.jpeg" },
  { label: "Bag", image: "/bag.jpeg" },
  { label: "Accessory", image: "/accessory.jpeg" },
  { label: "Dress", image: "/dress.jpeg" },
  { label: "Jacket", image: "/jacket.jpeg" },
  { label: "Heels", image: "/heels.jpeg" },
  { label: "Watch", image: "/watch.jpeg" },
];

export default function Preview() {
  return (
    <section
      id="preview"
      className="py-24 px-6 bg-[#fdf6f0]"
      aria-label="Wardrobe preview section"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-semibold text-[#4a1f38]">
            Wardrobe Preview
          </h2>
          <p className="mt-4 text-[#7a4f5a] max-w-2xl mx-auto">
            A glimpse into how your wardrobe comes together — organized, visual, and easy to browse.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#ffc2cc] bg-white p-4 hover:shadow-lg hover:border-[#c084a0] transition-all duration-200"
            >
              <div className="aspect-square rounded-xl bg-[#fce8e0] mb-4 overflow-hidden relative">
                <Image
                  src={item.image}
                  alt={item.label}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              </div>
              <p className="text-sm font-medium text-[#4a1f38] text-center">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
