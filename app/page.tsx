import Header from "@/components/Header";
import Hero from "@/components/Hero";
import EarlyAccess from "@/components/EarlyAccess";
import Footer from "@/components/Footer";
import GridBackground from "@/components/GridBackground";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-visible">
      {/* Background layers */}
      {/* Light mode: alternating gradient background (FFFFFF→DDE5ED, DDE5ED→FFFFFF, repeating) */}
      <div
        className="absolute inset-0 dark:hidden"
        style={{
          background: `
            linear-gradient(to bottom,
              #FFFFFF 0vh,
              #DDE5ED 100vh,
              #FFFFFF 200vh,
              #DDE5ED 300vh,
              #FFFFFF 400vh,
              #DDE5ED 500vh,
              #FFFFFF 600vh,
              #DDE5ED 700vh,
              #FFFFFF 800vh,
              #DDE5ED 900vh,
              #FFFFFF 1000vh
            )
          `,
        }}
      />
      {/* Dark mode: image background */}
      <div
        className="absolute inset-0 bg-cover bg-top bg-no-repeat hidden dark:block"
        style={{ backgroundImage: "url('/bg.png')" }}
      />

      {/* Grid Background - extends full page, full width */}
      <div className="absolute inset-0 pointer-events-none">
        <GridBackground />
      </div>

      {/* Content - Header and Hero */}
      <div className="relative z-10 h-[100svh] flex flex-col overflow-hidden">
        <Header />
        <main className="flex-1 overflow-hidden">
          <Hero />
        </main>
      </div>

      {/* Early Access Section */}
      <div className="relative z-10">
        <EarlyAccess />
      </div>

      {/* Footer - Below ghost so it can dock */}
      <div className="relative z-10">
        <Footer />
      </div>
    </div>
  );
}
