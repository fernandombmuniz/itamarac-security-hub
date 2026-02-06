import { Building, Award, Shield, Clock, Users } from "lucide-react";

const highlights = [
  { icon: Clock, label: "23 anos", description: "de atuação no mercado" },
  { icon: Award, label: "ISO 27001", description: "Certificação de segurança" },
  { icon: Building, label: "Porto Digital", description: "Sede em Recife" },
  { icon: Shield, label: "SOC 24x7", description: "Monitoramento contínuo" },
];

const comparison = [
  {
    aspect: "Resposta a incidentes",
    reactive: "Ação após identificação de problema pelo usuário ou indisponibilidade",
    proactive: "Monitoramento contínuo com resposta antes do impacto operacional",
  },
  {
    aspect: "Atualizações de segurança",
    reactive: "Aplicadas quando há tempo disponível ou após vulnerabilidade explorada",
    proactive: "Planejadas e aplicadas proativamente, com validação de impacto",
  },
  {
    aspect: "Visibilidade de ameaças",
    reactive: "Conhecimento limitado ao que causa problema visível",
    proactive: "Análise contínua de logs e correlação de eventos suspeitos",
  },
  {
    aspect: "Conhecimento do ambiente",
    reactive: "Dependência de documentação desatualizada ou memória da equipe",
    proactive: "Baseline de comportamento normal e detecção de anomalias",
  },
];

export function QosSection() {
  return (
    <section id="qos" className="bg-navy-medium py-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <Building className="w-6 h-6 text-primary" />
          <span className="text-primary text-sm font-medium">SEÇÃO 09</span>
        </div>
        
        <h2 className="section-title">Grupo QOS / Concierge</h2>
        <p className="section-subtitle">
          Contexto institucional e modelo de operação de segurança.
        </p>

        {/* Institutional Info */}
        <div className="grid md:grid-cols-4 gap-4 mb-12">
          {highlights.map((item) => (
            <div key={item.label} className="card-presentation text-center">
              <div className="w-12 h-12 rounded-xl bg-primary/10 mx-auto mb-3 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-primary" />
              </div>
              <p className="text-xl font-bold text-foreground">{item.label}</p>
              <p className="text-sm text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* About */}
        <div className="card-presentation mb-12">
          <div className="grid lg:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">Sobre o Grupo QOS</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O Grupo QOS atua há 23 anos no mercado de tecnologia e segurança da informação, 
                com sede no Porto Digital em Recife. A Concierge Segurança Digital é a unidade 
                especializada em serviços gerenciados de segurança.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A empresa possui certificação ISO 27001, que atesta a conformidade do sistema 
                de gestão de segurança da informação com padrões internacionais. Esta certificação 
                exige controles rigorosos de segurança, processos documentados e auditorias periódicas.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-foreground mb-4">SOC — Security Operations Center</h3>
              <p className="text-muted-foreground leading-relaxed mb-4">
                O SOC (Security Operations Center — Centro de Operações de Segurança) funciona 
                24 horas por dia, 7 dias por semana, monitorando ambientes de clientes e respondendo 
                a incidentes de segurança.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                A equipe do SOC é composta por analistas especializados em segurança de rede, 
                resposta a incidentes e análise de ameaças. O monitoramento contínuo permite 
                identificar e tratar eventos de segurança antes que causem impacto operacional.
              </p>
            </div>
          </div>
        </div>

        {/* Comparison */}
        <div className="card-presentation">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center gap-2">
            <Users className="w-5 h-5 text-primary" />
            Atuação reativa vs. operação contínua
          </h3>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-3 px-4 text-sm font-semibold text-foreground">Aspecto</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-muted-foreground">Atuação Reativa</th>
                  <th className="text-left py-3 px-4 text-sm font-semibold text-primary">Operação Contínua (SOC)</th>
                </tr>
              </thead>
              <tbody>
                {comparison.map((row) => (
                  <tr key={row.aspect} className="border-b border-border/50">
                    <td className="py-4 px-4 text-sm font-medium text-foreground">{row.aspect}</td>
                    <td className="py-4 px-4 text-sm text-muted-foreground">{row.reactive}</td>
                    <td className="py-4 px-4 text-sm text-primary/90">{row.proactive}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
}
