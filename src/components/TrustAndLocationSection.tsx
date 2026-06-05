import { motion } from "framer-motion";
import {
  CalendarDays,
  HeartHandshake,
  Home,
  Landmark,
  MapPin,
  ShieldCheck,
  Smile,
  TrendingUp,
  Users,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type PersonaCard = {
  title: string;
  description: string;
  icon: LucideIcon;
  className: string;
};

const personas: PersonaCard[] = [
  {
    title: "Investment Buyers",
    description:
      "Long-horizon buyers seeking scarce Florida acreage in expanding markets.",
    icon: TrendingUp,
    className: "lg:col-span-3",
  },
  {
    title: "Future Home Builders",
    description:
      "Families securing buildable homesites before neighborhood demand rises.",
    icon: Home,
    className: "lg:col-span-4",
  },
  {
    title: "Retirement Buyers",
    description:
      "Lifestyle-focused buyers planning peaceful ownership near Florida nature.",
    icon: HeartHandshake,
    className: "lg:col-span-3",
  },
];

const locations = ["Ocala", "Tampa Bay", "Naples", "St. Augustine"];

const cardAnimation = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

export function TrustAndLocationSection() {
  return (
    <section className="overflow-hidden bg-[#FEFAF6] px-4 pb-20 pt-6 text-[#3C2F2F] sm:px-6 lg:px-8 lg:pb-28">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.18 }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.06 }}
          className="grid auto-rows-[minmax(200px,auto)] grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:auto-rows-[210px]"
        >
          <motion.article
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.005 }}
            className="group relative isolate overflow-hidden rounded-[32px] bg-[#3C2F2F] p-6 text-white shadow-[0_28px_90px_rgba(60,47,47,0.18)] sm:p-8 lg:col-span-6 lg:row-span-2 lg:p-10"
          >
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_25%_20%,rgba(212,163,115,0.42),transparent_32%),radial-gradient(circle_at_76%_66%,rgba(88,129,87,0.56),transparent_28%),linear-gradient(135deg,#3C2F2F_0%,#4f3e34_52%,#588157_100%)]" />
            <div className="absolute inset-6 -z-10 rounded-[28px] border border-white/10 bg-white/5 backdrop-blur-sm" />
            <div className="absolute left-12 top-16 h-28 w-28 rounded-full bg-[#D4A373]/35 blur-3xl" />
            <div className="absolute bottom-10 right-8 h-40 w-40 rounded-full bg-[#FAEDCD]/15 blur-3xl" />

            <div className="relative flex min-h-[480px] flex-col justify-between gap-10">
              <div>
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-semibold text-[#FAEDCD] shadow-lg shadow-black/10 backdrop-blur-xl">
                  <MapPin className="h-4 w-4 text-[#D4A373]" />
                  Florida Locations Map
                </span>
                <p className="mt-6 text-sm font-semibold uppercase tracking-[0.22em] text-[#D4A373]">
                  Trust, Location & Buyer Personas
                </p>
                <h2 className="mt-8 max-w-xl font-serif text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl">
                  Florida locations mapped for confident land buyers.
                </h2>
              </div>

              <div className="grid gap-3 sm:grid-cols-2">
                {locations.map((location, index) => (
                  <div
                    key={location}
                    className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl"
                  >
                    <div className="mb-5 flex items-center justify-between">
                      <span className="text-sm font-semibold text-[#FAEDCD]">
                        {location}
                      </span>
                      <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#D4A373] text-xs font-bold text-[#3C2F2F]">
                        {index + 1}
                      </span>
                    </div>
                    <div className="h-1.5 rounded-full bg-white/15">
                      <div
                        className="h-full rounded-full bg-[#D4A373]"
                        style={{ width: `${58 + index * 10}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative overflow-hidden rounded-[28px] bg-[#FAEDCD] p-6 shadow-[0_24px_70px_rgba(60,47,47,0.10)] transition-shadow duration-300 hover:shadow-[0_28px_80px_rgba(60,47,47,0.16)] sm:p-7 lg:col-span-3"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#D4A373]/45 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#588157]">
                  Secure Transactions
                </p>
                <ShieldCheck className="h-7 w-7 text-[#588157]" />
              </div>
              <div>
                <p className="font-serif text-4xl font-semibold tracking-[-0.04em]">
                  Clear, guided closing.
                </p>
                <p className="mt-3 text-sm leading-6 text-[#3C2F2F]/70">
                  Verified ownership paths, transparent documents, and buyer
                  support from reservation through transfer.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative overflow-hidden rounded-[28px] bg-[#588157] p-6 text-white shadow-[0_24px_70px_rgba(88,129,87,0.2)] sm:p-7 lg:col-span-3"
          >
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#FAEDCD]/20 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#FAEDCD]">
                  Customer Satisfaction
                </p>
                <Smile className="h-7 w-7 text-[#FAEDCD]" />
              </div>
              <div>
                <p className="font-serif text-5xl font-semibold tracking-[-0.05em]">
                  97%
                </p>
                <p className="mt-3 text-sm leading-6 text-[#FAEDCD]/80">
                  Buyers value responsive guidance, premium parcel curation,
                  and a simplified ownership process.
                </p>
              </div>
            </div>
          </motion.article>

          {personas.map((persona, index) => {
            const Icon = persona.icon;

            return (
              <motion.article
                key={persona.title}
                variants={cardAnimation}
                transition={{
                  duration: 0.7,
                  ease: "easeOut",
                  delay: index * 0.03,
                }}
                whileHover={{ y: -6, scale: 1.015 }}
                className={`group relative overflow-hidden rounded-[28px] border border-white/80 bg-white/80 p-6 shadow-[0_22px_70px_rgba(60,47,47,0.08)] backdrop-blur transition-shadow duration-300 hover:shadow-[0_28px_80px_rgba(60,47,47,0.14)] sm:p-7 ${persona.className}`}
              >
                <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAEDCD]/80 to-transparent" />
                <div className="relative flex h-full flex-col justify-between gap-8">
                  <div className="flex items-start justify-between">
                    <div className="rounded-2xl bg-[#FEFAF6] p-3 text-[#588157] shadow-inner shadow-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <Users className="h-5 w-5 text-[#D4A373]" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-[#588157]">
                      {persona.title}
                    </p>
                    <p className="mt-3 text-sm leading-6 text-[#3C2F2F]/70">
                      {persona.description}
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
            className="relative overflow-hidden rounded-[28px] bg-[#3C2F2F] p-6 text-white shadow-[0_24px_70px_rgba(60,47,47,0.18)] sm:p-7 lg:col-span-5"
          >
            <div className="absolute -right-14 -top-14 h-44 w-44 rounded-full bg-[#D4A373]/30 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#FAEDCD]">
                  Years of Experience
                </p>
                <CalendarDays className="h-7 w-7 text-[#D4A373]" />
              </div>
              <div className="flex items-end justify-between gap-6">
                <div>
                  <p className="font-serif text-6xl font-semibold tracking-[-0.06em]">
                    12+
                  </p>
                  <p className="mt-3 max-w-sm text-sm leading-6 text-[#FAEDCD]/80">
                    Experience helping buyers evaluate Florida land through
                    market context, location insight, and closing guidance.
                  </p>
                </div>
                <Landmark className="hidden h-16 w-16 text-[#FAEDCD]/30 sm:block" />
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
