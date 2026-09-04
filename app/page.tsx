import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Servicios from "@/components/Servicios";
import Nosotros from "@/components/Nosotros";
import Compromisos from "@/components/Compromisos";
import Portfolio from "@/components/Portfolio";
import FAQ from "@/components/FAQ";
import Contacto from "@/components/Contacto";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main id="main">
        <Hero />
        <Servicios />
        <Nosotros />
        <Compromisos />
        <Portfolio />
        <FAQ />
        <Contacto />
      </main>
      <Footer />
    </>
  );
}
