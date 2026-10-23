import { motion } from "framer-motion";
import {
  CheckCircle,
  TrendingUp,
  Eye,
  DollarSign,
  Smartphone,
  Lightbulb,
  Users,
  BookOpen,
  HelpCircle,
  Play,
} from "lucide-react";
import ebookCover from "@/assets/ebook-cover.png";
import CTAButton from "@/components/CTAButton";
import TestimonialCard from "@/components/TestimonialCard";

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const fadeInView = (delay = 0) => ({
  initial: "hidden" as const,
  whileInView: "visible" as const,
  viewport: { once: true, margin: "-40px" },
  variants: { ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay } } },
});

const Index = () => {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* TOPO — identificação + promessa */}
      <section className="section-padding relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <motion.p initial="hidden" animate="visible" variants={fadeUp} className="text-primary font-heading font-semibold tracking-widest text-sm mb-4">
            SC DIGITAL APRESENTA
          </motion.p>
          <motion.h1
            initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.1 } } }}
            className="font-heading font-bold text-3xl md:text-5xl leading-tight mb-6"
          >
            Como crescer no TikTok e fazer as{" "}
            <span className="text-gradient-primary">primeiras vendas do zero</span>
          </motion.h1>
          <motion.p
            initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.2 } } }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-3"
          >
            Um <strong className="text-foreground">eBook digital</strong> da SC Digital que ensina uma estratégia
            simples para criar conteúdo no TikTok e começar a divulgar produtos — mesmo sem experiência,
            sem seguidores e usando apenas o telemóvel.
          </motion.p>
          <motion.div initial="hidden" animate="visible" variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.6, delay: 0.3 } } }} className="mb-8">
            <CTAButton />
            <p className="text-muted-foreground text-sm mt-3">
              Pagamento no checkout seguro · Acesso imediato após a compra
            </p>
          </motion.div>
          <motion.img
            src={ebookCover}
            alt="Capa do eBook da SC Digital: Como crescer no TikTok e fazer as primeiras vendas do zero"
            className="mx-auto w-full max-w-xs md:max-w-sm glow-primary rounded-2xl"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            width={400}
            height={512}
          />
        </div>
      </section>

      {/* VSL */}
      <section className="py-16 md:py-24 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div {...fadeInView()}>
            <p className="font-heading font-bold text-xl md:text-2xl text-foreground mb-8">
              Assiste antes de continuar
            </p>
            <div className="relative bg-card border-2 border-primary/20 rounded-2xl overflow-hidden mb-10 aspect-video shadow-2xl shadow-primary/10">
              <video
                className="w-full h-full object-cover"
                controls
                poster={ebookCover}
                preload="metadata"
                playsInline
              >
                <source src="/vsl-video.mp4" type="video/mp4" />
                O teu navegador não suporta a reprodução de vídeo.
              </video>
            </div>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* PARA QUEM É */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInView()}>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-center mb-4">
              Para quem é este eBook?
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Foi escrito para quem está a começar do zero.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { icon: BookOpen, text: "Estás a começar e queres um caminho claro, sem informação confusa." },
                { icon: Smartphone, text: "Só tens o telemóvel — e isso é suficiente para começar." },
                { icon: Users, text: "Ainda não tens seguidores e queres aprender a atrair os certos." },
                { icon: DollarSign, text: "Queres saber, passo a passo, como começar a divulgar produtos." },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-foreground">{text}</span>
                </div>
              ))}
            </div>
            <p className="text-muted-foreground text-center mt-8">
              Não precisas de experiência anterior nem de conhecimentos técnicos.{" "}
              <span className="text-foreground">Precisas apenas de um telemóvel e de aplicar o método.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* O QUE VAS APRENDER */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInView()}>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-center mb-4">
              O que vais aprender
            </h2>
            <p className="text-muted-foreground text-center mb-10">
              Tudo explicado de forma simples, direta e prática.
            </p>
            <div className="grid md:grid-cols-2 gap-5">
              {[
                { icon: TrendingUp, text: "Como crescer no TikTok a partir do zero, com uma estratégia clara" },
                { icon: Lightbulb, text: "Que tipo de conteúdo criar e como encontrar ideias que funcionam" },
                { icon: Eye, text: "Como atrair seguidores realmente interessados no que publicas" },
                { icon: DollarSign, text: "Estratégias simples para começar a divulgar e vender produtos" },
                { icon: Smartphone, text: "Como organizar a tua rotina de conteúdo usando apenas o telemóvel" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-4 bg-card border border-border rounded-xl p-5">
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

      {/* PRÉVIA DO PRODUTO */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-3xl mx-auto">
          <motion.div {...fadeInView()}>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-center mb-10">
              O que vais receber
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-8 bg-card border border-border rounded-2xl p-6 md:p-10">
              <img
                src={ebookCover}
                alt="Capa do eBook da SC Digital: Como crescer no TikTok e fazer as primeiras vendas do zero"
                className="w-48 md:w-56 rounded-xl shrink-0 glow-primary"
                width={224}
                height={288}
              />
              <div className="text-center md:text-left">
                <p className="font-heading font-bold text-xl mb-3">
                  eBook digital da SC Digital
                </p>
                <p className="text-muted-foreground mb-6">
                  Um guia direto ao ponto, pensado para iniciantes: da estratégia de conteúdo até às
                  primeiras formas de vender no TikTok.
                </p>
                <div className="space-y-3 text-left max-w-sm mx-auto md:mx-0">
                  {["Acesso imediato após o pagamento", "Leitura no telemóvel ou computador", "Conteúdo direto, ideal para iniciantes"].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                      <span className="text-secondary-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SOBRE A SC DIGITAL */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeInView()}>
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Sobre a SC Digital
            </h2>
            <p className="text-muted-foreground text-lg">
              A SC Digital é uma plataforma focada em ensinar estratégias práticas para crescer no
              digital e gerar as primeiras vendas online — com um método simples, feito para quem
              está a começar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* PROVA SOCIAL */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-4xl mx-auto">
          <motion.div {...fadeInView()}>
            <h2 className="font-heading font-bold text-2xl md:text-3xl text-center mb-10">
              O que os leitores estão a dizer
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

      {/* PREÇO E OFERTA */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeInView()}>
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Preço
            </h2>
            <p className="text-muted-foreground mb-8">
              Acesso completo ao eBook da SC Digital por um valor promocional:
            </p>
            <div className="bg-card border border-primary/30 rounded-2xl p-8 glow-primary mb-8">
              <p className="text-muted-foreground line-through text-xl mb-1">12.500 KZ</p>
              <p className="font-heading font-bold text-5xl md:text-6xl text-primary mb-2">5.000 KZ</p>
              <p className="text-accent font-semibold">Estás a poupar 7.500 KZ</p>
              <div className="mt-6 space-y-3 text-left max-w-xs mx-auto">
                {[
                  "O eBook completo em formato digital",
                  "Acesso imediato após o pagamento",
                  "Conteúdo direto ao ponto, ideal para iniciantes",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-primary shrink-0" />
                    <span className="text-secondary-foreground">{item}</span>
                  </div>
                ))}
              </div>
              <div className="mt-8">
                <a
                  href="https://pay.kambafy.com/checkout/899de5b8-ad76-4c01-9c63-696845659f8f"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-cta inline-block text-center text-lg px-8"
                >
                  Comprar o eBook por 5.000 KZ
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* PERGUNTAS FREQUENTES */}
      <section className="section-padding bg-secondary/30">
        <div className="max-w-2xl mx-auto">
          <motion.div {...fadeInView()}>
            <div className="flex items-center justify-center gap-3 mb-8">
              <HelpCircle className="w-6 h-6 text-primary" />
              <h2 className="font-heading font-bold text-2xl md:text-3xl text-center">
                Perguntas frequentes
              </h2>
            </div>
            <div className="space-y-4">
              {[
                {
                  q: "O que vou receber depois de comprar?",
                  a: "O eBook digital da SC Digital, com acesso imediato após a conclusão do pagamento.",
                },
                {
                  q: "Como funciona o pagamento?",
                  a: "Ao clicar no botão, és encaminhado para o checkout seguro da Kambafy, onde podes concluir a compra e receber o acesso ao eBook.",
                },
                {
                  q: "Preciso de experiência ou seguidores para começar?",
                  a: "Não. O eBook foi escrito para iniciantes: parte do zero e explica cada passo de forma simples.",
                },
                {
                  q: "O que preciso para aplicar o método?",
                  a: "Um telemóvel e vontade de aplicar a estratégia. Todo o processo foi pensado para quem começa sem equipamento especial.",
                },
              ].map(({ q, a }) => (
                <div key={q} className="bg-card border border-border rounded-xl p-5">
                  <p className="font-heading font-semibold text-foreground mb-2">{q}</p>
                  <p className="text-muted-foreground">{a}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CHAMADA FINAL */}
      <section className="section-padding">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div {...fadeInView()}>
            <Play className="w-10 h-10 text-primary mx-auto mb-4" />
            <h2 className="font-heading font-bold text-2xl md:text-3xl mb-4">
              Pronto para começar?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Se queres aprender uma estratégia clara para crescer no TikTok e começar a divulgar
              produtos, o próximo passo está aqui.
            </p>
            <CTAButton />
          </motion.div>
        </div>
      </section>

      {/* RODAPÉ */}
      <footer className="py-8 border-t border-border text-center">
        <p className="text-muted-foreground text-sm">
          © {new Date().getFullYear()} SC Digital. Todos os direitos reservados.
        </p>
      </footer>
    </div>
  );
};

export default Index;
