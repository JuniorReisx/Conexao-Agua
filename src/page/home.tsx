import About from "../components/About";
import Dicas from "../components/Dicas";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Impacto from "../components/Impacto";
import Navbar from "../components/Navbar";
import Objetivos from "../components/Objetivos";
import Tecnologia from "../components/Tecniologia";

export default function Home() {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Objetivos/>
    <Dicas/>
    <Impacto/>
    <Tecnologia/>
    <Footer/>
    </>
  );
}
