import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Intro from "@/components/Intro";
import Menu from "@/components/Menu";
import Sky from "@/components/Sky";
import Experience from "@/components/Experience";
import Chefs from "@/components/Chefs";
import MenuPreview from "@/components/MenuPreview";
import Reservation from "@/components/Reservation";
import Location from "@/components/Location";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero />
      <Intro />
      <Menu />
      <Sky />
      <Experience />
      <Chefs />
      <MenuPreview />
      <Reservation/>
      <Location/>
      <Footer/>
    </main>
  );
}
