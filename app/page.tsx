import { SiteHeader } from "@/components/site-header"
import { Hero } from "@/components/hero"
import { HowItWorks } from "@/components/how-it-works"
import { Stores } from "@/components/stores"
import { Catalog } from "@/components/catalog"
import { SendList } from "@/components/send-list"
import { Faq } from "@/components/faq"
import { LocationMap } from "@/components/location-map"
import { SiteFooter } from "@/components/site-footer"
import { FloatingWhatsApp } from "@/components/floating-whatsapp"

export default function Page() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <Hero />
        <Stores />
        <Catalog />
        <HowItWorks />
        <SendList />
        <Faq />
        <LocationMap />   
      </main>
      <SiteFooter />
      <FloatingWhatsApp />
    </div>
  )
}
