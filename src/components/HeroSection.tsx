import { motion } from "framer-motion";
import { ArrowRight, Home, Leaf, MapPin, TrendingUp } from "lucide-react";
import type { LucideIcon } from "lucide-react";

type StatCard = {
  label: string;
  value: string;
  detail: string;
  icon: LucideIcon;
  className: string;
};

const stats: StatCard[] = [
  {
    label: "Lots Available",
    value: "128",
    detail: "Curated homesites across high-growth Florida corridors.",
    icon: Home,
    className: "lg:col-span-3",
  },
  {
    label: "Acres Sold",
    value: "4,800+",
    detail: "Land placed with buyers seeking long-term upside.",
    icon: Leaf,
    className: "lg:col-span-2",
  },
];

const cardAnimation = {
  initial: { opacity: 0, y: 24 },
  animate: { opacity: 1, y: 0 },
};

export function HeroSection() {
  return (
    <section className="min-h-screen overflow-hidden bg-[#FEFAF6] px-4 py-6 text-[#3C2F2F] sm:px-6 lg:px-8">
      <div className="mx-auto flex min-h-[calc(100vh-3rem)] w-full max-w-7xl items-center">
        <motion.div
          initial="initial"
          animate="animate"
          transition={{ staggerChildren: 0.08, delayChildren: 0.08 }}
          className="grid w-full auto-rows-[minmax(190px,auto)] grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:auto-rows-[210px]"
        >
          <motion.article
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.005 }}
            className="group relative isolate flex min-h-[620px] overflow-hidden rounded-[32px] bg-[#3C2F2F] p-6 shadow-[0_28px_90px_rgba(60,47,47,0.18)] sm:p-8 lg:col-span-7 lg:row-span-3 lg:p-10"
          >
            <div
              className="absolute inset-0 -z-20 bg-cover bg-center transition duration-700 group-hover:scale-105"
              style={{
                backgroundImage:
                  "url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1600&q=85')",
              }}
            />
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(60,47,47,0.88)_0%,rgba(60,47,47,0.68)_45%,rgba(88,129,87,0.38)_100%)]" />
            <div className="absolute left-8 top-8 h-24 w-24 rounded-full bg-[#D4A373]/40 blur-3xl" />
            <div className="absolute bottom-10 right-10 h-40 w-40 rounded-full bg-[#FAEDCD]/20 blur-3xl" />

            <div className="flex max-w-2xl flex-col justify-between gap-12 text-white">
              <div>
                <motion.div
                  variants={cardAnimation}
                  className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-medium text-[#FAEDCD] shadow-lg shadow-black/10 backdrop-blur-xl"
                >
                  <span className="h-2 w-2 rounded-full bg-[#D4A373]" />
                  Florida land opportunities
                </motion.div>

                <motion.h1
                  variants={cardAnimation}
                  className="max-w-[12ch] font-serif text-5xl font-semibold leading-[0.95] tracking-[-0.04em] text-white sm:text-6xl lg:text-7xl"
                >
                  Own the next chapter of Florida land.
                </motion.h1>

                <motion.p
                  variants={cardAnimation}
                  className="mt-6 max-w-xl text-base leading-8 text-[#FAEDCD]/90 sm:text-lg"
                >
                  Discover premium homesites and acreage built for lifestyle,
                  legacy, and long-term investment growth in Florida's most
                  promising locations.
                </motion.p>
              </div>

              <motion.div
                variants={cardAnimation}
                className="flex flex-col gap-3 sm:flex-row"
              >
                <a
                  href="#available-lots"
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A373] px-6 py-4 text-sm font-semibold text-[#3C2F2F] shadow-[0_18px_50px_rgba(212,163,115,0.36)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e0b98e]"
                >
                  Explore lots
                  <ArrowRight className="h-4 w-4" />
                </a>
                <a
                  href="#investment-guide"
                  className="inline-flex items-center justify-center rounded-full border border-white/25 bg-white/10 px-6 py-4 text-sm font-semibold text-white backdrop-blur-xl transition duration-300 hover:-translate-y-0.5 hover:bg-white/20"
                >
                  View investment guide
                </a>
              </motion.div>
            </div>
          </motion.article>

          <motion.article
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative overflow-hidden rounded-[28px] bg-[#FAEDCD] p-6 shadow-[0_24px_70px_rgba(60,47,47,0.10)] transition-shadow duration-300 hover:shadow-[0_28px_80px_rgba(60,47,47,0.16)] sm:p-7 lg:col-span-5 lg:row-span-1"
          >
            <div className="absolute -right-12 -top-14 h-40 w-40 rounded-full bg-[#D4A373]/45 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-white/70 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-[#588157]">
                  Market signal
                </span>
                <TrendingUp className="h-7 w-7 text-[#588157]" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#588157]">
                  Investment Growth
                </p>
                <p className="mt-2 font-serif text-5xl font-semibold tracking-[-0.05em]">
                  18.6%
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-[#3C2F2F]/70">
                  Projected appreciation across selected Florida land markets
                  with expanding infrastructure and demand.
                </p>
              </div>
            </div>
          </motion.article>

          {stats.map((card, index) => {
            const Icon = card.icon;

            return (
              <motion.article
                key={card.label}
                variants={cardAnimation}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.03,
                }}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/80 bg-white/80 p-6 shadow-[0_22px_70px_rgba(60,47,47,0.08)] backdrop-blur transition-shadow duration-300 hover:shadow-[0_28px_80px_rgba(60,47,47,0.14)] sm:p-7 ${card.className}`}
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAEDCD]/80 to-transparent" />
                <div className="relative flex h-full flex-col justify-between gap-8">
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl bg-[#FEFAF6] p-3 text-[#588157] shadow-inner shadow-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <span className="rounded-full bg-[#FAEDCD]/80 px-3 py-1 text-xs font-semibold text-[#588157]">
                      2026
                    </span>
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#588157]">
                      {card.label}
                    </p>
                    <p className="mt-2 font-serif text-4xl font-semibold tracking-[-0.04em] sm:text-5xl">
                      {card.value}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#3C2F2F]/70">
                      {card.detail}
                    </p>
                  </div>
                </div>
              </motion.article>
            );
          })}

          <motion.article
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative overflow-hidden rounded-[28px] bg-[#588157] p-6 text-white shadow-[0_24px_70px_rgba(88,129,87,0.2)] sm:p-7 lg:col-span-5"
          >
            <div className="absolute -bottom-20 -left-20 h-56 w-56 rounded-full bg-[#FAEDCD]/20 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#FAEDCD]">
                  Florida Locations
                </p>
                <MapPin className="h-7 w-7 text-[#FAEDCD]" />
              </div>
              <div>
                <p className="font-serif text-5xl font-semibold tracking-[-0.05em]">
                  24
                </p>
                <p className="mt-2 text-sm leading-6 text-[#FAEDCD]/80">
                  Premium parcels near coastlines, cities, and nature preserves.
                </p>
              </div>
              <div className="grid grid-cols-2 gap-3 text-sm font-medium">
                {["Ocala", "Naples", "Tampa Bay", "St. Augustine"].map(
                  (location) => (
                    <div
                      key={location}
                      className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 backdrop-blur"
                    >
                      {location}
                    </div>
                  ),
                )}
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
