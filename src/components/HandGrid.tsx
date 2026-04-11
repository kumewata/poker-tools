"use client";

import { getHandName, type ActionRange } from "@/data/ranges";

interface HandGridProps {
  ranges: ActionRange[];
}

export function HandGrid({ ranges }: HandGridProps) {
  const lookup: Record<string, string> = {};
  for (const { hands, color } of ranges) {
    for (const h of hands) {
      lookup[h] = color;
    }
  }

  return (
    <div className="inline-block leading-none">
      {Array.from({ length: 13 }, (_, r) => (
        <div key={r} className="flex gap-px mb-px">
          {Array.from({ length: 13 }, (_, c) => {
            const h = getHandName(r, c);
            const bg = lookup[h];
            const isPair = r === c;
            return (
              <div
                key={c}
                className="flex items-center justify-center font-mono font-bold select-none rounded-sm"
                style={{
                  width: "clamp(20px, 6.5vw, 32px)",
                  height: "clamp(16px, 5vw, 26px)",
                  fontSize: "clamp(6px, 1.8vw, 10px)",
                  background: bg || (isPair ? "#b0bec5" : "#cfd8e3"),
                  color: bg ? "#fff" : isPair ? "#546e7a" : "#90a4ae",
                }}
              >
                {h}
              </div>
            );
          })}
        </div>
      ))}
    </div>
  );
}
