import { motion } from "framer-motion";
import {
  CheckCircle,
  TrendingUp,
  Eye,
  DollarSign,
  Smartphone,
  Lightbulb,
  Users,
  ShieldCheck,
  Zap,
  Play,
  AlertTriangle,
} from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";
import CTAButton from "@/components/CTAButton";
import CountdownTimer from "@/components/CountdownTimer";
import TestimonialCard from "@/components/TestimonialCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const CHECKOUT_URL =
  "https://pay.kambafy.com/checkout/899de5b8-ad76-4c01-9c63-696845659f8f";

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* HERO */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-5xl mx-auto text-center relative z-10">
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-primary font-heading font-semibold tracking-widest text-sm mb-4"
          >
            SC DIGITAL APRESENTA
          </motion.p>
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.1 } } }}
            className="font-heading font-bold text-3xl md:text-5xl lg:text-6xl leading-tight mb-6"
          >
            COMO CRESCER NO TIKTOK E FAZER AS{" "}
            <span className="text-gradient-primary">PRIMEIRAS VENDAS DO ZERO</span>
          </motion.h1>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2 } } }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-4"
          >
            Mesmo sem experiência, sem seguidores e usando apenas o telemóvel.
          </motion.p>
          <motion.p
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.3 } } }}
            className="text-secondary-foreground text-base md:text-lg max-w-2xl mx-auto mb-8"
          >
            Descobre o método simples que pessoas comuns estão a usar para sair do zero e começar a vender online.
          </motion.p>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.4 } } }}
            className="mb-10"
          >
            <CTAButton />
          </motion.div>
          <motion.img
            src={ebookCover}
            alt="eBook Como Crescer no TikTok"
            className="mx-auto max-w-xs md:max-w-sm glow-primary rounded-2xl"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            width={400}
            height={512}
          />
        </div>
      </section>

      {/* DOR + IDENTIFICAÇÃO */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-center mb-8">
              Seja honesto…
            </h2>
            <div className="space-y-5 mb-8">
              {[
                "Já tentaste crescer no TikTok e nada acontece?",
                "Postas vídeos mas ninguém comenta ou segue?",
                "Vês outras pessoas a ganhar dinheiro e não sabes como começar?",
              ].map((q) => (
                <div key={q} className="flex items-start gap-3 bg-card border border-border rounded-xl p-5">
                  <AlertTriangle className="w-5 h-5 text-accent mt-0.5 shrink-0" />
                  <p className="text-foreground text-lg">{q}</p>
                </div>
              ))}
            </div>
            <div className="text-center">
              <p className="text-muted-foreground text-lg mb-2">A verdade é simples:</p>
              <p className="font-heading font-bold text-xl md:text-2xl text-foreground mb-2">
                Não é falta de esforço…{" "}
                <span className="text-accent">é falta de estratégia.</span>
              </p>
              <p className="text-muted-foreground">
                E é exatamente isso que este eBook da SC Digital vai te mostrar.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* VSL */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <div className="relative bg-card border border-border rounded-2xl aspect-video flex items-center justify-center mb-8 overflow-hidden group cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent" />
              <div className="w-20 h-20 rounded-full bg-primary/20 flex items-center justify-center border-2 border-primary group-hover:scale-110 transition-transform">
                <Play className="w-8 h-8 text-primary ml-1" />
              </div>
            </div>
            <p className="text-foreground text-lg font-semibold mb-6">
              Assiste este vídeo até ao final e entende:
            </p>
            <div className="space-y-3 mb-8 text-left max-w-md mx-auto">
              {[
                "O erro que te impede de crescer",
                "Como começar mesmo do zero",
                "Como transformar visualizações em dinheiro",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                  <span className="text-secondary-foreground">{item}</span>
                </div>
              ))}
            </div>
            <CTAButton text="QUERO ACESSAR AGORA" />
          </motion.div>
        </div>
      </section>

      {/* BENEFÍCIOS */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-center mb-4">
              Com este eBook da SC Digital, vais aprender:
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Tudo explicado de forma simples, direta e prática.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { icon: TrendingUp, text: "Como crescer no TikTok do zero" },
                { icon: Lightbulb, text: "Ideias de conteúdo que realmente funcionam" },
                { icon: Users, text: "Como atrair seguidores certos" },
                { icon: DollarSign, text: "Estratégias simples para começar a vender" },
                { icon: Smartphone, text: "Como transformar o telemóvel numa fonte de renda" },
              ].map(({ icon: Icon, text }) => (
                <div
                  key={text}
                  className="flex items-center gap-4 bg-card border border-border rounded-xl p-5"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{text}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* PROVAS SOCIAIS */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-heading font-bold text-2xl md:text-4xl text-center mb-10">
              O que estão a dizer:
            </h2>
            <div className="grid md:grid-cols-3 gap-5">
              <TestimonialCard
                text="Eu não sabia nada… hoje já comecei a crescer e fiz minha primeira venda!"
                name="Ana M."
              />
              <TestimonialCard
                text="Muito direto ao ponto. Em poucos dias já vi diferença."
                name="Carlos T."
              />
              <TestimonialCard
                text="Finalmente entendi como ganhar dinheiro online."
                name="Joana R."
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* OFERTA */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-heading font-bold text-2xl md:text-4xl mb-4">
              Acesso completo ao método da SC Digital
            </h2>
            <p className="text-muted-foreground mb-8">
              Hoje tens acesso por um valor promocional:
            </p>
            <div className="bg-card border border-primary/30 rounded-2xl p-8 glow-primary mb-8">
              <p className="text-muted-foreground line-through text-xl mb-1">12.500 KZ</p>
              <p className="font-heading font-bold text-5xl md:text-6xl text-primary mb-2">5.000 KZ</p>
              <p className="text-accent font-semibold">Estás a poupar 7.500 KZ 🔥</p>
              <div className="mt-6 space-y-3 text-left max-w-xs mx-auto">
                {["Acesso imediato", "Conteúdo direto ao ponto", "Método ideal para iniciantes"].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-secondary-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href={CHECKOUT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta inline-block text-center animate-pulse-glow text-xl px-12"
                >
                  COMPRAR AGORA POR 5.000 KZ
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* GARANTIA */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <ShieldCheck className="w-16 h-16 text-primary mx-auto mb-4" />
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">Risco zero.</h2>
            <p className="text-muted-foreground text-lg">
              O maior risco é continuares sem agir e perder mais tempo sem resultados.
            </p>
          </motion.div>
        </div>
      </section>

      {/* URGÊNCIA */}
      <section className="section-padding bg-accent/5 border-y border-accent/20">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <Zap className="w-10 h-10 text-accent mx-auto mb-4" />
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Este preço é <span className="text-accent">promocional</span>
            </h2>
            <p className="text-muted-foreground mb-8">
              Pode voltar para 12.500 KZ a qualquer momento.
            </p>
            <CountdownTimer hours={1} minutes={59} seconds={59} />
            <div className="mt-8">
              <CTAButton text="GARANTIR MINHA VAGA" />
            </div>
          </motion.div>
        </div>
      </section>

      {/* FECHAMENTO */}
      <section className="section-padding">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <h2 className="font-heading font-bold text-2xl md:text-4xl mb-6">
              A pergunta é simples:
            </h2>
            <p className="text-muted-foreground text-xl mb-2">
              Vais continuar a ver os outros crescerem…
            </p>
            <p className="font-heading font-bold text-xl md:text-2xl text-primary mb-8">
              ou vais começar agora?
            </p>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 border-t border-border text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} SC Digital. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
