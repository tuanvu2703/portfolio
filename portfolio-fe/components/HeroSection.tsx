"use client"

import Image from "next/image"
import { useEffect, useState } from "react"
import SkeletonAVT from "@/components/SkeletonAVT"
import { montserrat, roboto_mono } from "@/components/ui/font"
import { Button } from "@/components/ui/button"
import { Mouse } from "lucide-react"
import Link from "next/link"
import type { MouseEvent } from "react"

export default function HeroSection() {
  const [isLoading, setIsLoading] = useState(true)

  const handleScrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault()
    window.history.replaceState(null, "", `/#${sectionId}`)
    const section = document.getElementById(sectionId)
    section?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleScrollDown = (event: MouseEvent<HTMLAnchorElement>) => {
    handleScrollToSection(event, "introduction")
  }

  const handleScrollToProjects = (event: MouseEvent<HTMLAnchorElement>) => {
    handleScrollToSection(event, "projects")
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false)
    }, 1000)

    return () => clearTimeout(timer)
  }, [])

  return (
    <section
      id="home"
      className="relative mx-auto grid min-h-[calc(100vh-5.5rem)] w-full max-w-7xl grid-cols-1 items-center justify-items-center gap-10 px-4 py-10 sm:px-6 lg:grid-cols-2 lg:gap-14 lg:px-10 lg:py-16"
    >
      <div className="my-auto text-center lg:text-left">
        <div className="grid gap-3">
          <h3 className="text-base font-semibold tracking-[0.16em] text-sky-700 uppercase sm:text-lg lg:text-xl dark:text-sky-300">
            Welcome to my portfolio!
          </h3>
          <h2
            className={`${roboto_mono.className} text-lg sm:text-xl lg:text-2xl`}
          >
            Hello World, My name is
          </h2>
          <h1
            className={`${montserrat.className} text-4xl leading-tight font-bold sm:text-5xl lg:text-6xl`}
          >
            Phạm Tuấn Vũ
          </h1>
          <p className="mx-auto max-w-xl text-base text-muted-foreground sm:text-lg lg:mx-0 lg:text-xl">
            i&apos;m a Fresher Software Engineer from VIETNAM.
          </p>
        </div>
        <div className="mt-6 flex flex-col items-center gap-3 sm:flex-row sm:justify-center lg:justify-start">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full rounded-full border-2 border-sky-700 bg-radial-[at_50%_75%] from-sky-300 via-blue-500 to-indigo-900 to-90% px-6 py-5 text-base font-semibold text-white transition hover:scale-105 hover:text-white focus:ring-4 focus:ring-sky-300 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
          >
            <Link href="/cv.pdf" target="_blank">
              Download CV
            </Link>
          </Button>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="w-full rounded-full border-2 border-sky-700 px-6 py-5 text-base font-semibold text-sky-700 transition hover:bg-sky-700 hover:text-white focus:ring-4 focus:ring-sky-300 sm:w-auto sm:px-8 sm:py-6 sm:text-lg"
          >
            <Link href="#projects" onClick={handleScrollToProjects}>
              See my projects
            </Link>
          </Button>
        </div>
        <Link
          href="#introduction"
          onClick={handleScrollDown}
          className="mt-8 inline-flex items-center gap-2 font-medium text-sky-700 transition hover:translate-y-0.5 dark:text-sky-300"
          aria-label="Scroll down to introduction"
        >
          <Mouse className="animate-bounce text-sky-700" size={24} />
          <span>Scroll down</span>
        </Link>
      </div>
      <div className="mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md">
        {isLoading ? (
          <SkeletonAVT />
        ) : (
          <Image
            className="h-auto w-full rounded-full border-8 border-sky-700 object-cover"
            src="/avt.webp"
            width={500}
            height={500}
            alt="Image of Phạm Tuấn Vũ"
          />
        )}
      </div>
    </section>
  )
}
