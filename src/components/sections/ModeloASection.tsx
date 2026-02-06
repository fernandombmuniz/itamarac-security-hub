import { LayoutGrid, Shield, Building2 } from "lucide-react";

const units = [
  { name: "Matriz", location: "Recife" },
  { name: "Filial 01", location: "Caruaru" },
  { name: "Filial 02", location: "Petrolina" },
  { name: "Filial 03", location: "João Pessoa" },
  { name: "Filial 04", location: "Natal" },
];

export function ModeloASection() {
  return (
    <section id="modelo-a" className="bg-background py-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <LayoutGrid className="w-6 h-6 text-primary" />
          <span className="text-primary text-sm font-medium">SEÇÃO 04</span>
        </div>
        
        <h2 className="section-title">Modelo A — Firewall por Unidade</h2>
        <p className="section-subtitle">
          Arquitetura distribuída com proteção local em cada ponto de presença.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <div className="card-presentation">
              <h3 className="text-lg font-semibold text-foreground mb-4">Conceito</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Neste modelo, cada unidade da Itamaracá Transportes recebe um firewall de 
                próxima geração (NGFW — Next-Generation Firewall) dedicado. O equipamento 
                é responsável por inspecionar todo o tráfego de entrada e saída da unidade, 
                aplicando políticas de segurança localmente.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                As unidades continuam conectadas entre si através de VPN Site-to-Site (IPsec), 
                mas agora com camadas adicionais de proteção em cada ponto. Isso significa que 
                mesmo que uma unidade seja comprometida, as demais possuem suas próprias defesas.
              </p>
            </div>

            <div className="card-presentation">
              <h3 className="text-lg font-semibold text-foreground mb-4">Equipamentos de referência</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Para este modelo, equipamentos da categoria NGFW de entrada/médio porte são adequados. 
                Dois exemplos de mercado frequentemente considerados:
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                  <p className="font-medium text-foreground text-sm">FortiGate 50G</p>
                  <p className="text-xs text-muted-foreground mt-1">Fortinet</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 border border-border/50">
                  <p className="font-medium text-foreground text-sm">SonicWall TZ370</p>
                  <p className="text-xs text-muted-foreground mt-1">SonicWall</p>
                </div>
              </div>
              <p className="text-xs text-muted-foreground mt-4">
                A escolha final depende de requisitos específicos, negociação comercial e preferências operacionais.
              </p>
            </div>
          </div>

          <div className="card-presentation">
            <h3 className="text-lg font-semibold text-foreground mb-6">Diagrama — Firewall por Unidade</h3>
            
            <div className="relative py-4">
              {/* Internet cloud */}
              <div className="flex justify-center mb-6">
                <div className="px-8 py-3 rounded-full bg-secondary border border-border text-sm text-muted-foreground">
                  Internet
                </div>
              </div>

              {/* Units with firewalls */}
              <div className="space-y-4">
                {units.map((unit, index) => (
                  <div key={unit.name} className="flex items-center gap-4">
                    <div className="flex-1 diagram-node flex items-center gap-3">
                      <Building2 className="w-5 h-5 text-muted-foreground" />
                      <div>
                        <p className="font-medium text-foreground text-sm">{unit.name}</p>
                        <p className="text-xs text-muted-foreground">{unit.location}</p>
                      </div>
                    </div>
                    
                    <div className="w-12 flex justify-center">
                      <div className="w-8 h-px bg-primary/40" />
                    </div>
                    
                    <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center flex-shrink-0">
                      <Shield className="w-5 h-5 text-primary" />
                    </div>
                    
                    <div className="w-12 flex justify-center">
                      <div className="w-8 h-px bg-primary/40" />
                    </div>
                    
                    <div className="w-3 h-3 rounded-full bg-primary/40" />
                  </div>
                ))}
              </div>

              {/* Legend */}
              <div className="flex justify-center mt-8 pt-4 border-t border-border/50">
                <div className="flex items-center gap-6 text-xs text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded bg-primary/20 border border-primary/30 flex items-center justify-center">
                      <Shield className="w-3 h-3 text-primary" />
                    </div>
                    <span>NGFW</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-px bg-primary/40" />
                    <span>Conexão protegida</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
