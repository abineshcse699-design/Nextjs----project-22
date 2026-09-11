"use client";

import { Poppins } from "next/font/google";
import { ArrowRight, Cloud, Cpu, Sparkles } from "lucide-react";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
});

const services = [
  {
    icon: Sparkles,
    title: "Generative AI",
    description:
      "Transform your workflows with intelligent, scalable AI/ML, GenAI and LLM solutions. From reducing manual tasks to enhancing efficiency, we deliver tailored automation that drives results.",
  },
  {
    icon: Cloud,
    title: "Cloud Engineering",
    description:
      "We build secure, high-performance cloud infrastructure with seamless DevOps integration and test automation, accelerating releases and delivering agility at scale.",
  },
  {
    icon: Cpu,
    title: "Product Engineering",
    description:
      "We design, develop, and deliver end-to-end enterprise and SaaS products, combining innovative technology and AI-powered frameworks to drive scalable growth and performance.",
  },
];

export default function GrowthSection() {
  return (
    <section
      className={`${poppins.className} relative overflow-hidden py-24 lg:py-28`}
      style={{
        background:
          "linear-gradient(135deg, #e9e9fb 0%, #dcdcf5 35%, #cfcdf0 70%, #d7d2ee 100%)",
      }}
    >
      <div
        className="
          mx-auto
          grid
          max-w-[1520px]
          grid-cols-1
          gap-12
          px-6
          sm:px-10
          lg:grid-cols-2
          lg:gap-16
          lg:px-16
        "
      >
        {/* Left column */}
        <div className="flex flex-col justify-start">
          <h2
            className="
              max-w-[600px]
              text-[36px]
              font-light
              leading-[1.15]
              tracking-[-0.02em]
              text-[#0b1747]
              sm:text-[42px]
              lg:text-[48px]
              xl:text-[52px]
            "
          >
            AI-Driven Software and Product Engineering, Built to Scale With
            You
          </h2>

          <p
            className="
              mt-6
              max-w-[520px]
              text-[16px]
              font-normal
              leading-[1.6]
              tracking-[-0.01em]
              text-[#3a3f5a]
              sm:text-[17px]
            "
          >
            Scalable, high-performance solutions customized for your
            business. From Generative AI and cloud engineering to
            enterprise product development, we deliver technology built for
            long-term success.
          </p>
        </div>

        {/* Right column - service cards */}
        <div className="flex flex-col gap-5">
          {services.map((service) => {
            const Icon = service.icon;
            return (
              <a
                key={service.title}
                href="#"
                className="
                  group
                  flex
                  items-start
                  gap-5
                  rounded-2xl
                  border
                  border-white/60
                  bg-white/70
                  p-6
                  shadow-sm
                  backdrop-blur-sm
                  transition-all
                  duration-300
                  hover:-translate-y-0.5
                  hover:bg-white/90
                  hover:shadow-md
                "
              >
                {/* Icon */}
                <div
                  className="
                    flex
                    h-12
                    w-12
                    shrink-0
                    items-center
                    justify-center
                    rounded-xl
                  "
                  style={{
                    background:
                      "linear-gradient(135deg, #dbeafe 0%, #bfdbfe 100%)",
                  }}
                >
                  <Icon className="h-6 w-6 text-[#2563eb]" strokeWidth={1.75} />
                </div>

                {/* Text */}
                <div className="flex-1">
                  <h3
                    className="
                      text-[19px]
                      font-medium
                      tracking-[-0.01em]
                      text-[#0b1747]
                    "
                  >
                    {service.title}
                  </h3>
                  <p
                    className="
                      mt-2
                      text-[15px]
                      font-normal
                      leading-[1.55]
                      text-[#4b4f68]
                    "
                  >
                    {service.description}
                  </p>
                </div>

                {/* Arrow */}
                <ArrowRight
                  className="
                    mt-1
                    h-5
                    w-5
                    shrink-0
                    text-[#2563eb]
                    transition-transform
                    duration-300
                    group-hover:translate-x-1
                  "
                  strokeWidth={1.75}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
}