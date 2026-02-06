import { useState } from "react";
import { Table, Shield, Settings, ClipboardList } from "lucide-react";

type FilterCategory = "all" | "security" | "operation" | "governance";

const categories = [
  { id: "all" as const, label: "Todos", icon: Table },
  { id: "security" as const, label: "Segurança", icon: Shield },
  { id: "operation" as const, label: "Operação", icon: Settings },
  { id: "governance" as const, label: "Governança", icon: ClipboardList },
];

const battlecardData = [
  {
    category: "security",
    feature: "Objetivo do equipamento",
    mikrotik: "Roteamento avançado e gerenciamento de rede. Focado em conectividade, não em segurança como função principal.",
    ngfw: "Proteção de perímetro com inspeção de tráfego e prevenção de ameaças. Segurança é a função principal.",
    impact: "Com NGFW, a segurança deixa de ser um complemento e passa a ser o centro da arquitetura de rede.",
  },
  {
    category: "security",
    feature: "IPS — Sistema de Prevenção de Intrusão",
    mikrotik: "Não disponível nativamente. Requer soluções externas ou scripts manuais sem garantia de eficácia.",
    ngfw: "Integrado e atualizado automaticamente. Bloqueia tentativas de exploração de vulnerabilidades em tempo real.",
    impact: "Proteção automática contra ataques conhecidos, reduzindo risco de comprometimento de sistemas.",
  },
  {
    category: "security",
    feature: "IDS — Sistema de Detecção de Intrusão",
    mikrotik: "Limitado a logs básicos de conexão. Não há análise comportamental ou correlação de eventos.",
    ngfw: "Detecção baseada em assinaturas e comportamento. Gera alertas para investigação pela equipe de segurança.",
    impact: "Visibilidade sobre tentativas de ataque, mesmo quando não bloqueadas, permitindo resposta e aprendizado.",
  },
  {
    category: "security",
    feature: "Antivírus de Gateway",
    mikrotik: "Não disponível. Malware pode atravessar o roteador sem qualquer verificação.",
    ngfw: "Verifica arquivos e downloads na entrada da rede. Bloqueia malware conhecido antes de atingir endpoints.",
    impact: "Camada adicional de proteção que reduz a carga sobre antivírus locais e intercepta ameaças na borda.",
  },
  {
    category: "operation",
    feature: "Controle de Aplicações",
    mikrotik: "Identificação básica por porta. Aplicações modernas que usam portas dinâmicas não são identificadas.",
    ngfw: "Identifica aplicações por comportamento e assinatura, independente da porta. Permite políticas granulares.",
    impact: "Controle real sobre o que trafega na rede: priorizar sistemas críticos, limitar ou bloquear aplicações de risco.",
  },
  {
    category: "operation",
    feature: "Web Filtering — Filtragem de Conteúdo",
    mikrotik: "Listas manuais de IPs/domínios. Não há categorização automática ou atualização de ameaças.",
    ngfw: "Categorização automática de milhões de sites. Atualizações constantes sobre sites maliciosos e phishing.",
    impact: "Proteção contra acesso a sites maliciosos e controle sobre uso da internet corporativa.",
  },
  {
    category: "operation",
    feature: "SD-WAN — Gestão Inteligente de Links",
    mikrotik: "Failover básico entre links. Não há balanceamento inteligente baseado em métricas de qualidade.",
    ngfw: "Balanceamento por aplicação, latência e disponibilidade. Integração nativa com métricas de qualidade.",
    impact: "Melhor aproveitamento de múltiplos links, com redirecionamento automático em caso de degradação.",
  },
  {
    category: "governance",
    feature: "Logs e Auditoria",
    mikrotik: "Logs básicos armazenados localmente. Capacidade limitada e sem estrutura para auditoria.",
    ngfw: "Logs detalhados com contexto de usuário, aplicação e ameaça. Exportação para SIEM e retenção prolongada.",
    impact: "Base para auditorias, investigações de incidentes e conformidade com requisitos regulatórios.",
  },
  {
    category: "governance",
    feature: "Operação Contínua",
    mikrotik: "Requer equipe especializada em RouterOS. Manutenção reativa baseada em problemas reportados.",
    ngfw: "Atualizações automáticas de assinaturas. Suporte do fabricante e possibilidade de gestão por SOC externo.",
    impact: "Proteção mantida atualizada sem intervenção constante. Resposta a incidentes profissionalizada.",
  },
];

export function BattlecardSection() {
  const [activeCategory, setActiveCategory] = useState<FilterCategory>("all");

  const filteredData = activeCategory === "all" 
    ? battlecardData 
    : battlecardData.filter(item => item.category === activeCategory);

  return (
    <section id="battlecard" className="bg-background py-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <Table className="w-6 h-6 text-primary" />
          <span className="text-primary text-sm font-medium">SEÇÃO 06</span>
        </div>
        
        <h2 className="section-title">Comparativo Técnico</h2>
        <p className="section-subtitle">
          Análise funcional entre MikroTik/RouterOS e soluções NGFW (FortiGate 50G / SonicWall TZ370).
        </p>

        {/* Category Toggle */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80"
              }`}
            >
              <category.icon className="w-4 h-4" />
              {category.label}
            </button>
          ))}
        </div>

        {/* Battlecard Table */}
        <div className="card-presentation overflow-hidden p-0">
          <div className="overflow-x-auto">
            <table className="table-battlecard">
              <thead>
                <tr>
                  <th className="min-w-[180px]">Funcionalidade</th>
                  <th className="min-w-[250px]">MikroTik / RouterOS</th>
                  <th className="min-w-[250px]">NGFW (FortiGate / SonicWall)</th>
                  <th className="min-w-[220px]">Impacto Prático</th>
                </tr>
              </thead>
              <tbody>
                {filteredData.map((row, index) => (
                  <tr key={index}>
                    <td className="font-medium text-foreground">
                      <div className="flex items-center gap-2">
                        <div className={`w-2 h-2 rounded-full ${
                          row.category === "security" ? "bg-destructive" :
                          row.category === "operation" ? "bg-primary" : "bg-accent"
                        }`} />
                        {row.feature}
                      </div>
                    </td>
                    <td>
                      <div className="text-sm leading-relaxed">{row.mikrotik}</div>
                    </td>
                    <td>
                      <div className="text-sm leading-relaxed">{row.ngfw}</div>
                    </td>
                    <td>
                      <div className="text-sm leading-relaxed text-primary/90">{row.impact}</div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-6 mt-6 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-destructive" />
            <span>Segurança</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-primary" />
            <span>Operação</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-accent" />
            <span>Governança</span>
          </div>
        </div>
      </div>
    </section>
  );
}
