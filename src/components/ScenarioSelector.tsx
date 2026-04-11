"use client";

import { type Scenario } from "@/data/ranges";

interface ScenarioSelectorProps {
  scenarios: Scenario[];
  selectedId: string;
  onSelect: (id: string) => void;
}

export function ScenarioSelector({ scenarios, selectedId, onSelect }: ScenarioSelectorProps) {
  return (
    <div className="flex gap-1.5 flex-wrap justify-center" role="tablist">
      {scenarios.map((s) => (
        <button
          key={s.id}
          role="tab"
          aria-selected={selectedId === s.id}
          onClick={() => onSelect(s.id)}
          className="px-3 py-2 rounded-lg text-xs font-bold transition-all"
          style={{
            background: selectedId === s.id ? "#1e293b" : "#f1f5f9",
            color: selectedId === s.id ? "#fff" : "#334155",
          }}
        >
          <span>{s.name}</span>
          {s.description && (
            <span className="block text-[10px] font-normal opacity-70 mt-0.5">
              {s.description}
            </span>
          )}
        </button>
      ))}
    </div>
  );
}
