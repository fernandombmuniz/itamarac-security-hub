import { CircleCheck, MessageSquare, FileText, Calendar, ArrowRight } from "lucide-react";
import logoConcierge from "@/assets/logo-concierge.jpg";
import logoItamaraca from "@/assets/logo-itamaraca.png";

const nextSteps = [
  {
    icon: MessageSquare,
    title: "Discussão e alinhamento",
    description: "Esclarecer dúvidas sobre os modelos apresentados e alinhar expectativas.",
  },
  {
    icon: CircleCheck,
    title: "Definição de modelo preferencial",
    description: "Escolher entre Modelo A (Firewall por unidade) ou Modelo B (Hub and Spoke).",
  },
  {
    icon: FileText,
    title: "Levantamento técnico detalhado",
    description: "Documentar configurações atuais, regras, VLANs e VPNs existentes.",
  },
  {
    icon: Calendar,
    title: "Proposta e cronograma",
    description: "Elaborar proposta comercial e cronograma de implantação.",
  },
];

export function DecisaoSection() {
  return (
    <section id="decisao" className="bg-background py-20">
      <div className="section-container">
        <div className="flex items-center gap-3 mb-4">
          <CircleCheck className="w-6 h-6 text-primary" />
          <span className="text-primary text-sm font-medium">SEÇÃO 10</span>
        </div>
        
        <h2 className="section-title">Decisão e Próximos Passos</h2>
        <p className="section-subtitle">
          Considerações para definição do caminho a seguir.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 mt-12">
          {/* Question */}
          <div className="space-y-6">
            <div className="card-presentation border-primary/30">
              <h3 className="text-xl font-semibold text-foreground mb-4">Questão para discussão</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Considerando o contexto apresentado, as características de cada modelo e as 
                necessidades operacionais da Itamaracá Transportes:
              </p>
              <p className="text-xl text-foreground font-medium">
                Qual modelo de arquitetura melhor atende às prioridades da empresa neste momento?
              </p>
              
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="p-4 rounded-lg bg-secondary/50 border border-border/50 text-center">
                  <p className="font-semibold text-foreground">Modelo A</p>
                  <p className="text-sm text-muted-foreground">Firewall por unidade</p>
                </div>
                <div className="p-4 rounded-lg bg-secondary/50 border border-border/50 text-center">
                  <p className="font-semibold text-foreground">Modelo B</p>
                  <p className="text-sm text-muted-foreground">Hub and Spoke</p>
                </div>
              </div>
            </div>

            {/* Logos as partnership representation */}
            <div className="card-presentation">
              <div className="flex items-center justify-center gap-6">
                <img 
                  src={logoConcierge} 
                  alt="Concierge Segurança Digital" 
                  className="h-14 object-contain"
                />
                <div className="flex items-center gap-2 text-primary">
                  <ArrowRight className="w-5 h-5" />
                  <ArrowRight className="w-5 h-5 -ml-3" />
                </div>
                <img 
                  src={logoItamaraca} 
                  alt="Itamaracá Transportes" 
                  className="h-12 object-contain"
                />
              </div>
              <p className="text-center text-sm text-muted-foreground mt-4">
                Parceria para evolução da segurança de rede
              </p>
            </div>
          </div>

          {/* Next Steps */}
          <div>
            <h3 className="text-xl font-semibold text-foreground mb-6">Próximos passos</h3>
            
            <div className="space-y-4">
              {nextSteps.map((step, index) => (
                <div key={step.title} className="card-presentation-hover flex gap-4">
                  <div className="relative">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <step.icon className="w-5 h-5 text-primary" />
                    </div>
                    {index < nextSteps.length - 1 && (
                      <div className="absolute top-12 left-1/2 w-px h-6 bg-border -translate-x-1/2" />
                    )}
                  </div>
                  <div className="flex-1 pt-1">
                    <h4 className="font-semibold text-foreground mb-1">{step.title}</h4>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-8 p-4 rounded-lg bg-primary/5 border border-primary/20">
              <p className="text-sm text-muted-foreground">
                <strong className="text-foreground">Estamos à disposição</strong> para esclarecer 
                dúvidas técnicas, apresentar detalhamentos adicionais ou discutir cenários 
                alternativos conforme a necessidade.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
