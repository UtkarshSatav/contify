import Header from "@/components/Header";
import Hero from "@/components/Hero";
import ComingSoon from "@/components/ComingSoon";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen">
      {/* Background layers */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat"
        style={{ backgroundImage: "url('/bg.png')" }}
      />

      {/* Grid Background - extends full page */}
      <div className="absolute inset-0 flex justify-center pointer-events-none">
        <div className="w-full max-w-[1282px] h-full">
          <GridBackground />
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Header />
        <main>
          <Hero />
          <ComingSoon />
          <Footer />
        </main>
      </div>
    </div>
  );
}
