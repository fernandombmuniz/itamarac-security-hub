import { LayoutGrid, GitMerge, ArrowRight } from "lucide-react";

const models = [
  {
    id: "modelo-a",
    icon: LayoutGrid,
    title: "Modelo A",
    subtitle: "Firewall por Unidade",
    description: "Cada unidade possui seu próprio firewall de próxima geração (NGFW), garantindo proteção local e autonomia operacional. As unidades continuam conectadas via VPN Site-to-Site.",
    benefits: [
      "Proteção local em cada unidade",
      "Autonomia para políticas específicas",
      "Menor dependência de conectividade central",
      "Logs e visibilidade por unidade",
    ],
    considerations: [
      "Maior quantidade de equipamentos",
      "Gestão distribuída (pode ser centralizada)",
      "Investimento inicial em cada ponto",
    ],
  },
  {
    id: "modelo-b",
    icon: GitMerge,
    title: "Modelo B",
    subtitle: "Hub and Spoke",
    description: "Um firewall central (hub) concentra a análise de segurança, e as unidades (spokes) direcionam seu tráfego para inspeção centralizada antes de acessar recursos externos ou entre unidades.",
    benefits: [
      "Gestão centralizada de políticas",
      "Menor quantidade de equipamentos NGFW",
      "Visibilidade consolidada do tráfego",
      "Padronização de regras",
    ],
    considerations: [
      "Dependência do link central",
      "Latência adicional no tráfego",
      "Dimensionamento do hub central",
    ],
  },
];

export function ModelosSection() {
  return (
    <section id="modelos" className="bg-navy-medium py-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <LayoutGrid className="w-6 h-6 text-primary" />
          <span className="text-primary text-sm font-medium">SEÇÃO 03</span>
        </div>
        
        <h2 className="section-title">Modelos de Arquitetura</h2>
        <p className="section-subtitle">
          Duas abordagens técnicas para implementação de segurança de rede, cada uma com características distintas.
        </p>

        <div className="grid lg:grid-cols-2 gap-8 mt-12">
          {models.map((model) => (
            <div key={model.id} className="card-presentation-hover">
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <model.icon className="w-7 h-7 text-primary" />
                </div>
                <div>
                  <span className="text-primary text-sm font-medium">{model.title}</span>
                  <h3 className="text-xl font-semibold text-foreground">{model.subtitle}</h3>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {model.description}
              </p>

              <div className="space-y-4">
                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Benefícios</h4>
                  <ul className="space-y-1">
                    {model.benefits.map((benefit) => (
                      <li key={benefit} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h4 className="text-sm font-semibold text-foreground mb-2">Considerações</h4>
                  <ul className="space-y-1">
                    {model.considerations.map((consideration) => (
                      <li key={consideration} className="text-sm text-muted-foreground flex items-center gap-2">
                        <div className="w-1.5 h-1.5 rounded-full bg-muted-foreground/50" />
                        {consideration}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-border/50">
                <a 
                  href={`#${model.id}`}
                  className="text-primary text-sm font-medium flex items-center gap-2 hover:gap-3 transition-all"
                >
                  Ver detalhes completos
                  <ArrowRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
