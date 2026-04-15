import { useEffect, useState } from "react";

interface CountdownTimerProps {
  hours?: number;
  minutes?: number;
  seconds?: number;
}

const CountdownTimer = ({ hours = 2, minutes = 0, seconds = 0 }: CountdownTimerProps) => {
  const [time, setTime] = useState(hours * 3600 + minutes * 60 + seconds);

  useEffect(() => {
    if (time <= 0) return;
    const interval = setInterval(() => setTime((t) => t - 1), 1000);
    return () => clearInterval(interval);
  }, [time]);

  const h = Math.floor(time / 3600);
  const m = Math.floor((time % 3600) / 60);
  const s = time % 60;

  const pad = (n: number) => n.toString().padStart(2, "0");

  return (
    <div className="flex items-center justify-center gap-3">
      {[
        { label: "Horas", value: pad(h) },
        { label: "Min", value: pad(m) },
        { label: "Seg", value: pad(s) },
      ].map((item) => (
        <div key={item.label} className="flex flex-col items-center">
          <div className="bg-secondary rounded-lg w-16 h-16 flex items-center justify-center border border-border">
            <span className="text-2xl font-heading font-bold text-primary">{item.value}</span>
          </div>
          <span className="text-xs text-muted-foreground mt-1">{item.label}</span>
        </div>
      ))}
    </div>
  );
};

export default CountdownTimer;
