"use client"
import { Menubar, MenubarMenu } from "@/components/ui/menubar"
import { useTheme } from "next-themes"
import { Sun, Moon, Expand, Shrink } from "lucide-react"
import * as React from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ZenTokyoZoo } from "@/components/ui/font"
import type { MouseEvent } from "react"
export default function NavBar() {
  const { theme, setTheme } = useTheme()
  // mounted dung de tranh hydration mismatch luc SSR/CSR.
  const [mounted, setMounted] = React.useState(false)
  const [isFullscreen, setIsFullscreen] = React.useState(false)

  React.useEffect(() => {
    // Danh dau component da mount o client.
    setMounted(true)
    // Dong bo trang thai fullscreen ngay khi vua mount.
    setIsFullscreen(!!document.fullscreenElement)

    const handleChange = () => {
      // Neu co fullscreenElement => dang fullscreen, nguoc lai la false.
      setIsFullscreen(!!document.fullscreenElement)
    }
    // Dang ky event fullscreenchange de icon luon dung khi bam Esc/F11.
    document.addEventListener("fullscreenchange", handleChange)
    // Cleanup event listener khi unmount de tranh memory leak.
    return () => document.removeEventListener("fullscreenchange", handleChange)
  }, [])

  const toggleFullscreen = async () => {
    // Neu chua fullscreen thi yeu cau vao fullscreen cho document.
    if (!document.fullscreenElement) {
      try {
        // Cho browser hoan tat thao tac vao fullscreen.
        await document.documentElement.requestFullscreen()
        setIsFullscreen(true)
      } catch {
        // Neu that bai, doc lai state thuc te tu browser.
        setIsFullscreen(!!document.fullscreenElement)
      }
    } else {
      try {
        // Neu dang fullscreen thi thoat fullscreen.
        await document.exitFullscreen()
        setIsFullscreen(false)
      } catch {
        setIsFullscreen(!!document.fullscreenElement)
      }
    }
  }
  const handleScrollToSection = (
    event: MouseEvent<HTMLAnchorElement>,
    sectionId: string
  ) => {
    event.preventDefault()
    window.history.replaceState(null, "", `/#${sectionId}`)
    const section = document.getElementById(sectionId)
    section?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const handleScrollToProjects = (event: MouseEvent<HTMLAnchorElement>) => {
    handleScrollToSection(event, "projects")
  }
  return (
    <Menubar className="sticky top-0 z-50 w-full border-none bg-background/70 p-7 shadow-none backdrop-blur-md backdrop-saturate-150">
      <MenubarMenu>
        <Link href="/">
          <span
            className={`rounded-2xl px-4 py-2 text-3xl font-bold text-sky-500 hover:bg-primary/10 ${ZenTokyoZoo.className}`}
          >
            Z
          </span>
        </Link>
        <div className="flex gap-4 rounded-lg px-4 text-sm font-medium">
          <Link className="rounded-md p-2 hover:bg-primary/10" href="/about">
            About
          </Link>
          <Link
            className="rounded-md p-2 hover:bg-primary/10"
            href=""
            onClick={handleScrollToProjects}
          >
            Projects
          </Link>
          <Link className="rounded-md p-2 hover:bg-primary/10" href="/contact">
            Contact
          </Link>
        </div>

        <Button
          variant="outline"
          size="icon"
          className="ml-auto rounded-full"
          onClick={() => setTheme(theme === "light" ? "dark" : "light")}
        >
          {/* Chi hien icon theo theme sau khi mounted de tranh hydration mismatch. */}
          {mounted ? theme === "light" ? <Moon /> : <Sun /> : <Sun />}
        </Button>
        <Button
          variant="outline"
          size="icon"
          className="rounded-full"
          onClick={toggleFullscreen}
        >
          {isFullscreen ? <Shrink /> : <Expand />}
        </Button>
      </MenubarMenu>
    </Menubar>
  )
}
