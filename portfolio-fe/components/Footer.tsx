"use client"

import { useState } from "react"
import Link from "next/link"
import type { MouseEvent } from "react"
import { downloadCV } from "@/lib/utils"
import {
  Download,
  House,
  Mail,
  Github,
  Facebook,
  Linkedin,
  ArrowUpRight,
  Copy,
  Check,
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
]

export default function Footer() {
  const currentYear = new Date().getFullYear()

  const handleScrollHome = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()
    window.history.replaceState(null, "", "/#home")
    const section = document.getElementById("home")
    section?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText("tuanvukg2703@gmail.com")
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <footer className="relative mt-16 overflow-hidden border-t border-sky-900/50 dark:dark:bg-slate-950 dark:text-slate-100">
      <div className="pointer-events-none absolute inset-0" />

      <div className="relative mx-auto w-full max-w-7xl px-4 py-12 sm:px-6 lg:px-10">
        <div className="grid gap-8 lg:grid-cols-[1.35fr_1fr_1fr]">
          <div className="space-y-4">
            <p className="font-semibold tracking-[0.18em] uppercase dark:text-xs dark:text-sky-300">
              Let&apos;s Build Something Great
            </p>
            <h3 className="font-bold dark:text-2xl dark:text-white sm:dark:text-3xl">
              Ready to collaborate on your next product?
            </h3>
            <p className="max-w-xl leading-relaxed dark:text-sm dark:text-slate-300 sm:dark:text-base">
              I focus on building practical, high-impact web products with clean
              architecture and smooth user experiences.
            </p>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold tracking-[0.12em] uppercase dark:text-sm dark:text-sky-200">
              Quick Actions
            </h4>
            <div className="flex flex-col gap-3">
              <button
                onClick={downloadCV}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-sky-400/70 px-4 py-2 font-semibold transition hover:border-sky-300 dark:bg-sky-500/20 dark:text-sm dark:text-sky-100 hover:dark:bg-sky-500/35"
              >
                <Download size={16} />
                Download My CV
              </button>

              <Link
                href="#home"
                onClick={handleScrollHome}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-slate-500/70 px-4 py-2 font-semibold transition hover:border-sky-300 dark:bg-slate-900 dark:text-sm dark:text-slate-100 hover:dark:text-sky-200"
              >
                <House size={16} />
                Home
              </Link>
            </div>
          </div>

          <div className="space-y-3">
            <h4 className="font-semibold tracking-[0.12em] uppercase dark:text-sm dark:text-sky-200">
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
                    className="inline-flex items-center justify-between gap-2 rounded-xl border border-slate-700 px-4 py-2.5 font-medium transition hover:border-sky-400/70 dark:bg-slate-900/80 dark:text-sm dark:text-slate-100 hover:dark:bg-slate-800"
                  >
                    <span className="inline-flex items-center gap-2">
                      <Icon size={16} className="dark:text-sky-300" />
                      {contact.label}
                    </span>
                    <ArrowUpRight size={14} className="dark:text-sky-300" />
                  </Link>
                )
              })}
              <div className="flex items-center gap-2">
                <Link
                  href="mailto:tuanvukg2703@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-between gap-2 rounded-xl border border-slate-700 px-4 py-2.5 font-medium transition hover:border-sky-400/70 dark:bg-slate-900/80 dark:text-sm dark:text-slate-100 hover:dark:bg-slate-800"
                >
                  <span className="inline-flex items-center gap-2">
                    <Mail size={16} className="dark:text-sky-300" />
                    tuanvukg2703@gmail.com
                  </span>
                  <ArrowUpRight size={14} className="dark:text-sky-300" />
                </Link>
                <button
                  onClick={handleCopyEmail}
                  className="rounded-lg border border-slate-700 px-3 py-2.5 text-sm font-medium transition hover:border-sky-400/70 dark:bg-slate-900/80 dark:text-slate-100 hover:dark:bg-slate-800"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check size={16} /> : <Copy size={16} />}
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-slate-800 pt-5 sm:flex-row sm:items-center dark:text-xs dark:text-slate-400">
          <p>© {currentYear} Pham Tuan Vu. All rights reserved.</p>
          <p>Built with Next.js, TypeScript, and Tailwind CSS.</p>
        </div>
      </div>
    </footer>
  )
}
