'use client'
import Hero from "./hero";
import Services from "./services";
import About from "./about";
import Projects from "./projects";
import DigitalProducts from "./digital-products";
import Header from "./components/header";
import CTA from "./cta";
import Contact from "./contact";
import FAQ from "./faq";
import Footer from "./footer";
import Newsletter from "./newsletter";

export default function Home() {
  return (
    <>
      <main id="main-content" className="w-full">
        <Header/>
        <Hero />
        <About />
        <Services />
        <Projects />
        <DigitalProducts />
        <CTA />
        <Newsletter />
        <Contact />
        <FAQ />
        <Footer />
      </main>
    </>
  );
}
