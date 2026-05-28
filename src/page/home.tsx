import About from "../components/About";
import Dicas from "../components/Dicas";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Impacto from "../components/Impacto";
import Navbar from "../components/Navbar";
import ODS6 from "../components/ods6";
import Tecnologia from "../components/Tecniologia";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <ODS6/>
    <Dicas/>
    <Impacto/>
    <Tecnologia/>
    <Footer/>
    </>
  );
}
