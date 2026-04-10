import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Pillars from "@/components/Pillars";
import CartePro from "@/components/CartePro";
import HowToJoin from "@/components/HowToJoin";
import Comparison from "@/components/Comparison";
import Roadmap from "@/components/Roadmap";
import Temoignages from "@/components/Temoignages";
import FAQ from "@/components/FAQ";
import MurTemoignages from "@/components/MurTemoignages";
import FinalCTA from "@/components/FinalCTA";
import Footer from "@/components/Footer";
import MobileCTA from "@/components/MobileCTA";
import SocialNotif from "@/components/SocialNotif";
import IClosedPopup from "@/components/IClosedPopup";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero />
        <Problem />
        <Pillars />
        <CartePro />
        <HowToJoin />
        <Comparison />
        <Roadmap />
        <Temoignages />
        <FAQ />
        <MurTemoignages />
        <FinalCTA />
      </main>
      <Footer />
      <MobileCTA />
      <SocialNotif />
      <IClosedPopup />
    </>
  );
}
