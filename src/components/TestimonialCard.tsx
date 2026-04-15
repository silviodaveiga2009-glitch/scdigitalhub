import { Star } from "lucide-react";

interface TestimonialCardProps {
  text: string;
  name: string;
}

const TestimonialCard = ({ text, name }: TestimonialCardProps) => (
  <div className="bg-card border border-border rounded-xl p-6 flex flex-col gap-3">
    <div className="flex gap-1">
      {[...Array(5)].map((_, i) => (
        <Star key={i} className="w-4 h-4 fill-primary text-primary" />
      ))}
    </div>
    <p className="text-foreground italic">"{text}"</p>
    <p className="text-muted-foreground text-sm">— {name}</p>
  </div>
);

export default TestimonialCard;
