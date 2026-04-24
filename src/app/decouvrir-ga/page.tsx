import type { Metadata } from "next";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Problem from "@/components/Problem";
import Pillars from "@/components/Pillars";
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
import CookieBanner from "@/components/CookieBanner";
import ExitPopup from "@/components/ExitPopup";
import IClosedInline from "./IClosedInline";

export const metadata: Metadata = {
  robots: { index: false, follow: true },
};

export default function DecouvrirGa() {
  return (
    <>
      <Navbar />
      <main className="pb-16 md:pb-0">
        <Hero vslId="Qm7vdHIW8YBNjzG8" />
        <Problem />
        <Pillars />
        <HowToJoin>
          <IClosedInline />
        </HowToJoin>
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
      <CookieBanner />
      <ExitPopup />
    </>
  );
}
