import { useState } from "react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Logo } from "./Logo";

export function Navbar() {
  const { scrollY } = useScroll();
  const [hasScrolled, setHasScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setHasScrolled(latest > 16);
  });

  return (
    <motion.header
      initial={{ opacity: 0, y: -18 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="sticky top-0 z-50 px-4 pt-4 sm:px-6 lg:px-8"
    >
      <motion.div
        animate={{
          backgroundColor: hasScrolled
            ? "rgba(254, 250, 246, 0.78)"
            : "rgba(254, 250, 246, 0)",
          boxShadow: hasScrolled
            ? "0 22px 70px rgba(60, 47, 47, 0.12)"
            : "0 0 0 rgba(60, 47, 47, 0)",
          borderColor: hasScrolled
            ? "rgba(255, 255, 255, 0.82)"
            : "rgba(255, 255, 255, 0)",
        }}
        transition={{ duration: 0.35, ease: "easeOut" }}
        className="mx-auto flex w-full max-w-7xl items-center justify-between gap-2 rounded-[28px] border px-2 py-3 backdrop-blur-xl sm:gap-5 sm:px-4"
      >
        <div aria-label="PalmLand" className="rounded-2xl">
          <Logo />
        </div>

        <a
          href="#contact"
          className="group inline-flex items-center justify-center gap-1.5 rounded-full bg-[#D4A373] px-3 py-3 text-[11px] font-semibold text-[#3C2F2F] shadow-[0_18px_50px_rgba(212,163,115,0.28)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e0b98e] focus-visible:outline-none focus-visible:ring-4 focus-visible:ring-[#D4A373]/30 sm:gap-2 sm:px-6 sm:py-4 sm:text-sm"
        >
          Get Lot Information
          <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
        </a>
      </motion.div>
    </motion.header>
  );
}
