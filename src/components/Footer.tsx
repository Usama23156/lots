import {
  ArrowRight,
  Facebook,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
} from "lucide-react";
import { Logo } from "./Logo";

const socialLinks = [
  { label: "Instagram", icon: Instagram },
  { label: "Facebook", icon: Facebook },
  { label: "LinkedIn", icon: Linkedin },
];

export function Footer() {
  return (
    <footer className="bg-[#FEFAF6] px-4 pb-6 pt-2 text-[#3C2F2F] sm:px-6 lg:px-8">
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative overflow-hidden rounded-[32px] bg-[#3C2F2F] p-6 text-white shadow-[0_28px_90px_rgba(60,47,47,0.18)] sm:p-8 lg:p-10">
          <div className="absolute -left-16 -top-16 h-52 w-52 rounded-full bg-[#D4A373]/30 blur-3xl" />
          <div className="absolute -bottom-20 right-8 h-64 w-64 rounded-full bg-[#588157]/35 blur-3xl" />

          <div className="relative grid gap-8 lg:grid-cols-[1.15fr_1fr_0.9fr] lg:gap-12">
            <div>
              <Logo className="[&_span]:text-white" />
              <p className="mt-5 max-w-md text-sm leading-7 text-[#FAEDCD]/80">
                Premium Florida land opportunities curated for buyers seeking
                lifestyle, legacy, and long-term investment growth.
              </p>
            </div>

            <div className="rounded-[28px] border border-white/10 bg-white/10 p-5 backdrop-blur-xl">
              <p className="text-sm font-semibold text-[#D4A373]">
                Contact Information
              </p>
              <div className="mt-5 space-y-3">
                <a
                  href="mailto:hello@floridalots.com"
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium text-[#FAEDCD]/85 transition duration-300 hover:bg-white/10 hover:text-white"
                >
                  <Mail className="h-4 w-4 text-[#D4A373]" />
                  hello@floridalots.com
                </a>
                <a
                  href="tel:+18885555263"
                  className="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium text-[#FAEDCD]/85 transition duration-300 hover:bg-white/10 hover:text-white"
                >
                  <Phone className="h-4 w-4 text-[#D4A373]" />
                  (888) 555-LAND
                </a>
                <div className="flex items-center gap-3 rounded-2xl px-3 py-2 text-sm font-medium text-[#FAEDCD]/85">
                  <MapPin className="h-4 w-4 text-[#D4A373]" />
                  Florida land markets
                </div>
              </div>
            </div>

            <div className="flex flex-col justify-between gap-6">
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-[#D4A373] px-6 py-4 text-sm font-semibold text-[#3C2F2F] shadow-[0_18px_50px_rgba(212,163,115,0.32)] transition duration-300 hover:-translate-y-0.5 hover:bg-[#e0b98e]"
              >
                Get Lot Information
                <ArrowRight className="h-4 w-4 transition duration-300 group-hover:translate-x-0.5" />
              </a>

              <div>
                <p className="mb-3 text-sm font-semibold text-[#FAEDCD]">
                  Follow PalmLand
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => {
                    const Icon = social.icon;

                    return (
                      <a
                        key={social.label}
                        href="#"
                        onClick={(event) => event.preventDefault()}
                        aria-label={social.label}
                        className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-white/10 text-[#FAEDCD] transition duration-300 hover:-translate-y-0.5 hover:bg-[#FAEDCD] hover:text-[#3C2F2F]"
                      >
                        <Icon className="h-5 w-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          <div className="relative mt-8 flex flex-col gap-4 border-t border-white/10 pt-6 text-sm text-[#FAEDCD]/70 sm:flex-row sm:items-center sm:justify-between">
            <p>© 2026 PalmLand. All rights reserved.</p>
            <div className="flex flex-wrap gap-4">
              <a
                href="#"
                onClick={(event) => event.preventDefault()}
                className="transition duration-300 hover:text-white"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                onClick={(event) => event.preventDefault()}
                className="transition duration-300 hover:text-white"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
