import Image from "next/image";

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-[#fdf6f0] pt-16"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#4a1f38]">
                Your Wardrobe,
                <span className="block text-[#c084a0]">
                  Organized.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#7a4f5a] max-w-2xl mx-auto lg:mx-0">
                Discover, organize, and style your perfect wardrobe. Mix and match outfits,
                track your favorite pieces, and never wonder what to wear again.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#9b5c7a] rounded-lg hover:bg-[#6b3050] focus:outline-none focus:ring-2 focus:ring-[#c084a0] focus:ring-offset-2 transition-colors duration-200"
                aria-label="Explore features"
              >
                Get Started
                <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </a>
              <a
                href="#preview"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#9b5c7a] bg-transparent border-2 border-[#9b5c7a] rounded-lg hover:bg-[#fce8e0] focus:outline-none focus:ring-2 focus:ring-[#c084a0] focus:ring-offset-2 transition-colors duration-200"
                aria-label="View preview"
              >
                See Preview
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#f4b0a0]">
              <div className="text-center lg:text-left">
                <div className="text-2xl font-semibold text-[#4a1f38]">Categories</div>
                <div className="text-sm text-[#7a4f5a] mt-1">Clothes, Shoes, Accessories</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-semibold text-[#4a1f38]">Smart Filters</div>
                <div className="text-sm text-[#7a4f5a] mt-1">Color, season, occasion</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-2xl font-semibold text-[#4a1f38]">Outfit Planning</div>
                <div className="text-sm text-[#7a4f5a] mt-1">Mix &amp; match looks</div>
              </div>
            </div>
          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:flex justify-center items-end">
            <div className="relative w-[420px]">
              <div className="absolute inset-0 bg-[#fce8e0] rounded-3xl blur-3xl opacity-60" />
              <div className="relative rounded-2xl shadow-xl overflow-hidden">
                <Image
                  src="/hero-phone.png"
                  alt="Wardrobe app preview on smartphone"
                  width={420}
                  height={720}
                  className="w-full h-auto object-contain object-bottom"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#features"
          className="flex flex-col items-center text-[#c084a0] hover:text-[#9b5c7a] focus:outline-none focus:ring-2 focus:ring-[#c084a0] rounded-full p-2 transition-colors"
          aria-label="Scroll to features"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
          <span className="text-xs mt-1">Scroll</span>
        </a>
      </div>
    </section>
  );
}
