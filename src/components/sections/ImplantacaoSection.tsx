import { Settings, GitBranch, Network, TestTube, AlertCircle } from "lucide-react";

const migrationSteps = [
  {
    icon: GitBranch,
    title: "Migração de regras",
    description: "Levantamento das regras existentes no MikroTik e tradução para a sintaxe do NGFW. Inclui validação de políticas e ajustes para novas funcionalidades.",
  },
  {
    icon: Network,
    title: "VLANs e segmentação",
    description: "Mapeamento das VLANs existentes e configuração correspondente no novo equipamento. Oportunidade para revisar e otimizar a segmentação de rede.",
  },
  {
    icon: Network,
    title: "VPNs Site-to-Site",
    description: "Reconfiguração dos túneis IPsec para manter a conectividade entre unidades durante e após a transição. Testes de estabilidade e throughput.",
  },
  {
    icon: TestTube,
    title: "Testes e validação",
    description: "Período de operação em paralelo ou janela de manutenção para validar todas as funcionalidades. Rollback planejado em caso de problemas.",
  },
];

const effortFactors = [
  "Quantidade de regras e complexidade das políticas atuais",
  "Número de VLANs e nível de segmentação existente",
  "Quantidade de túneis VPN e dependências entre unidades",
  "Disponibilidade de janelas de manutenção",
  "Documentação existente sobre a configuração atual",
  "Criticidade operacional e tolerância a interrupções",
];

export function ImplantacaoSection() {
  return (
    <section id="implantacao" className="bg-navy-medium py-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <Settings className="w-6 h-6 text-primary" />
          <span className="text-primary text-sm font-medium">SEÇÃO 07</span>
        </div>
        
        <h2 className="section-title">Implantação e Transição</h2>
        <p className="section-subtitle">
          Considerações sobre o processo de migração do ambiente atual para a nova arquitetura de segurança.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Migration Steps */}
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-foreground mb-6">Etapas da migração</h3>
            
            {migrationSteps.map((step, index) => (
              <div key={step.title} className="card-presentation flex gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <step.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Effort Factors */}
          <div>
            <div className="card-presentation h-full">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-5 h-5 text-primary" />
                <h3 className="text-xl font-semibold text-foreground">Fatores que influenciam o esforço</h3>
              </div>
              
              <p className="text-muted-foreground mb-6">
                O tempo e complexidade da implantação variam conforme as características de cada ambiente. 
                Alguns fatores relevantes:
              </p>

              <ul className="space-y-3">
                {effortFactors.map((factor, index) => (
                  <li key={index} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0 mt-0.5">
                      <span className="text-xs font-medium text-foreground">{index + 1}</span>
                    </div>
                    <span className="text-sm leading-relaxed">{factor}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
                <p className="text-sm text-muted-foreground">
                  <strong className="text-foreground">Nota:</strong> A estimativa detalhada de esforço 
                  e cronograma será elaborada após a definição do modelo preferencial e levantamento 
                  técnico aprofundado do ambiente atual.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
