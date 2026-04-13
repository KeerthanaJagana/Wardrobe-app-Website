import Hero from "@/components/Hero";
import Features from "@/components/Features";
import Preview from "@/components/Preview";
import HowItWorks from "@/components/HowItWorks";
import TechStack from "@/components/TechStack";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <main className="flex flex-col">
      <Hero />
      <Features />
      <Preview />
      <HowItWorks />
      <TechStack />
      <CTA />
    </main>
  );
}
