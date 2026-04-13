export default function CTA() {
  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#4a1f38]">
      <div className="max-w-3xl mx-auto text-center space-y-8">
        <h2 className="text-4xl sm:text-5xl font-bold text-white leading-tight">
          Your dream wardrobe is
          <span className="block text-[#f4b0a0]">one tap away.</span>
        </h2>
        <p className="text-lg text-[#f9d0c4] max-w-xl mx-auto">
          Stop staring at a full closet with nothing to wear. Start organizing, planning, and dressing with intention.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#features"
            className="px-8 py-4 text-base font-semibold text-[#4a1f38] bg-[#f4b0a0] rounded-lg hover:bg-[#fce8e0] transition-colors duration-200"
          >
            Get Started — it&apos;s free
          </a>
          <a
            href="#preview"
            className="px-8 py-4 text-base font-semibold text-white border-2 border-[#f4b0a0] rounded-lg hover:bg-white/10 transition-colors duration-200"
          >
            See Preview
          </a>
        </div>
      </div>
    </section>
  );
}
