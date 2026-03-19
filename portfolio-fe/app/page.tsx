import HeroSection from "@/components/HeroSection"
import Introduction from "@/components/Introduction"
import Footer from "@/components/Footer"

export default function Page() {
  return (
    <main className="relative overflow-x-clip">
      <HeroSection />
      <Introduction />
      <Footer />
    </main>
  )
}
