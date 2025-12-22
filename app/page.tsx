import Header from "@/components/Header";
import Hero from "@/components/Hero";
import GridBackground from "@/components/GridBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/bg.png')" }}
      />
      {/* Grid overlay moved to Hero for perfect alignment */}

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
        </main>
      </div>
    </div>
  );
}
