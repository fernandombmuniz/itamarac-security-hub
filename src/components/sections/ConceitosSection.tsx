import { 
  Shield, 
  AlertTriangle, 
  Eye, 
  Bug, 
  AppWindow, 
  Globe, 
  Lock, 
  Wifi 
} from "lucide-react";

const concepts = [
  {
    icon: Shield,
    acronym: "NGFW",
    full: "Next-Generation Firewall",
    translation: "Firewall de Próxima Geração",
    description: "Evolução do firewall tradicional que, além de filtrar portas e protocolos, analisa o conteúdo do tráfego para identificar aplicações, ameaças e comportamentos suspeitos. Integra múltiplas camadas de proteção em um único equipamento.",
  },
  {
    icon: AlertTriangle,
    acronym: "IPS",
    full: "Intrusion Prevention System",
    translation: "Sistema de Prevenção de Intrusão",
    description: "Monitora o tráfego de rede em tempo real e bloqueia automaticamente tentativas de exploração de vulnerabilidades conhecidas. Age de forma proativa, interrompendo ataques antes que causem danos.",
  },
  {
    icon: Eye,
    acronym: "IDS",
    full: "Intrusion Detection System",
    translation: "Sistema de Detecção de Intrusão",
    description: "Semelhante ao IPS, mas focado em detecção e alerta. Identifica atividades suspeitas e notifica a equipe de segurança, permitindo análise e resposta manual. Útil para investigação e aprendizado sobre ameaças.",
  },
  {
    icon: Bug,
    acronym: "AV Gateway",
    full: "Antivírus de Gateway",
    translation: "Antivírus no ponto de entrada da rede",
    description: "Analisa arquivos e downloads que entram na rede, identificando malware conhecido antes que chegue aos dispositivos dos usuários. Complementa o antivírus instalado nos computadores.",
  },
  {
    icon: AppWindow,
    acronym: "App Control",
    full: "Application Control",
    translation: "Controle de Aplicações",
    description: "Identifica e controla quais aplicações podem trafegar pela rede, independente da porta utilizada. Permite bloquear ou limitar aplicações de risco, como torrents, ou priorizar aplicações críticas.",
  },
  {
    icon: Globe,
    acronym: "Web Filtering",
    full: "Web Filtering / URL Filtering",
    translation: "Filtragem de Conteúdo Web",
    description: "Controla o acesso a sites e categorias de conteúdo na internet. Pode bloquear sites maliciosos conhecidos, categorias inadequadas para o ambiente corporativo ou sites que consomem muita banda.",
  },
  {
    icon: Lock,
    acronym: "VPN IPsec",
    full: "Virtual Private Network over IPsec",
    translation: "Rede Privada Virtual sobre IPsec",
    description: "Cria túneis criptografados entre unidades ou para acesso remoto. O protocolo IPsec garante autenticação mútua e criptografia forte, protegendo os dados que trafegam pela internet pública.",
  },
  {
    icon: Wifi,
    acronym: "SD-WAN",
    full: "Software-Defined Wide Area Network",
    translation: "Rede de Longa Distância Definida por Software",
    description: "Tecnologia que permite gerenciar múltiplos links de internet de forma inteligente, distribuindo o tráfego conforme disponibilidade, latência e criticidade. Melhora a resiliência e pode reduzir custos de conectividade.",
  },
];

export function ConceitosSection() {
  return (
    <section id="conceitos" className="bg-navy-medium py-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <Shield className="w-6 h-6 text-primary" />
          <span className="text-primary text-sm font-medium">SEÇÃO 05</span>
        </div>
        
        <h2 className="section-title">Conceitos do NGFW</h2>
        <p className="section-subtitle">
          Funcionalidades integradas em um firewall de próxima geração e seus benefícios para a segurança corporativa.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mt-12">
          {concepts.map((concept) => (
            <div key={concept.acronym} className="card-presentation-hover">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <concept.icon className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <span className="tech-badge text-xs">{concept.acronym}</span>
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">
                    {concept.full}
                  </h3>
                  <p className="text-sm text-primary/80 mb-3">
                    {concept.translation}
                  </p>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {concept.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
