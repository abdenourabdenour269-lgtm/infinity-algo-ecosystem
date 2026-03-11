"use client";

import { cn } from "@/lib/utils";
import { Calculator } from "lucide-react";

interface MathFormulaProps {
  name: string;
  formula: string;
  description?: string;
  variables?: { symbol: string; meaning: string }[];
  example?: string;
  className?: string;
}

export function MathFormula({
  name,
  formula,
  description,
  variables,
  example,
  className = "",
}: MathFormulaProps) {
  return (
    <div className={cn("formula-display", className)}>
      <div className="flex items-center gap-3 mb-3">
        <Calculator className="w-5 h-5 text-gold-400" />
        <h4 className="text-gold-400 font-serif text-lg">{name}</h4>
      </div>

      <div className="text-2xl md:text-3xl text-gold-100 font-serif tracking-wide my-4 text-center">
        {formula}
      </div>

      {description && (
        <p className="text-gold-300/70 text-sm mt-3">{description}</p>
      )}

      {variables && variables.length > 0 && (
        <div className="mt-4 pt-4 border-t border-gold-400/20">
          <h5 className="text-gold-400/80 text-xs uppercase tracking-wider mb-2">Variables:</h5>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {variables.map((variable, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <span className="text-gold-400 font-mono font-bold">{variable.symbol}</span>
                <span className="text-gold-300/60">=</span>
                <span className="text-gold-300/80">{variable.meaning}</span>
              </div>
            ))}
          </div>
        </div>
      )}

      {example && (
        <div className="mt-4 pt-4 border-t border-gold-400/20">
          <h5 className="text-gold-400/80 text-xs uppercase tracking-wider mb-2">Example:</h5>
          <p className="text-emerald-500 font-mono text-sm">{example}</p>
        </div>
      )}
    </div>
  );
}
