import Image from "next/image";

export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-white"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-gray-900">
                Your Wardrobe,
                <span className="block text-gray-800">
                  Organized.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-gray-800 max-w-2xl mx-auto lg:mx-0">
                Discover, organize, and style your perfect wardrobe. Mix and match outfits, 
                track your favorite pieces, and never wonder what to wear again.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-gray-900 rounded-lg hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
                aria-label="Explore features"
              >
                Get Started
                <svg
                  className="ml-2 w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
              <a
                href="#preview"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-gray-900 bg-transparent border-2 border-gray-900 rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 transition-colors duration-200"
                aria-label="View preview"
              >
                See Preview
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-gray-300">
  <div className="text-center lg:text-left">
    <div className="text-2xl font-semibold text-gray-900">
      Categories
    </div>
    <div className="text-sm text-gray-800 mt-1">
      Clothes, Shoes, Accessories
    </div>
  </div>
  <div className="text-center lg:text-left">
    <div className="text-2xl font-semibold text-gray-900">
      Smart Filters
    </div>
    <div className="text-sm text-gray-800 mt-1">
      Color, season, occasion
    </div>
  </div>
  <div className="text-center lg:text-left">
    <div className="text-2xl font-semibold text-gray-900">
      Outfit Planning
    </div>
    <div className="text-sm text-gray-800 mt-1">
      Mix & match looks
    </div>
  </div>
</div>

          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative max-w-lg mx-auto">
              <div className="relative rounded-2xl shadow-2xl overflow-hidden">
                <Image
                  src="/hero-phone.png"
                  alt="Wardrobe app preview on smartphone showing organized closet with clothes, shoes, and accessories"
                  width={300}
                  height={600}
                  className="w-full h-auto object-contain"
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
          className="flex flex-col items-center text-gray-900 hover:text-gray-700 focus:outline-none focus:ring-2 focus:ring-gray-500 rounded-full p-2 transition-colors"
          aria-label="Scroll to features"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
          <span className="text-xs mt-1">Scroll</span>
        </a>
      </div>
    </section>
  );
}
