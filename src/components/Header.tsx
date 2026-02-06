import logoConcierge from "@/assets/logo-concierge.jpg";
import logoItamaraca from "@/assets/logo-itamaraca.png";

interface HeaderProps {
  currentSection: number;
  totalSections: number;
}

const sections = [
  { id: "hero", label: "Início" },
  { id: "objetivo", label: "Objetivo" },
  { id: "contexto", label: "Contexto" },
  { id: "modelos", label: "Modelos" },
  { id: "modelo-a", label: "Modelo A" },
  { id: "conceitos", label: "Conceitos" },
  { id: "battlecard", label: "Comparativo" },
  { id: "implantacao", label: "Implantação" },
  { id: "modelo-b", label: "Modelo B" },
  { id: "qos", label: "QOS" },
  { id: "decisao", label: "Decisão" },
];

export function Header({ currentSection, totalSections }: HeaderProps) {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6 py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logoConcierge} 
            alt="Concierge Segurança Digital" 
            className="h-10 object-contain"
          />
        </div>

        <nav className="hidden lg:flex items-center gap-1">
          {sections.slice(0, 7).map((section, index) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className={`px-3 py-1.5 text-sm rounded-md transition-colors ${
                currentSection === index
                  ? "text-primary bg-primary/10"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              {section.label}
            </button>
          ))}
          <span className="text-muted-foreground px-1">...</span>
        </nav>

        <div className="flex items-center gap-4">
          <div className="hidden sm:flex items-center gap-2 text-sm text-muted-foreground">
            <span className="text-primary font-semibold">
              {String(currentSection + 1).padStart(2, "0")}
            </span>
            <span>/</span>
            <span>{String(totalSections).padStart(2, "0")}</span>
          </div>
          <img 
            src={logoItamaraca} 
            alt="Itamaracá Transportes" 
            className="h-8 object-contain"
          />
        </div>
      </div>
    </header>
  );
}
