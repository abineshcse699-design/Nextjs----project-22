"use client";

// app/services/freshService/capbilities/FaqAccordion.tsx
// Same accordion, tokens and type scale as the Software & Product
// Engineering / Data & Analytics capability FAQ.

import { useState, type ReactElement } from "react";
import { Plus, Minus } from "lucide-react";
import type { Faq } from "./data";

const CHAMPION_BLUE = "#1B2560";
const LAVENDER_ACCENT = "#A48FEA";
const INDIGO_CTA = "#4F3FE0";

export default function FaqAccordion({ faqs }: { faqs: Faq[] }): ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <div className="flex flex-col gap-4">
      {faqs.map((faq, i) => {
        const isOpen = openIndex === i;

        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-xl bg-white transition-shadow duration-300 hover:shadow-[0_10px_30px_rgba(27,37,96,0.08)]"
            style={{
              border: `1px solid ${isOpen ? LAVENDER_ACCENT : "#E8EAF2"}`,
            }}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${i}`}
              id={`faq-button-${i}`}
              onClick={() => setOpenIndex(isOpen ? null : i)}
              className="flex w-full items-center justify-between gap-6 px-6 py-6 text-left sm:px-10"
            >
              <span
                className="font-body text-[16px] font-medium leading-snug sm:text-[18px]"
                style={{ color: CHAMPION_BLUE }}
              >
                {faq.question}
              </span>

              <span
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-white transition-transform duration-300"
                style={{
                  backgroundColor: INDIGO_CTA,
                  transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                }}
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>

            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-button-${i}`}
              className="grid transition-all duration-500 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className="font-body px-6 pb-7 text-[15px] leading-[1.8] text-slate-600 transition-opacity duration-500 sm:px-10 sm:text-[16px]"
                  style={{ opacity: isOpen ? 1 : 0 }}
                >
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}