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
        className="min-h-screen px-6 py-24 bg-white"
        aria-label="Wardrobe preview section"
      >
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
              Wardrobe Preview
            </h2>
            <p className="mt-4 text-gray-800 max-w-2xl mx-auto">
              A glimpse into how your wardrobe comes together — organized, visual, and easy to browse.
            </p>
          </div>
  
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {items.map((item) => (
                <div
                  key={item.label}
                  className="rounded-xl border border-gray-200 bg-white p-4 hover:shadow-lg transition-shadow duration-200"
                >
                  <div className="aspect-square rounded-lg bg-gray-100 mb-4 overflow-hidden relative">
                    <Image
                      src={item.image}
                      alt={item.label}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                    />
                  </div>
                  <p className="text-sm font-medium text-gray-900 text-center">
                    {item.label}
                  </p>
                </div>
              ))}
          </div>
        </div>
      </section>
    );
  }
  