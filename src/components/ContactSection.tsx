import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
} from "lucide-react";

const cardAnimation = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
};

export function ContactSection() {
  return (
    <section className="overflow-hidden bg-[#FEFAF6] px-4 pb-10 pt-6 text-[#3C2F2F] sm:px-6 lg:px-8 lg:pb-16">
      <div className="mx-auto w-full max-w-7xl">
        <motion.div
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true, amount: 0.16 }}
          transition={{ staggerChildren: 0.08, delayChildren: 0.06 }}
          className="grid auto-rows-[minmax(190px,auto)] grid-cols-1 gap-4 sm:gap-5 lg:grid-cols-12 lg:auto-rows-[210px]"
        >
          <motion.article
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.005 }}
            className="relative isolate overflow-hidden rounded-[32px] bg-[#3C2F2F] p-6 text-white shadow-[0_28px_90px_rgba(60,47,47,0.18)] sm:p-8 lg:col-span-8 lg:row-span-3 lg:p-10"
          >
            <div className="absolute inset-0 -z-20 bg-[radial-gradient(circle_at_18%_18%,rgba(212,163,115,0.45),transparent_30%),radial-gradient(circle_at_82%_74%,rgba(88,129,87,0.55),transparent_34%),linear-gradient(135deg,#3C2F2F_0%,#4a382f_54%,#588157_100%)]" />
            <div className="absolute left-8 top-8 h-28 w-28 rounded-full bg-[#D4A373]/35 blur-3xl" />
            <div className="absolute bottom-8 right-8 h-52 w-52 rounded-full bg-[#FAEDCD]/15 blur-3xl" />

            <div className="relative grid min-h-[620px] gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
              <div className="flex flex-col justify-between gap-10">
                <div>
                  <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/15 px-4 py-2 text-sm font-semibold text-[#FAEDCD] shadow-lg shadow-black/10 backdrop-blur-xl">
                    <MessageSquare className="h-4 w-4 text-[#D4A373]" />
                    Final CTA
                  </span>
                  <h2 className="mt-8 max-w-xl font-serif text-5xl font-semibold leading-[0.96] tracking-[-0.05em] sm:text-6xl">
                    Reserve your Florida land opportunity.
                  </h2>
                  <p className="mt-6 max-w-lg text-base leading-8 text-[#FAEDCD]/90 sm:text-lg">
                    Tell us what you are looking for and a land specialist will
                    help match you with available lots, financing paths, and
                    location guidance.
                  </p>
                </div>

                <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-1">
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4A373]">
                      Lead priority
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#FAEDCD]/80">
                      High-intent buyer requests are reviewed first for current
                      inventory availability.
                    </p>
                  </div>
                  <div className="rounded-3xl border border-white/15 bg-white/10 p-4 backdrop-blur-xl">
                    <p className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D4A373]">
                      No pressure
                    </p>
                    <p className="mt-2 text-sm leading-6 text-[#FAEDCD]/80">
                      Get clear answers on pricing, acreage, location, and next
                      steps before making a decision.
                    </p>
                  </div>
                </div>
              </div>

              <form
                onSubmit={(event) => event.preventDefault()}
                className="rounded-[28px] border border-white/15 bg-white/95 p-4 text-[#3C2F2F] shadow-[0_24px_70px_rgba(0,0,0,0.16)] backdrop-blur-xl sm:p-5"
              >
                <div className="grid gap-3 sm:grid-cols-2">
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#3C2F2F]/80">
                      Name
                    </span>
                    <input
                      type="text"
                      name="name"
                      placeholder="Your name"
                      className="w-full rounded-2xl border border-[#FAEDCD] bg-[#FEFAF6] px-4 py-3 text-sm text-[#3C2F2F] outline-none transition duration-300 placeholder:text-[#3C2F2F]/40 focus:border-[#D4A373] focus:ring-4 focus:ring-[#D4A373]/20"
                    />
                  </label>
                  <label className="block">
                    <span className="mb-2 block text-sm font-semibold text-[#3C2F2F]/80">
                      Email
                    </span>
                    <input
                      type="email"
                      name="email"
                      placeholder="you@example.com"
                      className="w-full rounded-2xl border border-[#FAEDCD] bg-[#FEFAF6] px-4 py-3 text-sm text-[#3C2F2F] outline-none transition duration-300 placeholder:text-[#3C2F2F]/40 focus:border-[#D4A373] focus:ring-4 focus:ring-[#D4A373]/20"
                    />
                  </label>
                </div>
                <label className="mt-3 block">
                  <span className="mb-2 block text-sm font-semibold text-[#3C2F2F]/80">
                    Phone
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="(555) 000-0000"
                    className="w-full rounded-2xl border border-[#FAEDCD] bg-[#FEFAF6] px-4 py-3 text-sm text-[#3C2F2F] outline-none transition duration-300 placeholder:text-[#3C2F2F]/40 focus:border-[#D4A373] focus:ring-4 focus:ring-[#D4A373]/20"
                  />
                </label>
                <label className="mt-3 block">
                  <span className="mb-2 block text-sm font-semibold text-[#3C2F2F]/80">
                    Message
                  </span>
                  <textarea
                    name="message"
                    rows={5}
                    placeholder="Tell us about your preferred location, budget, or timeline."
                    className="w-full resize-none rounded-2xl border border-[#FAEDCD] bg-[#FEFAF6] px-4 py-3 text-sm text-[#3C2F2F] outline-none transition duration-300 placeholder:text-[#3C2F2F]/40 focus:border-[#D4A373] focus:ring-4 focus:ring-[#D4A373]/20"
                  />
                </label>
                <button
                  type="submit"
                  className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-full bg-[#D4A373] px-6 py-4 text-sm font-semibold text-[#3C2F2F] shadow-[0_18px_50px_rgba(212,163,115,0.36)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e0b98e]"
                >
                  Request lot options
                  <ArrowRight className="h-4 w-4" />
                </button>
              </form>
            </div>
          </motion.article>

          <motion.article
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative overflow-hidden rounded-[28px] bg-[#FAEDCD] p-6 shadow-[0_24px_70px_rgba(60,47,47,0.10)] transition-shadow duration-300 hover:shadow-[0_28px_80px_rgba(60,47,47,0.16)] sm:p-7 lg:col-span-4"
          >
            <div className="absolute -right-12 -top-12 h-40 w-40 rounded-full bg-[#D4A373]/45 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#588157]">
                  Contact Information
                </p>
                <Mail className="h-7 w-7 text-[#588157]" />
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-3 text-sm font-semibold text-[#3C2F2F]/75">
                  <Phone className="h-4 w-4 text-[#588157]" />
                  (888) 555-LAND
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-3 text-sm font-semibold text-[#3C2F2F]/75">
                  <Mail className="h-4 w-4 text-[#588157]" />
                  hello@floridalots.com
                </div>
                <div className="flex items-center gap-3 rounded-2xl bg-white/60 p-3 text-sm font-semibold text-[#3C2F2F]/75">
                  <MapPin className="h-4 w-4 text-[#588157]" />
                  Serving premium Florida land markets
                </div>
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.015 }}
            className="relative overflow-hidden rounded-[28px] border border-white/80 bg-white/80 p-6 shadow-[0_22px_70px_rgba(60,47,47,0.08)] backdrop-blur transition-shadow duration-300 hover:shadow-[0_28px_80px_rgba(60,47,47,0.14)] sm:p-7 lg:col-span-2"
          >
            <div className="absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#FAEDCD]/80 to-transparent" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="rounded-2xl bg-[#FEFAF6] p-3 text-[#588157] shadow-inner shadow-white">
                <Clock3 className="h-6 w-6" />
              </div>
              <div>
                <p className="text-sm font-semibold text-[#588157]">
                  Response Time
                </p>
                <p className="mt-2 font-serif text-5xl font-semibold tracking-[-0.05em]">
                  24h
                </p>
                <p className="mt-3 text-sm leading-6 text-[#3C2F2F]/70">
                  Fast follow-up from a land specialist.
                </p>
              </div>
            </div>
          </motion.article>

          <motion.article
            variants={cardAnimation}
            transition={{ duration: 0.7, ease: "easeOut" }}
            whileHover={{ y: -6, scale: 1.01 }}
            className="relative overflow-hidden rounded-[28px] bg-[#588157] p-6 text-white shadow-[0_24px_70px_rgba(88,129,87,0.2)] sm:p-7 lg:col-span-2"
          >
            <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-[#FAEDCD]/20 blur-3xl" />
            <div className="relative flex h-full flex-col justify-between gap-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-semibold text-[#FAEDCD]">
                  Trust Guarantee
                </p>
                <ShieldCheck className="h-7 w-7 text-[#FAEDCD]" />
              </div>
              <div>
                <p className="font-serif text-4xl font-semibold tracking-[-0.04em]">
                  Verified lots.
                </p>
                <p className="mt-3 text-sm leading-6 text-[#FAEDCD]/80">
                  Transparent details before you reserve.
                </p>
              </div>
            </div>
          </motion.article>
        </motion.div>
      </div>
    </section>
  );
}
