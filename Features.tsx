import { BookOpen, Bell, FileText, Crown } from "lucide-react";

const features = [
  {
    icon: BookOpen,
    title: "Questões Personalizadas",
    description: "Escolha o concurso, as matérias e o formato. A IA gera questões exclusivas e não repetidas para seu estudo.",
    color: "primary"
  },
  {
    icon: Bell,
    title: "Acompanhamento de Concursos",
    description: "Fique por dentro de todos os concursos com filtros por região e estado. Receba notificações instantâneas.",
    color: "secondary"
  },
  {
    icon: FileText,
    title: "Correção de Redação com IA",
    description: "Submeta redações e receba feedback detalhado baseado nos critérios específicos da banca examinadora.",
    color: "accent"
  },
  {
    icon: Crown,
    title: "Planos Flexíveis",
    description: "Do gratuito ao ilimitado. Escolha o plano ideal para sua jornada de aprovação.",
    color: "primary"
  }
];

const Features = () => {
  return (
    <section className="py-24 px-4 relative">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Tudo que você precisa para{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              ser aprovado
            </span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Uma plataforma completa com recursos avançados de IA para otimizar seus estudos
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-strong p-8 rounded-3xl hover:glow transition-all duration-300 group cursor-pointer"
            >
              <div className={`w-16 h-16 rounded-2xl bg-${feature.color}/20 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <feature.icon className={`w-8 h-8 text-${feature.color}`} />
              </div>
              <h3 className="text-2xl font-bold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;