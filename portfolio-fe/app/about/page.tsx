"use client"
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area"
import Image from "next/image"
import Link from "next/link"
import { downloadCV } from "@/lib/utils"
import { Button } from "@/components/ui/button"
// Sample Information Data
const sampleInformation = {
  id: "1",
  firstName: "Phạm Tuấn",
  lastName: "Vũ",
  birthYear: 2003,
  location: "An Giang, Vietnam",
  gender: "Male",
  school: "Can Tho University of Technology",
  avatarUrl: "/avt.webp",
  contacts: {
    email: "tuanvukg2703@gmail.com",
    phone: "0369220881",
    linkedin: "https://linkedin.com",
    github: "https://github.com",
  },
}

const techStack = [
  {
    name: "Next.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  },
  {
    name: "React",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  },
  {
    name: "TypeScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  },
  {
    name: "JavaScript",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  },
  {
    name: "Node.js",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "PostgreSQL",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "Tailwind CSS",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Vite",
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vitejs/vitejs-original.svg",
  },
]

const funFacts = [
  {
    emoji: "🎵",
    title: "Music & Code",
    description:
      "EDM keeps me focused while coding. There's something magical about the beats.",
  },
  {
    emoji: "🎮",
    title: "Gamer at Heart",
    description: "Valorant and League of Legends enthusiast.",
  },
]

export default function Page() {
  return (
    <div className="min-h-screen from-slate-950 via-gray-900 to-slate-950 dark:bg-linear-to-br">
      {/* Navigation spacer */}
      <div className="h-20"></div>

      <main className="mx-auto max-w-4xl px-6 py-12 sm:px-8 lg:px-12">
        {/* Hero Section */}
        <section className="mb-16">
          <div className="flex flex-col items-start gap-8 md:flex-row md:items-center">
            {/* Left Content */}
            <div className="flex-1">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                Hi, I&apos;m {sampleInformation.firstName}{" "}
                {sampleInformation.lastName}.
              </h1>
              <p className="c mt-6 text-xl">I build things for the web.</p>
            </div>

            {/* Right Avatar */}
            <div>
              {sampleInformation.avatarUrl && (
                <Image
                  src={sampleInformation.avatarUrl}
                  alt={`${sampleInformation.firstName} ${sampleInformation.lastName}`}
                  width={200}
                  height={200}
                  className="h-48 w-48 rounded-3xl object-cover shadow-lg"
                />
              )}
            </div>
          </div>
        </section>

        {/* Bio Section */}
        <section className="mb-16 border-b border-gray-700 pb-16">
          <h2 className="mb-6 text-2xl font-bold">About</h2>
          <div className="space-y-4 text-lg leading-relaxed dark:text-gray-300">
            <p>
              I&apos;m a fresh Software Engineering graduate from Can Tho
              University of Technology (CTUT), passionate about building elegant
              and efficient solutions for real-world problems. With a solid
              foundation in full-stack development, I&apos;m on a journey to
              become a proficient Full Stack Developer.
            </p>
            <p>
              My philosophy is simple: write clean, maintainable code that
              creates seamless user experiences. I believe great software is a
              perfect balance between beautiful interfaces and robust backends,
              where performance and usability go hand in hand.
            </p>
            <p>
              I&apos;m driven by curiosity and the desire to continuously learn.
              Whether it&apos;s exploring new frameworks, optimizing database
              queries, or crafting pixel-perfect UIs, I approach every project
              with dedication and a mindset to deliver high-impact results.
            </p>
          </div>
        </section>

        {/* Tech Stack Section */}
        <section className="mb-16 border-b border-gray-700 pb-16">
          <h2 className="mb-8 text-2xl font-bold">Tech Stack</h2>
          <ScrollArea className="w-full rounded-lg border border-gray-700 p-4 dark:bg-gray-900/50">
            <div className="flex gap-6">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="flex min-w-max flex-col items-center gap-3 rounded-xl border border-gray-600 p-4 transition-all duration-300 hover:border-gray-400 hover:bg-gray-700/50 hover:shadow-lg dark:bg-gray-800/50"
                >
                  <Image
                    src={tech.icon}
                    alt={tech.name}
                    width={40}
                    height={40}
                    className="aspect-auto h-fit object-cover"
                  />
                  <span className="text-center text-sm font-medium dark:text-gray-200">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
            <ScrollBar orientation="horizontal" />
          </ScrollArea>
        </section>

        {/* Beyond the Code Section */}
        <section className="mb-16 border-b border-gray-700 pb-16">
          <h2 className="mb-8 text-2xl font-bold">Beyond the Code</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {funFacts.map((fact, index) => (
              <div
                key={index}
                className="rounded-xl border border-gray-600 p-6 transition-all duration-300 hover:border-gray-400 hover:bg-gray-700/50 hover:shadow-lg dark:bg-gray-800/50"
              >
                <div className="mb-3 text-4xl">{fact.emoji}</div>
                <h3 className="mb-2 text-lg font-semibold">{fact.title}</h3>
                <p className="dark:text-gray-400">{fact.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Contact & CTA Section */}
        <section className="mb-20">
          <div className="space-y-6">
            {/* CTA Buttons */}
            <div className="flex flex-col gap-4 pt-6 sm:flex-row">
              <button
                onClick={downloadCV}
                className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-4 font-semibold transition-all duration-300 hover:border-white hover:bg-gray-500 dark:text-gray-200"
              >
                ↓ Download My Resume
              </button>
              <div className="flex gap-4">
                {sampleInformation.contacts.github && (
                  <Link
                    href={sampleInformation.contacts.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-lg border border-gray-600 px-6 py-4 font-semibold transition-all duration-300 hover:border-white hover:bg-gray-500 dark:text-gray-200"
                  >
                    GitHub
                  </Link>
                )}
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
