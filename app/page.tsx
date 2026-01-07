import Hero from "@/components/Hero";
import Features from "@/components/Features";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />

      {/* Preview */}
      <section id ="preview" className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-medium">Wardrobe Preview</h2>
      </section>

      {/* Design System */}
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-medium">Design System</h2>
      </section>

      {/* Roadmap */}
      <section className="min-h-screen flex items-center justify-center">
        <h2 className="text-3xl font-medium">What’s Coming Next</h2>
      </section>

    </main>
  );
}
