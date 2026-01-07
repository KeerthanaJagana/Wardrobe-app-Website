export default function Features() {
  const features = [
    {
      title: "Smart Categories",
      description: "Organize your wardrobe by clothes, shoes, and accessories with intelligent categorization.",
      icon: (
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
            d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
          />
        </svg>
      ),
    },
    {
      title: "Advanced Filters",
      description: "Find exactly what you need by color, season, occasion, or style with powerful search filters.",
      icon: (
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
            d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"
          />
        </svg>
      ),
    },
    {
      title: "Outfit Planning",
      description: "Mix and match pieces to create perfect outfits and save your favorite combinations.",
      icon: (
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
            d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
          />
        </svg>
      ),
    },
    {
      title: "Wardrobe Analytics",
      description: "Track your most-worn items and discover gaps in your collection with insightful analytics.",
      icon: (
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
            d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
          />
        </svg>
      ),
    },
    {
      title: "Seasonal Organization",
      description: "Automatically organize items by season and get recommendations based on weather and occasion.",
      icon: (
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
            d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
          />
        </svg>
      ),
    },
    {
      title: "Style Inspiration",
      description: "Discover new outfit ideas and get personalized style recommendations based on your wardrobe.",
      icon: (
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
            d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="features"
      className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white dark:bg-[#0a1a22]"
      aria-labelledby="features-heading"
    >
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16 sm:mb-20">
          <h2
            id="features-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#0a3d52] dark:text-[#e6f7ff] mb-4"
          >
            Powerful Features
          </h2>
          <p className="text-lg text-[#1a5a73] dark:text-[#b8e0f5] max-w-2xl mx-auto">
            Everything you need to organize, plan, and style your perfect wardrobe.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-6 rounded-lg border border-[#89cff0]/30 dark:border-[#89cff0]/20 bg-[#f0f9fc] dark:bg-[#1a4a5c]/50 hover:border-[#89cff0] dark:hover:border-[#89cff0]/40 transition-colors duration-200 focus-within:ring-2 focus-within:ring-[#89cff0] dark:focus-within:ring-[#89cff0] focus-within:ring-offset-2"
              tabIndex={0}
            >
              <div className="flex items-start space-x-4">
                <div
                  className="flex-shrink-0 w-12 h-12 rounded-lg bg-[#89cff0] dark:bg-[#89cff0] text-[#0a3d52] dark:text-[#0a3d52] flex items-center justify-center group-hover:scale-110 transition-transform duration-200"
                  aria-hidden="true"
                >
                  {feature.icon}
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-xl font-semibold text-[#0a3d52] dark:text-[#e6f7ff] mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-[#1a5a73] dark:text-[#b8e0f5] leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
