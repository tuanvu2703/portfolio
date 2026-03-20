"use client"

import { useState } from "react"
import { Copy, Check } from "lucide-react"
import Link from "next/link"

const contactInfo = {
  email: "tuanvukg2703@gmail.com",
  phone: "036 922 0881",
  socialLinks: [
    {
      name: "GitHub",
      url: "https://github.com/tuanvu2703",
    },
    {
      name: "LinkedIn",
      url: "https://linkedin.com/in/tuanvu",
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
    },
  ],
}

export default function ContactPage() {
  const [copied, setCopied] = useState(false)

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(contactInfo.email)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="min-h-screen from-slate-950 via-gray-900 to-slate-950 dark:bg-linear-to-br">
      <main className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <section className="mb-20 text-center">
          <div className="mb-6 inline-block rounded-full border border-gray-700 px-6 py-2 dark:bg-gray-800/50">
            <p className="text-sm font-semibold tracking-wider uppercase">
              Contact
            </p>
          </div>
          <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
            Let&apos;s Connect!
          </h1>
          <p className="mx-auto max-w-2xl text-xl leading-relaxed">
            I&apos;m always open to new opportunities and exciting
            collaborations. Whether you have a question, a project in mind, or
            just want to say hi – feel free to reach out! I&apos;d love to hear
            from you.
          </p>
        </section>

        <section>
          <h2 className="mb-6 text-2xl font-bold">Get in Touch</h2>
          <div className="space-y-4 text-lg leading-relaxed dark:text-gray-300">
            <p>
              <strong>Email:</strong>{" "}
              <a
                href={`mailto:${contactInfo.email}`}
                className="cursor-pointer text-blue-400 hover:underline"
              >
                {contactInfo.email}
              </a>
              <button
                onClick={handleCopyEmail}
                className="ml-2 inline-flex cursor-pointer items-center gap-1 rounded-md p-2 text-sm transition-colors hover:bg-gray-700 hover:text-blue-400 dark:text-gray-400"
                title="Copy email"
              >
                 {copied ? <Check size={16} /> : <Copy size={16} />}
              </button>
            
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <span className="text-blue-400">{contactInfo.phone}</span>
            </p>
            <div className="mt-4 grid gap-2 space-x-6">
              {contactInfo.socialLinks.map((link) => (
                <div key={link.name}>
                  <strong>{link.name}:</strong>{" "}
                  <Link
                    key={link.name}
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`cursor-pointer text-blue-400 hover:underline`}
                  >
                    {link.url}
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Closing Message */}
        <section className="mt-20 text-center">
          <p className="text-lg dark:text-gray-400">
            I look forward to connecting with you soon! 🚀
          </p>
        </section>
      </main>
    </div>
  )
}
