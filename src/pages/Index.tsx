import { useState, useEffect } from "react";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { HeroSection } from "@/components/sections/HeroSection";
import { ObjetivoSection } from "@/components/sections/ObjetivoSection";
import { ContextoSection } from "@/components/sections/ContextoSection";
import { ModelosSection } from "@/components/sections/ModelosSection";
import { ModeloASection } from "@/components/sections/ModeloASection";
import { ConceitosSection } from "@/components/sections/ConceitosSection";
import { BattlecardSection } from "@/components/sections/BattlecardSection";
import { ImplantacaoSection } from "@/components/sections/ImplantacaoSection";
import { ModeloBSection } from "@/components/sections/ModeloBSection";
import { QosSection } from "@/components/sections/QosSection";
import { DecisaoSection } from "@/components/sections/DecisaoSection";

const sectionIds = [
  "hero",
  "objetivo",
  "contexto",
  "modelos",
  "modelo-a",
  "conceitos",
  "battlecard",
  "implantacao",
  "modelo-b",
  "qos",
  "decisao",
];

const Index = () => {
  const [currentSection, setCurrentSection] = useState(0);

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-50% 0px -50% 0px",
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const index = sectionIds.indexOf(entry.target.id);
          if (index !== -1) {
            setCurrentSection(index);
          }
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sectionIds.forEach((id) => {
      const element = document.getElementById(id);
      if (element) {
        observer.observe(element);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <Header currentSection={currentSection} totalSections={sectionIds.length} />
      
      <main>
        <HeroSection />
        <ObjetivoSection />
        <ContextoSection />
        <ModelosSection />
        <ModeloASection />
        <ConceitosSection />
        <BattlecardSection />
        <ImplantacaoSection />
        <ModeloBSection />
        <QosSection />
        <DecisaoSection />
      </main>

      <Footer />
    </div>
  );
};

export default Index;
