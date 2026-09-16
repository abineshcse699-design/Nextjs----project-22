"use client";

import { useState, type ReactElement } from "react";
import { Plus, Minus } from "lucide-react";
import type { Faq } from "./data";

const CHAMPION_BLUE = "#1B2560";
const INDIGO_CTA = "#4F3FE0";

export default function FaqAccordion({ faqs }: { faqs: Faq[] }): ReactElement {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="mt-10 flex flex-col gap-4">
      {faqs.map((faq, index) => {
        const isOpen = openIndex === index;

        return (
          <div
            key={faq.question}
            className="overflow-hidden rounded-2xl border bg-white transition-colors duration-300"
            style={{ borderColor: isOpen ? INDIGO_CTA : "#E5E1F5" }}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={`faq-panel-${index}`}
              onClick={() => setOpenIndex(isOpen ? null : index)}
              className="flex w-full items-center justify-between gap-6 px-7 py-6 text-left sm:px-8"
            >
              <span
                className="font-body text-[16px] font-semibold leading-snug sm:text-[17px]"
                style={{ color: isOpen ? INDIGO_CTA : CHAMPION_BLUE }}
              >
                {faq.question}
              </span>

              <span
                className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full transition-all duration-300"
                style={{
                  backgroundColor: isOpen ? "#E5E1F5" : INDIGO_CTA,
                  color: isOpen ? "#8B93A7" : "#FFFFFF",
                }}
              >
                {isOpen ? <Minus size={16} /> : <Plus size={16} />}
              </span>
            </button>

            <div
              id={`faq-panel-${index}`}
              className="grid transition-all duration-500 ease-out"
              style={{ gridTemplateRows: isOpen ? "1fr" : "0fr" }}
            >
              <div className="overflow-hidden">
                <p
                  className="font-body px-7 pb-7 text-[15px] leading-[1.75] text-slate-600 sm:px-8"
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