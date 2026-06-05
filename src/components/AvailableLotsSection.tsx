import { motion } from "framer-motion";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  CreditCard,
  DollarSign,
  Home,
  MapPin,
  TreePine,
  TrendingUp,
  Users,
} from "lucide-react";

const benefits = [
  "Population growth across major Florida corridors",
  "Rising demand for buildable land and private acreage",
  "Accessible investment opportunity with limited supply",
];

const propertyBenefits = [
  { label: "Residential use", icon: Home },
  { label: "Recreational use", icon: TreePine },
  { label: "Long-term appreciation", icon: TrendingUp },
];

const marketStats = [
  { label: "Growth percentage", value: "18.6%" },
  { label: "Lots available", value: "128" },
  { label: "Avg. land appreciation", value: "12.4%" },
];

const cardAnimation = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

export function AvailableLotsSection() {
  return (
    <section
      id="available-lots"
      className="overflow-hidden bg-[#FEFAF6] px-4 pb-20 pt-6 text-[#3C2F2F] sm:px-6 lg:px-8 lg:pb-28"
    >
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.06 }}
          className="grid auto-rows-[minmax(210px,auto)] grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:auto-rows-[220px]"
        >
          <motion.article
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.005 }}
            className="group relative isolate overflow-hidden rounded-[32px] bg-white shadow-[0_28px_90px_rgba(60,47,47,0.14)] lg:col-span-7 lg:row-span-2"
          >
            <div className="absolute inset-0 -z-20">
              <img
                src="https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1500&q=85"
                alt="Featured Florida lot with open green acreage"
                className="h-full w-full object-cover transition duration-700 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 -z-10 bg-[linear-gradient(135deg,rgba(60,47,47,0.84)_0%,rgba(60,47,47,0.58)_48%,rgba(212,163,115,0.28)_100%)]" />
            <div className="absolute bottom-8 right-8 h-44 w-44 rounded-full bg-[#D4A373]/30 blur-3xl" />

            <div className="flex min-h-[520px] flex-col justify-between p-6 text-white sm:p-8 lg:p-10">
              <div className="flex flex-wrap items-center gap-3">
                <span className="rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-semibold text-[#FAEDCD] backdrop-blur-xl">
                  Featured Available Lots
                </span>
                <span className="rounded-full bg-[#D4A373] px-4 py-2 text-sm font-semibold text-[#3C2F2F] shadow-[0_18px_50px_rgba(212,163,115,0.32)]">
                  Ready to reserve
                </span>
              </div>

              <div className="max-w-xl">
                <p className="font-serif text-5xl font-semibold tracking-[-0.05em] sm:text-6xl">
                  Palm Ridge Estates
                </p>
                <div className="mt-6 grid gap-3 sm:grid-cols-3">
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                    <DollarSign className="mb-3 h-5 w-5 text-[#D4A373]" />
                    <p className="text-xs uppercase tracking-[0.18em] text-[#FAEDCD]/75">
                      Price
                    </p>
                    <p className="mt-1 text-xl font-semibold">$42,900</p>
                  </div>
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                    <TreePine className="mb-3 h-5 w-5 text-[#D4A373]" />
                    <p className="text-xs uppercase tracking-[0.18em] text-[#FAEDCD]/75">
                      Acreage
                    </p>
                    <p className="mt-1 text-xl font-semibold">1.25 acres</p>
                  </div>
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                    <MapPin className="mb-3 h-5 w-5 text-[#D4A373]" />
                    <p className="text-xs uppercase tracking-[0.18em] text-[#FAEDCD]/75">
                      Location
                    </p>
                    <p className="mt-1 text-xl font-semibold">Ocala, FL</p>
                  </div>
                </div>
                <a
                  href="#financing-options"
                  className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A373] px-6 py-4 text-sm font-semibold text-[#3C2F2F] shadow-[0_18px_50px_rgba(212,163,115,0.36)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e0b98e]"
                >
                  View lot details
                  <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative overflow-hidden rounded-[28px] bg-[#FAEDCD] p-6 shadow-[0_24px_70px_rgba(60,47,47,0.10)] transition-shadow duration-300 hover:shadow-[0_28px_80px_rgba(60,47,47,0.16)] sm:p-7 lg:col-span-5"
          >
            <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#D4A373]/45 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#588157]">
                  Why Invest in Florida
                </p>
                <Users className="h-7 w-7 text-[#588157]" />
              </div>
              <div className="space-y-3">
                {benefits.map((benefit) => (
                  <div
                    key={benefit}
                    className="flex gap-3 rounded-2xl bg-white/60 p-3 text-sm font-medium leading-6 text-[#3C2F2F]/75"
                  >
                    <CheckCircle2 className="mt-0.5 h-4 w-4 flex-none text-[#588157]" />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="group relative overflow-hidden rounded-[28px] border border-white/80 bg-white/80 p-6 shadow-[0_22px_70px_rgba(60,47,47,0.08)] backdrop-blur transition-shadow duration-300 hover:shadow-[0_28px_80px_rgba(60,47,47,0.14)] sm:p-7 lg:col-span-3"
          >
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAEDCD]/80 to-transparent" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div>
                <p className="text-sm font-semibold text-[#588157]">
                  Property Benefits
                </p>
                <p className="mt-3 font-serif text-4xl font-semibold tracking-[-0.04em]">
                  Built for flexible ownership.
                </p>
              </div>
              <div className="space-y-3">
                {propertyBenefits.map((benefit) => {
                  const Icon = benefit.icon;

                  return (
                    <div
                      key={benefit.label}
                      className="flex items-center gap-3 rounded-2xl bg-[#FEFAF6] px-4 py-3 text-sm font-semibold text-[#3C2F2F]/75"
                    >
                      <Icon className="h-5 w-5 text-[#588157]" />
                      {benefit.label}
                    </div>
                  );
                })}
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="relative overflow-hidden rounded-[28px] bg-[#3C2F2F] p-6 text-white shadow-[0_24px_70px_rgba(60,47,47,0.18)] sm:p-7 lg:col-span-4"
          >
            <div className="absolute -bottom-16 -right-12 h-48 w-48 rounded-full bg-[#588157]/50 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#FAEDCD]">
                  Market Statistics
                </p>
                <BarChart3 className="h-7 w-7 text-[#D4A373]" />
              </div>
              <div className="grid gap-3">
                {marketStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/10 px-4 py-3 backdrop-blur"
                  >
                    <span className="text-sm text-[#FAEDCD]/75">
                      {stat.label}
                    </span>
                    <span className="font-serif text-2xl font-semibold">
                      {stat.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            id="financing-options"
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative overflow-hidden rounded-[28px] bg-[#588157] p-6 text-white shadow-[0_24px_70px_rgba(88,129,87,0.2)] sm:p-7 lg:col-span-5"
          >
            <div className="absolute -left-16 -top-16 h-48 w-48 rounded-full bg-[#FAEDCD]/20 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#FAEDCD]">
                  Financing Options
                </p>
                <CreditCard className="h-7 w-7 text-[#FAEDCD]" />
              </div>
              <div>
                <p className="font-serif text-5xl font-semibold tracking-[-0.05em]">
                  $499 down
                </p>
                <p className="mt-3 max-w-sm text-sm leading-6 text-[#FAEDCD]/80">
                  Flexible payments and low entry investment options designed
                  for land buyers building a long-term position.
                </p>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
