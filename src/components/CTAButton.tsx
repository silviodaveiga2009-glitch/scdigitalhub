const CHECKOUT_URL = "https://pay.kambafy.com/checkout/899de5b8-ad76-4c01-9c63-696845659f8f";

interface CTAButtonProps {
  text?: string;
  className?: string;
}

const CTAButton = ({ text = "QUERO COMEÇAR AGORA", className = "" }: CTAButtonProps) => (
  <a
    href={CHECKOUT_URL}
    target="_blank"
    rel="noopener noreferrer"
    className={`btn-cta inline-block text-center animate-pulse-glow ${className}`}
  >
    {text}
  </a>
);

export default CTAButton;
