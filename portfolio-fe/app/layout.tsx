import { inter, montserrat } from "@/components/ui/font"
import NavBar from "@/components/NavBar"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: {
    default: "PhamTuanVu",
    template: "%s | PhamTuanVu",
  },
  description: "My personal portfolio website built with Next.js and Shadcn UI.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "flex min-h-screen flex-col scroll-smooth",
          inter.variable,
          montserrat.variable,
          inter.className
        )}
      >
        <ThemeProvider>
          <NavBar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
