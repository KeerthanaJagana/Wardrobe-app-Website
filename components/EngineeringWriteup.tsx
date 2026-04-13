const sections = [
  {
    tag: "Architecture",
    title: "Full-stack Next.js with a clear separation of concerns",
    body: "The app is built as a monolithic Next.js project using the App Router. The frontend handles all UI and client state, while API routes serve as a thin backend layer that communicates with PostgreSQL. This keeps the deployment simple — one repo, one deployment — without sacrificing structure.",
  },
  {
    tag: "Data Layer",
    title: "PostgreSQL with a normalized wardrobe schema",
    body: "Wardrobe items, categories, outfits, and user data are stored in a relational PostgreSQL database. Items belong to categories, outfits reference multiple items via a join table, and filters are handled through indexed queries. This makes it easy to query by color, season, or occasion without full table scans.",
  },
  {
    tag: "State Management",
    title: "Zustand for local UI state, React Query for server state",
    body: "Client-only state — like active filters, selected items, and modal visibility — lives in Zustand stores. Anything that touches the server goes through React Query, which handles caching, background refetching, and loading/error states automatically. This keeps components clean and avoids prop drilling.",
  },
  {
    tag: "API Integration",
    title: "Axios with a centralized API client",
    body: "All HTTP calls go through a single Axios instance configured with base URL, auth headers, and interceptors for error handling. This means request/response logic is defined once, not scattered across components. React Query wraps every call, so the UI always reflects the latest server state.",
  },
  {
    tag: "Component Design",
    title: "Composable, typed components with Tailwind",
    body: "Every component is written in TypeScript with explicit prop types. Tailwind handles all styling — no CSS modules, no styled-components. Components are kept small and focused: a card is just a card, a filter is just a filter. Composition happens at the page level, making it easy to rearrange or reuse pieces.",
  },
  {
    tag: "Performance",
    title: "Server components, image optimization, and lazy loading",
    body: "Static sections like the landing page use React Server Components to reduce client bundle size. The Next.js Image component handles lazy loading and format optimization for all wardrobe photos. React Query's stale-while-revalidate strategy means users see cached data instantly while fresh data loads in the background.",
  },
];

export default function EngineeringWriteup() {
  return (
    <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#fff0f3]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm font-medium text-[#c084a0] uppercase tracking-widest mb-3">
            Engineering
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-[#4a1f38]">
            How it&apos;s built
          </h2>
          <p className="mt-4 text-lg text-[#7a4f5a] max-w-2xl mx-auto">
            A look at the technical decisions behind the app — from data modeling to component design.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {sections.map((s) => (
            <div
              key={s.tag}
              className="bg-white rounded-2xl border border-[#ffc2cc] p-8 hover:border-[#c084a0] hover:shadow-md transition-all duration-200"
            >
              <span className="inline-block text-xs font-semibold text-[#9b5c7a] bg-[#fce8e0] px-3 py-1 rounded-full mb-4">
                {s.tag}
              </span>
              <h3 className="text-lg font-semibold text-[#4a1f38] mb-3 leading-snug">
                {s.title}
              </h3>
              <p className="text-[#7a4f5a] text-sm leading-relaxed">{s.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
