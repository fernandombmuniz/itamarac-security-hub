import { Network, Building2, Users, AlertTriangle } from "lucide-react";

const units = [
  { name: "Matriz", location: "Recife - PE" },
  { name: "Filial 01", location: "Caruaru - PE" },
  { name: "Filial 02", location: "Petrolina - PE" },
  { name: "Filial 03", location: "João Pessoa - PB" },
  { name: "Filial 04", location: "Natal - RN" },
];

const concepts = [
  {
    term: "VPN Site-to-Site",
    full: "Virtual Private Network entre unidades",
    description: "Túnel criptografado que conecta as redes locais de diferentes unidades físicas, permitindo comunicação segura entre elas através da internet.",
  },
  {
    term: "VLAN",
    full: "Virtual Local Area Network",
    description: "Segmentação lógica da rede local que separa diferentes tipos de tráfego (administrativo, operacional, visitantes) dentro de uma mesma infraestrutura física.",
  },
  {
    term: "IPsec",
    full: "Internet Protocol Security",
    description: "Protocolo que garante autenticação e criptografia dos dados que trafegam pela VPN, protegendo contra interceptação e adulteração.",
  },
];

export function ContextoSection() {
  return (
    <section id="contexto" className="bg-background py-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <Network className="w-6 h-6 text-primary" />
          <span className="text-primary text-sm font-medium">SEÇÃO 02</span>
        </div>
        
        <h2 className="section-title">Contexto Atual</h2>
        <p className="section-subtitle">
          Visão geral da infraestrutura de conectividade entre as unidades da Itamaracá Transportes.
        </p>

        {/* Diagram */}
        <div className="card-presentation mb-12">
          <h3 className="text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
            <Building2 className="w-5 h-5 text-primary" />
            Topologia atual — VPN Site-to-Site (IPsec)
          </h3>
          
          <div className="relative py-8">
            {/* Central node */}
            <div className="flex justify-center mb-8">
              <div className="diagram-node-primary w-48">
                <div className="w-10 h-10 rounded-full bg-primary/20 mx-auto mb-2 flex items-center justify-center">
                  <Building2 className="w-5 h-5 text-primary" />
                </div>
                <p className="font-semibold text-foreground">Matriz</p>
                <p className="text-xs text-muted-foreground">Recife - PE</p>
              </div>
            </div>

            {/* Connection lines */}
            <div className="flex justify-center mb-4">
              <div className="grid grid-cols-4 gap-4 max-w-3xl">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col items-center">
                    <div className="h-8 w-px bg-primary/40" />
                    <div className="w-2 h-2 rounded-full bg-primary/60" />
                    <div className="h-4 w-px bg-primary/40" />
                  </div>
                ))}
              </div>
            </div>

            {/* Branch nodes */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {units.slice(1).map((unit, index) => (
                <div key={unit.name} className="diagram-node">
                  <p className="font-medium text-foreground text-sm">{unit.name}</p>
                  <p className="text-xs text-muted-foreground">{unit.location}</p>
                </div>
              ))}
            </div>

            {/* Legend */}
            <div className="flex justify-center mt-8">
              <div className="flex items-center gap-6 text-xs text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-px bg-primary/40" />
                  <span>VPN IPsec</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary/60" />
                  <span>Ponto de conexão</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Concepts */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {concepts.map((concept) => (
            <div key={concept.term} className="card-presentation">
              <div className="tech-badge mb-4">{concept.term}</div>
              <p className="text-sm text-foreground font-medium mb-2">{concept.full}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{concept.description}</p>
            </div>
          ))}
        </div>

        {/* Additional context */}
        <div className="grid md:grid-cols-2 gap-6">
          <div className="card-presentation">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <Users className="w-5 h-5 text-primary" />
              Acesso de terceiros
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              Fornecedores, prestadores de serviço e parceiros eventualmente precisam acessar 
              recursos internos. Atualmente, esse acesso pode não estar adequadamente isolado 
              ou monitorado, representando um ponto de atenção na governança de segurança.
            </p>
          </div>

          <div className="card-presentation">
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <AlertTriangle className="w-5 h-5 text-primary" />
              Dependência operacional
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              A conectividade entre unidades é crítica para operações de transporte, 
              rastreamento de frota, comunicação interna e sistemas de gestão. 
              Qualquer interrupção ou comprometimento pode impactar diretamente a operação.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
