"use client"

import Link from "next/link"
import type { MouseEvent } from "react"
import {
  Download,
  House,
  Mail,
  Github,
  Facebook,
  Linkedin,
  ArrowUpRight,
} from "lucide-react"

const contacts = [
  {
    label: "GitHub",
    href: "https://github.com/tuanvu2703",
    icon: Github,
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/PhamTuanVu03/",
    icon: Facebook,
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/vu-pham-01aa52376/",
    icon: Linkedin,
  },
  {
    label: "Email",
    href: "mailto:tuanvukg2703@gmail.com",
    icon: Mail,
  },
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollHome = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.history.replaceState(null, "", "/#home")
    const section = document.getElementById("home")
    section?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-sky-900/50 bg-slate-950 text-slate-100">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_right,_rgba(56,189,248,0.18),_transparent_42%),radial-gradient(circle_at_18%_85%,_rgba(30,64,175,0.30),_transparent_45%)]" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="text-xs font-semibold tracking-[0.18em] text-sky-300 uppercase">
              Let&apos;s Build Something Great
            </p>
            <h3 className="text-2xl font-bold text-white sm:text-3xl">
              Ready to collaborate on your next product?
            </h3>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              I focus on building practical, high-impact web products with clean
              architecture and smooth user experiences.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-[0.12em] text-sky-200 uppercase">
              Quick Actions
            </h4>
            <div className="flex flex-col gap-3">
              <Link
                href="/cv.pdf"
                target="_blank"
                className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/70 bg-sky-500/20 px-4 py-2 text-sm font-semibold text-sky-100 transition hover:border-sky-300 hover:bg-sky-500/35"
              >
                <Download size={16} />
                Download My CV
              </Link>

              <Link
                href="#home"
                onClick={handleScrollHome}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-500/70 bg-slate-900 px-4 py-2 text-sm font-semibold text-slate-100 transition hover:border-sky-300 hover:text-sky-200"
              >
                <House size={16} />
                Home
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="text-sm font-semibold tracking-[0.12em] text-sky-200 uppercase">
              Contacts
            </h4>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-1">
              {contacts.map((contact) => {
                const Icon = contact.icon
                return (
                  <Link
                    key={contact.label}
                    href={contact.href}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-between gap-2 rounded-xl border border-slate-700 bg-slate-900/80 px-4 py-2.5 text-sm font-medium text-slate-100 transition hover:border-sky-400/70 hover:bg-slate-800"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon size={16} className="text-sky-300" />
                      {contact.label}
                    </span>
                    <ArrowUpRight size={14} className="text-sky-300" />
                  </Link>
                )
              })}
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-5 text-xs text-slate-400 sm:flex-row sm:items-center">
          <p>© {currentYear} Pham Tuan Vu. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
