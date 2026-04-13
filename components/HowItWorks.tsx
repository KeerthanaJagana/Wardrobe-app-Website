const steps = [
  {
    number: "01",
    title: "Add Your Clothes",
    description:
      "Photo your pieces or browse our catalog to add clothes, shoes, and accessories to your digital wardrobe. Tag them by color, season, and occasion.",
  },
  {
    number: "02",
    title: "Organize & Filter",
    description:
      "Your wardrobe is automatically sorted into categories. Use smart filters to find exactly what you're looking for in seconds.",
  },
  {
    number: "03",
    title: "Build Outfits",
    description:
      "Mix and match items to create outfits. Save your favorites and get suggestions based on what you already own.",
  },
  {
    number: "04",
    title: "Get Dressed with Confidence",
    description:
      "Open the app each morning and pick a saved outfit — or let the app suggest one based on the occasion, weather, or mood.",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#fff0f3]"
      aria-labelledby="hiw-heading"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#c084a0] uppercase tracking-widest mb-3">
            How It Works
          </p>
          <h2
            id="hiw-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4a1f38]"
          >
            From closet chaos to outfit clarity
          </h2>
          <p className="mt-4 text-lg text-[#7a4f5a] max-w-2xl mx-auto">
            Four simple steps to take full control of your wardrobe.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, i) => (
            <div key={step.number} className="relative">
              {i < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-[#ffc2cc] -translate-x-4 z-0" />
              )}
              <div className="relative z-10 bg-white rounded-2xl p-6 border border-[#ffc2cc] hover:border-[#c084a0] hover:shadow-md transition-all duration-200 h-full">
                <span className="text-4xl font-bold text-[#fce8e0] select-none">
                  {step.number}
                </span>
                <h3 className="text-lg font-semibold text-[#4a1f38] mt-2 mb-2">
                  {step.title}
                </h3>
                <p className="text-[#7a4f5a] text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#preview"
            className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#9b5c7a] rounded-lg hover:bg-[#6b3050] transition-colors duration-200"
          >
            See it in action
          </a>
        </div>
      </div>
    </section>
  );
}
