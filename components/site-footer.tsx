import Image from "next/image"
import { MessageCircle } from "lucide-react"
import { InstagramIcon, FacebookIcon } from "@/components/brand-icons"
import { WHATSAPP_LINK, INSTAGRAM_LINK, FACEBOOK_LINK } from "@/lib/site"

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 md:flex-row md:items-center md:justify-between md:px-6">
        <div className="flex items-center gap-3">
          <span className="relative h-10 w-10 overflow-hidden rounded-md">
            <Image src="/logo.jpg" alt="Todo Express Temas" fill className="object-cover" />
          </span>
          <div>
            <p className="font-bold leading-tight">
              Todo<span className="text-primary">Express</span> Temas
            </p>
            <p className="text-xs text-muted-foreground">Compras y entregas a domicilio</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <a
            href={WHATSAPP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
          >
            <MessageCircle className="h-5 w-5" />
          </a>
          <a
            href={INSTAGRAM_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Instagram"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
          >
            <InstagramIcon className="h-5 w-5" />
          </a>
          <a
            href={FACEBOOK_LINK}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-secondary"
          >
            <FacebookIcon className="h-5 w-5" />
          </a>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="mx-auto max-w-6xl px-4 py-5 flex flex-col sm:flex-row items-center justify-between gap-2 text-center text-xs text-muted-foreground md:px-6">
          <p>© {new Date().getFullYear()} Todo Express Temas · Temascalcingo, Estado de México</p>
          <p className="text-muted-foreground/85">Hecho por D&apos;cReaM 🐢</p>
        </div>
      </div>
    </footer>
  )
}
