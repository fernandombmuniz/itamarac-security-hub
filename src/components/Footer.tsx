import logoConcierge from "@/assets/logo-concierge.jpg";
import logoItamaraca from "@/assets/logo-itamaraca.png";

export function Footer() {
  return (
    <footer className="bg-navy-deep border-t border-border/30 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-6">
            <img 
              src={logoConcierge} 
              alt="Concierge Segurança Digital" 
              className="h-8 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
            <div className="h-6 w-px bg-border/50" />
            <img 
              src={logoItamaraca} 
              alt="Itamaracá Transportes" 
              className="h-6 object-contain opacity-70 hover:opacity-100 transition-opacity"
            />
          </div>
          
          <p className="text-sm text-muted-foreground text-center md:text-right">
            Material confidencial — Apresentação técnica de segurança de rede
          </p>
        </div>
      </div>
    </footer>
  );
}
