"use client";

import { type PositionData } from "@/data/ranges";

interface PositionSelectorProps {
  positions: PositionData[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function PositionSelector({ positions, selectedId, onSelect }: PositionSelectorProps) {
  return (
    <div className="flex gap-1.5 flex-wrap justify-center" role="tablist">
      {positions.map((pos) => (
        <button
          key={pos.id}
          role="tab"
          aria-selected={selectedId === pos.id}
          onClick={() => onSelect(pos.id)}
          className="px-4 py-2.5 rounded-lg font-bold text-sm transition-all"
          style={{
            background: selectedId === pos.id ? pos.badgeColor : "#e2e8f0",
            color: selectedId === pos.id ? "#fff" : "#475569",
            boxShadow: selectedId === pos.id ? `0 2px 8px ${pos.badgeColor}66` : "none",
          }}
        >
          {pos.shortName}
        </button>
      ))}
    </div>
  );
}
