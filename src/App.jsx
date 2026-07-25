import Navbar from "./components/Navbar";
import PromoHero from "./components/PromoHero";
import About from "./components/About";
import Menu from "./components/Menu";
import Craft from "./components/Craft";
import Testimonials from "./components/Testimonials";
import Visit from "./components/Visit";

export default function App() {
  return (
    <div className="min-h-screen bg-navy text-white">
      <Navbar />
      <main>
        <PromoHero />
        <About />
        <Menu />
        <Craft />
        <Testimonials />
        <Visit />
      </main>
    </div>
  );
}
