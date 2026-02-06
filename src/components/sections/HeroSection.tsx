import { Shield, Scale, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Continuidade Operacional",
    description: "Proteção proativa para manter as operações funcionando sem interrupções causadas por ameaças de rede.",
  },
  {
    icon: Scale,
    title: "Governança",
    description: "Visibilidade e controle sobre o tráfego de rede, com logs auditáveis e políticas centralizadas.",
  },
  {
    icon: TrendingUp,
    title: "Evolução por Etapas",
    description: "Implementação gradual que respeita o ritmo operacional e permite validação a cada fase.",
  },
];

export function HeroSection() {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center pt-20 pb-16" style={{ background: "var(--gradient-hero)" }}>
      <div className="section-container text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6 leading-tight">
            Apresentação de Segurança de Rede
            <span className="block text-gradient-teal mt-2">Itamaracá Transportes</span>
          </h1>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-16 leading-relaxed">
            Proposta técnica para evolução da infraestrutura de segurança de rede, 
            considerando as necessidades operacionais e os requisitos de governança corporativa.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {features.map((feature, index) => (
            <div 
              key={feature.title}
              className={`card-presentation-hover text-left animate-fade-in-delay-${index + 1}`}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 animate-fade-in-delay-3">
          <div className="flex items-center justify-center gap-2 text-muted-foreground">
            <span className="text-sm">Role para continuar</span>
            <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-1">
              <div className="w-1.5 h-3 rounded-full bg-primary animate-bounce" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
