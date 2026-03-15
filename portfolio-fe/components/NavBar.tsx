"use client"
import { Menubar, MenubarMenu } from "@/components/ui/menubar"
import { useTheme } from "next-themes"
import { Sun, Moon, Expand, Shrink } from "lucide-react"
import * as React from "react"
import { Button } from "@/components/ui/button"

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

  return (
    <Menubar className="sticky top-0 w-full border-none bg-background/70 py-6 shadow-none backdrop-blur-md backdrop-saturate-150">
      <MenubarMenu>
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
