export default function Hero() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-[#89cff0] via-[#b8e0f5] to-[#d4eef9] dark:from-[#1a4a5c] dark:via-[#0f2d3a] dark:to-[#0a1a22]"
      aria-label="Hero section"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="text-center lg:text-left space-y-8">
            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight text-[#0a3d52] dark:text-[#e6f7ff]">
                Your Wardrobe,
                <span className="block text-[#1a5a73] dark:text-[#b8e0f5]">
                  Organized.
                </span>
              </h1>
              <p className="text-lg sm:text-xl text-[#1a5a73] dark:text-[#b8e0f5] max-w-2xl mx-auto lg:mx-0">
                Discover, organize, and style your perfect wardrobe. Mix and match outfits, 
                track your favorite pieces, and never wonder what to wear again.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#features"
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-white bg-[#0a3d52] dark:bg-[#89cff0] dark:text-[#0a3d52] rounded-lg hover:bg-[#082a3a] dark:hover:bg-[#6bb8e0] focus:outline-none focus:ring-2 focus:ring-[#89cff0] dark:focus:ring-[#89cff0] focus:ring-offset-2 transition-colors duration-200"
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
                className="inline-flex items-center justify-center px-8 py-4 text-base font-semibold text-[#0a3d52] dark:text-[#89cff0] bg-transparent border-2 border-[#0a3d52] dark:border-[#89cff0] rounded-lg hover:bg-[#89cff0]/10 dark:hover:bg-[#89cff0]/10 focus:outline-none focus:ring-2 focus:ring-[#89cff0] dark:focus:ring-[#89cff0] focus:ring-offset-2 transition-colors duration-200"
                aria-label="View preview"
              >
                See Preview
              </a>
            </div>

            <div className="grid grid-cols-3 gap-8 pt-8 border-t border-[#89cff0]/30 dark:border-[#89cff0]/20">
  <div className="text-center lg:text-left">
    <div className="text-2xl font-semibold text-[#0a3d52] dark:text-[#e6f7ff]">
      Categories
    </div>
    <div className="text-sm text-[#1a5a73] dark:text-[#b8e0f5] mt-1">
      Clothes, Shoes, Accessories
    </div>
  </div>
  <div className="text-center lg:text-left">
    <div className="text-2xl font-semibold text-[#0a3d52] dark:text-[#e6f7ff]">
      Smart Filters
    </div>
    <div className="text-sm text-[#1a5a73] dark:text-[#b8e0f5] mt-1">
      Color, season, occasion
    </div>
  </div>
  <div className="text-center lg:text-left">
    <div className="text-2xl font-semibold text-[#0a3d52] dark:text-[#e6f7ff]">
      Outfit Planning
    </div>
    <div className="text-sm text-[#1a5a73] dark:text-[#b8e0f5] mt-1">
      Mix & match looks
    </div>
  </div>
</div>

          </div>

          {/* Visual Element */}
          <div className="relative hidden lg:block">
            <div className="relative aspect-square max-w-lg mx-auto">
              {/* Placeholder for wardrobe visualization */}
              <div className="absolute inset-0 bg-gradient-to-br from-[#89cff0] to-[#6bb8e0] dark:from-[#1a5a73] dark:to-[#0a3d52] rounded-2xl shadow-2xl flex items-center justify-center">
                <div className="text-center space-y-4 p-8">
                  <svg
                    className="w-32 h-32 mx-auto text-white dark:text-[#89cff0]"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                    />
                  </svg>
                  <p className="text-white dark:text-[#b8e0f5] text-sm">
                    Wardrobe Preview
                  </p>
                </div>
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#89cff0] dark:bg-[#1a5a73] rounded-full opacity-50 blur-xl"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-[#6bb8e0] dark:bg-[#0a3d52] rounded-full opacity-50 blur-xl"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#features"
          className="flex flex-col items-center text-[#0a3d52] dark:text-[#89cff0] hover:text-[#082a3a] dark:hover:text-[#6bb8e0] focus:outline-none focus:ring-2 focus:ring-[#89cff0] dark:focus:ring-[#89cff0] rounded-full p-2 transition-colors"
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
