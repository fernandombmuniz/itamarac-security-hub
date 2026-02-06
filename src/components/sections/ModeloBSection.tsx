import { GitMerge, Building2, Shield, AlertTriangle, CheckCircle2 } from "lucide-react";

const benefits = [
  "Gestão centralizada de políticas de segurança",
  "Menor quantidade de equipamentos NGFW (apenas no hub)",
  "Visibilidade consolidada de todo o tráfego",
  "Facilidade para aplicar atualizações e patches",
  "Logs centralizados para auditoria",
];

const considerations = [
  "Dependência do link central — se o hub ficar indisponível, o tráfego não é inspecionado",
  "Latência adicional para tráfego entre spokes (passa pelo hub)",
  "Necessidade de links com boa capacidade e baixa latência para o hub",
  "Dimensionamento do firewall central para suportar tráfego de todas as unidades",
];

const branches = [
  { name: "Filial 01", location: "Caruaru" },
  { name: "Filial 02", location: "Petrolina" },
  { name: "Filial 03", location: "João Pessoa" },
  { name: "Filial 04", location: "Natal" },
];

export function ModeloBSection() {
  return (
    <section id="modelo-b" className="bg-background py-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <GitMerge className="w-6 h-6 text-primary" />
          <span className="text-primary text-sm font-medium">SEÇÃO 08</span>
        </div>
        
        <h2 className="section-title">Modelo B — Hub and Spoke</h2>
        <p className="section-subtitle">
          Arquitetura centralizada onde o tráfego de todas as unidades passa por um ponto central de inspeção.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Concept and Details */}
          <div className="space-y-6">
            <div className="card-presentation">
              <h3 className="text-lg font-semibold text-foreground mb-4">Conceito</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                No modelo Hub and Spoke, um firewall NGFW central (o "hub") é posicionado na matriz 
                ou em um datacenter. Todas as unidades remotas (os "spokes") estabelecem túneis VPN 
                para o hub, e o tráfego que precisa de inspeção é direcionado para análise centralizada.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Este modelo simplifica a gestão ao concentrar as políticas de segurança em um único 
                ponto, mas introduz dependência do hub e dos links de comunicação entre unidades 
                e o ponto central.
              </p>
            </div>

            <div className="card-presentation">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-primary" />
                Benefícios
              </h3>
              <ul className="space-y-2">
                {benefits.map((benefit) => (
                  <li key={benefit} className="flex items-start gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-primary mt-2" />
                    <span className="text-sm">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-presentation">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5 text-yellow-500" />
                Pontos de atenção
              </h3>
              <ul className="space-y-2">
                {considerations.map((consideration) => (
                  <li key={consideration} className="flex items-start gap-2 text-muted-foreground">
                    <div className="w-1.5 h-1.5 rounded-full bg-yellow-500/60 mt-2" />
                    <span className="text-sm">{consideration}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Diagram */}
          <div className="card-presentation">
            <h3 className="text-lg font-semibold text-foreground mb-6">Diagrama — Hub and Spoke</h3>
            
            <div className="relative py-8">
              {/* Internet */}
              <div className="flex justify-center mb-6">
                <div className="px-8 py-3 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
                  Internet
                </div>
              </div>

              {/* Connection to hub */}
              <div className="flex justify-center mb-4">
                <div className="h-6 w-px bg-primary/40" />
              </div>

              {/* Hub (Central Firewall) */}
              <div className="flex justify-center mb-6">
                <div className="diagram-node-primary w-64 py-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/20 mx-auto mb-3 flex items-center justify-center">
                    <Shield className="w-6 h-6 text-primary" />
                  </div>
                  <p className="font-semibold text-foreground">Hub Central</p>
                  <p className="text-xs text-muted-foreground">NGFW + Matriz (Recife)</p>
                </div>
              </div>

              {/* Connections to spokes */}
              <div className="flex justify-center mb-4">
                <div className="grid grid-cols-4 gap-8">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="flex flex-col items-center">
                      <div className="h-8 w-px bg-primary/40" />
                      <div className="w-2 h-2 rounded-full bg-primary/60" />
                    </div>
                  ))}
                </div>
              </div>

              {/* Spokes */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {branches.map((branch) => (
                  <div key={branch.name} className="diagram-node text-center">
                    <Building2 className="w-5 h-5 text-muted-foreground mx-auto mb-2" />
                    <p className="font-medium text-foreground text-xs">{branch.name}</p>
                    <p className="text-xs text-muted-foreground">{branch.location}</p>
                    <p className="text-xs text-primary/70 mt-1">Spoke</p>
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex flex-wrap justify-center gap-6 mt-8 pt-4 border-t border-border/50 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-primary/20 border border-primary/30 flex items-center justify-center">
                    <Shield className="w-3 h-3 text-primary" />
                  </div>
                  <span>NGFW Central</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-6 h-6 rounded bg-secondary border border-border flex items-center justify-center">
                    <Building2 className="w-3 h-3 text-muted-foreground" />
                  </div>
                  <span>Unidade remota</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
