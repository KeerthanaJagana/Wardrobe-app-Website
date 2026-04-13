const categories = [
  {
    label: "Frontend",
    items: [
      {
        name: "Next.js",
        description: "React framework for production",
        icon: <svg viewBox="0 0 180 180" className="w-7 h-7" fill="currentColor"><path d="M90 0C40.3 0 0 40.3 0 90s40.3 90 90 90 90-40.3 90-90S139.7 0 90 0zm44.5 129.4L68.3 52.5H52.5v75h15V71.2l59.2 68.6c-11.2 7.1-24.5 11.2-38.7 11.2-39.7 0-72-32.3-72-72s32.3-72 72-72 72 32.3 72 72c0 14.2-4.1 27.5-11.2 38.7l-4.3-8.3z" /></svg>,
      },
      {
        name: "React",
        description: "UI component library",
        icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="2" fill="currentColor" /><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></svg>,
      },
      {
        name: "TypeScript",
        description: "Typed JavaScript at scale",
        icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor"><path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" /></svg>,
      },
      {
        name: "Tailwind CSS",
        description: "Utility-first CSS framework",
        icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor"><path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.337 6.182 14.976 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.337 13.382 8.976 12 6.001 12z" /></svg>,
      },
    ],
  },
  {
    label: "State & Data",
    items: [
      {
        name: "Zustand",
        description: "Lightweight state management",
        icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14H9V8h2v8zm4 0h-2V8h2v8z"/></svg>,
      },
      {
        name: "React Query",
        description: "Data fetching, caching & sync",
        icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor"><path d="M12 2a10 10 0 1 0 0 20A10 10 0 0 0 12 2zm0 18a8 8 0 1 1 0-16 8 8 0 0 1 0 16zm-1-5h2v2h-2zm0-8h2v6h-2z"/></svg>,
      },
      {
        name: "Axios",
        description: "HTTP client for API calls",
        icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor"><path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18L20 8.5v7l-8 4-8-4v-7l8-4.32zM12 7a5 5 0 1 0 0 10A5 5 0 0 0 12 7zm0 2a3 3 0 1 1 0 6 3 3 0 0 1 0-6z"/></svg>,
      },
    ],
  },
  {
    label: "Backend",
    items: [
      {
        name: "Node.js",
        description: "JavaScript runtime",
        icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor"><path d="M11.998 24a2.04 2.04 0 0 1-1.015-.27l-3.223-1.906c-.482-.269-.246-.364-.087-.419.641-.223.771-.273 1.456-.662.072-.041.166-.025.24.017l2.477 1.47c.089.049.215.049.297 0l9.654-5.571c.09-.052.147-.157.147-.267V7.609c0-.113-.057-.218-.15-.271L12.14 1.77a.308.308 0 0 0-.301 0L2.189 7.338c-.094.054-.153.16-.153.272v11.14c0 .11.059.215.153.266l2.646 1.528c1.436.718 2.315-.128 2.315-.98V8.44c0-.157.126-.28.283-.28h1.235c.154 0 .281.123.281.28v11.124c0 1.917-1.045 3.016-2.862 3.016-.559 0-.999 0-2.228-.605L1.015 20.27A2.042 2.042 0 0 1 0 18.502V7.362c0-.723.386-1.396 1.015-1.764L10.983.271a2.11 2.11 0 0 1 2.034 0l9.968 5.327A2.042 2.042 0 0 1 24 7.362v11.14c0 .723-.387 1.396-1.015 1.764l-9.968 5.327a2.043 2.043 0 0 1-1.019.407z" /></svg>,
      },
      {
        name: "PostgreSQL",
        description: "Relational database",
        icon: <svg viewBox="0 0 24 24" className="w-7 h-7" fill="currentColor"><path d="M17.128 0a10.134 10.134 0 0 0-2.755.403l-.063.02A10.922 10.922 0 0 0 12.6.258C11.422.238 10.41.524 9.594 1 8.79.721 7.122.24 5.364.336 4.14.403 2.804.775 1.814 1.82.827 2.865.305 4.482.415 6.682c.03.607.203 1.597.49 2.879.284 1.271.657 2.68 1.102 3.861.223.59.453 1.078.681 1.429.228.349.487.608.796.608.363 0 .634-.208.842-.44.209-.232.38-.526.524-.87.288-.688.487-1.607.647-2.605.085 1.208.273 2.282.65 3.128.5 1.13 1.3 1.906 2.456 1.906.8 0 1.47-.396 2.01-1.022.43-.492.764-1.144 1.004-1.917.24.77.574 1.42 1.003 1.912.538.627 1.208 1.027 2.01 1.027 1.157 0 1.956-.78 2.456-1.913.377-.847.565-1.92.65-3.127.16.997.36 1.917.647 2.605.143.344.315.638.524.87.208.232.48.44.842.44.309 0 .568-.26.796-.608.228-.351.458-.84.681-1.429.445-1.18.818-2.59 1.102-3.861.287-1.282.46-2.272.49-2.879.11-2.2-.412-3.817-1.399-4.862C21.197.775 19.86.403 18.636.336c-.22-.012-.44-.017-.659-.017z" /></svg>,
      },
    ],
  },
];

export default function TechStack() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-[#fdf6f0]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <p className="text-sm font-medium text-[#c084a0] uppercase tracking-widest mb-3">
            Built With
          </p>
          <h2 className="text-3xl sm:text-4xl font-bold text-[#4a1f38]">
            The stack behind the app
          </h2>
        </div>

        <div className="space-y-10">
          {categories.map((cat) => (
            <div key={cat.label}>
              <p className="text-xs font-semibold text-[#c084a0] uppercase tracking-widest mb-4">
                {cat.label}
              </p>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
                {cat.items.map((tech) => (
                  <div
                    key={tech.name}
                    className="flex items-center gap-4 p-4 bg-white rounded-2xl border border-[#ffc2cc] hover:border-[#c084a0] hover:shadow-md transition-all duration-200"
                  >
                    <div className="text-[#9b5c7a] shrink-0">{tech.icon}</div>
                    <div>
                      <p className="font-semibold text-[#4a1f38] text-sm">{tech.name}</p>
                      <p className="text-xs text-[#7a4f5a] mt-0.5 leading-snug">{tech.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
