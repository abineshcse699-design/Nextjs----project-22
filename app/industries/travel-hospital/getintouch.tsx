"use client";

import { useState } from "react";
import { ChevronDown, Upload, ArrowUpRight } from "lucide-react";
const CHAMPION_BLUE = "#1B2560";
const SECTION_HEADING =
  "font-heading font-medium leading-[1.15] text-[34px] sm:text-[40px] lg:text-[46px]";
const countries = [
  { name: "India", code: "+91" },
  { name: "USA", code: "+1" },
  { name: "UK", code: "+44" },
  { name: "Australia", code: "+61" },
  { name: "Canada", code: "+1" },
  { name: "Singapore", code: "+65" },
  { name: "UAE", code: "+971" },
];

export default function GetInTouch() {
  const [country, setCountry] = useState("India");
  const [fileName, setFileName] = useState("");

  const selectedCountry =
    countries.find((item) => item.name === country) ?? countries[0];

  return (
    <section
      id="connect"
      className="relative overflow-hidden bg-white py-20 sm:py-24 lg:py-28"
    >
      {/* LEFT BOTTOM GRADIENT */}
      <div
        className="
          pointer-events-none
          absolute -bottom-48 -left-48
          h-[600px] w-[600px]
          rounded-full
          blur-[100px]
          opacity-80
          bg-[radial-gradient(circle,rgba(164,143,234,0.55)_0%,rgba(236,231,251,0.45)_35%,transparent_72%)]
        "
      />

      <div
        className="
          relative mx-auto
          grid max-w-[1520px]
          grid-cols-1
          gap-12
          px-5
          sm:px-10
          lg:grid-cols-[380px_1fr]
          lg:gap-14
          lg:px-16
          xl:grid-cols-[420px_1fr]
        "
      >
        {/* =====================================================
            LEFT
        ===================================================== */}
     <div className="pt-1">
  <h2
    className={`${SECTION_HEADING} mt-4`}
    style={{ color: CHAMPION_BLUE }}
  >
    Get in Touch
  </h2>

          <p
            className="
              mt-7
              font-body
              text-[17px]
              leading-[1.45]
              text-[#1B2560]
              sm:text-[18px]
            "
          >
            Bring Your Digital Vision to Life
          </p>
        </div>

        {/* =====================================================
            RIGHT FORM
        ===================================================== */}
        <form className="w-full">
          {/* NAME + EMAIL */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <input
              type="text"
              name="name"
              placeholder="Name*"
              required
              className="
                h-[60px]
                w-full
                rounded-[13px]
                border
                border-transparent
                bg-[#ECEEF4]
                px-5
                font-body
                text-[13px]
                text-[#1B2560]
                outline-none
                placeholder:text-[#8490B3]
                transition-all
                duration-200
                hover:bg-[#E9EBF2]
                focus:border-[#A48FEA]
                focus:bg-[#F0F1F6]
                focus:ring-4
                focus:ring-[#A48FEA]/10
              "
            />

            <input
              type="email"
              name="email"
              placeholder="Email address*"
              required
              className="
                h-[60px]
                w-full
                rounded-[13px]
                border
                border-transparent
                bg-[#ECEEF4]
                px-5
                font-body
                text-[13px]
                text-[#1B2560]
                outline-none
                placeholder:text-[#8490B3]
                transition-all
                duration-200
                hover:bg-[#E9EBF2]
                focus:border-[#A48FEA]
                focus:bg-[#F0F1F6]
                focus:ring-4
                focus:ring-[#A48FEA]/10
              "
            />
          </div>

          {/* COUNTRY CODE LABEL */}
          <label
            htmlFor="country"
            className="
              mt-6
              mb-1.5
              block
              font-body
              text-[13px]
              font-medium
              text-[#1B2560]
            "
          >
            Country code*
          </label>

          {/* COUNTRY + PHONE + COMPANY */}
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-[150px_1fr]">
            {/* COUNTRY */}
            <div className="relative">
              <select
                id="country"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
                className="
                  h-[60px]
                  w-full
                  appearance-none
                  rounded-[13px]
                  border
                  border-transparent
                  bg-[#ECEEF4]
                  px-5
                  pr-10
                  font-body
                  text-[13px]
                  text-[#8490B3]
                  outline-none
                  transition-all
                  hover:bg-[#E9EBF2]
                  focus:border-[#A48FEA]
                  focus:ring-4
                  focus:ring-[#A48FEA]/10
                "
              >
                {countries.map((item) => (
                  <option key={item.name} value={item.name}>
                    {item.code}
                  </option>
                ))}
              </select>

              <ChevronDown
                size={18}
                className="
                  pointer-events-none
                  absolute
                  right-4
                  top-1/2
                  -translate-y-1/2
                  text-[#4F3FE0]
                "
              />
            </div>

            {/* PHONE */}
            <input
              type="tel"
              name="phone"
              required
              placeholder={`Phone number*`}
              className="
                h-[60px]
                w-full
                rounded-[13px]
                border
                border-transparent
                bg-[#ECEEF4]
                px-5
                font-body
                text-[13px]
                text-[#1B2560]
                outline-none
                placeholder:text-[#8490B3]
                transition-all
                hover:bg-[#E9EBF2]
                focus:border-[#A48FEA]
                focus:bg-[#F0F1F6]
                focus:ring-4
                focus:ring-[#A48FEA]/10
              "
            />
          </div>

          {/* COMPANY */}
          <input
            type="text"
            name="company"
            required
            placeholder="Company*"
            className="
              mt-5
              h-[60px]
              w-full
              rounded-[13px]
              border
              border-transparent
              bg-[#ECEEF4]
              px-5
              font-body
              text-[13px]
              text-[#1B2560]
              outline-none
              placeholder:text-[#8490B3]
              transition-all
              hover:bg-[#E9EBF2]
              focus:border-[#A48FEA]
              focus:bg-[#F0F1F6]
              focus:ring-4
              focus:ring-[#A48FEA]/10
            "
          />

          {/* OPPORTUNITY */}
          <textarea
            name="opportunity"
            required
            placeholder="Tell us about your opportunity*"
            className="
              mt-6
              min-h-[110px]
              w-full
              resize-y
              rounded-[13px]
              border
              border-transparent
              bg-[#ECEEF4]
              px-5
              py-4
              font-body
              text-[13px]
              leading-relaxed
              text-[#1B2560]
              outline-none
              placeholder:text-[#8490B3]
              transition-all
              hover:bg-[#E9EBF2]
              focus:border-[#A48FEA]
              focus:bg-[#F0F1F6]
              focus:ring-4
              focus:ring-[#A48FEA]/10
            "
          />

          {/* HOW DID YOU HEAR */}
          <div className="relative mt-6">
            <select
              required
              defaultValue=""
              name="source"
              className="
                h-[60px]
                w-full
                appearance-none
                rounded-[13px]
                border
                border-transparent
                bg-[#ECEEF4]
                px-5
                pr-14
                font-body
                text-[13px]
                text-[#8490B3]
                outline-none
                transition-all
                hover:bg-[#E9EBF2]
                focus:border-[#A48FEA]
                focus:ring-4
                focus:ring-[#A48FEA]/10
              "
            >
              <option value="" disabled>
                How did you hear about us?*
              </option>

              <option value="google">Google</option>
              <option value="linkedin">LinkedIn</option>
              <option value="referral">Referral</option>
              <option value="social-media">Social Media</option>
              <option value="event">Event / Conference</option>
              <option value="other">Other</option>
            </select>

            <ChevronDown
              size={20}
              className="
                pointer-events-none
                absolute
                right-5
                top-1/2
                -translate-y-1/2
                text-[#4F3FE0]
              "
            />
          </div>

      

          {/* =====================================================
              PRIVACY CHECKBOX
          ===================================================== */}
          <label className="mt-7 flex cursor-pointer items-start gap-3">
            <input
              type="checkbox"
              required
              className="
                mt-1
                h-6
                w-6
                flex-shrink-0
                cursor-pointer
                appearance-none
                rounded-[2px]
                border
                border-[#CBD2E2]
                bg-white
                checked:border-[#4F3FE0]
                checked:bg-[#4F3FE0]
                checked:ring-4
                checked:ring-inset
                checked:ring-white
              "
            />

            <span
              className="
                font-body
                text-[14px]
                leading-[1.45]
                text-[#1B2560]
                sm:text-[13px]
              "
            >
              By checking this box, you consent us to store and process the
              information provided in accordance with our{" "}
              <a
                href="/privacy-policy"
                className="underline underline-offset-2 hover:opacity-70"
              >
                Privacy Policy
              </a>
              .*
            </span>
          </label>

          {/* =====================================================
              SUBMIT
          ===================================================== */}
          <button
            type="submit"
            className="
              mt-7
              inline-flex
              items-center
              gap-3
              rounded-[15px]
              bg-[#9185E5]
              px-7
              py-4
              font-body
              text-[13px]
              font-medium
              text-white
              transition-all
              duration-300
              hover:-translate-y-0.5
              hover:bg-[#8275DC]
              hover:shadow-lg
              active:translate-y-0
            "
          >
            Submit

            <ArrowUpRight
              size={20}
              strokeWidth={1.8}
            />
          </button>
        </form>
      </div>
    </section>
  );
}