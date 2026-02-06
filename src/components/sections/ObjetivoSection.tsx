import { Target, FileText, GitBranch, CheckCircle2 } from "lucide-react";

const timeline = [
  { step: "01", label: "Contexto atual da rede", description: "Entender a estrutura existente" },
  { step: "02", label: "Modelos de arquitetura", description: "Apresentar opções técnicas" },
  { step: "03", label: "Comparativo técnico", description: "Análise de recursos e impactos" },
  { step: "04", label: "Próximos passos", description: "Definir direção e planejamento" },
];

export function ObjetivoSection() {
  return (
    <section id="objetivo" className="bg-navy-medium py-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <Target className="w-6 h-6 text-primary" />
          <span className="text-primary text-sm font-medium">SEÇÃO 01</span>
        </div>
        
        <h2 className="section-title">Objetivo da Apresentação</h2>
        
        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          <div className="space-y-6">
            <div className="card-presentation">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <FileText className="w-5 h-5 text-primary" />
                Propósito desta reunião
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                Esta apresentação tem como objetivo apresentar cenários técnicos para evolução 
                da segurança de rede da Itamaracá Transportes. Serão abordados dois modelos 
                de arquitetura, com análise de recursos, benefícios e considerações para cada um.
              </p>
            </div>

            <div className="card-presentation">
              <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                <GitBranch className="w-5 h-5 text-primary" />
                O que será apresentado
              </h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Análise do contexto atual de conectividade</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Dois modelos de arquitetura: Firewall por unidade e Hub and Spoke</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Comparativo técnico entre soluções</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                  <span>Considerações sobre implantação e transição</span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Nota:</strong> Detalhes de orçamento, cronograma 
                específico e configurações técnicas detalhadas serão tratados em etapas posteriores, 
                após definição do modelo preferencial.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-foreground mb-6">Etapas desta conversa</h3>
            
            <div className="relative">
              <div className="absolute left-4 top-8 bottom-8 w-px bg-border" />
              
              {timeline.map((item, index) => (
                <div key={item.step} className="relative flex gap-4 pb-8 last:pb-0">
                  <div className="w-8 h-8 rounded-full bg-primary/20 text-primary flex items-center justify-center text-sm font-semibold z-10">
                    {item.step}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-medium text-foreground">{item.label}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
