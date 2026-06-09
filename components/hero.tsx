import Image from "next/image"
import { MessageCircle, MapPin } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/site"

export function Hero() {
  return (
    <section id="inicio" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-14 md:grid-cols-2 md:gap-12 md:px-6 md:py-20">
        <div className="flex flex-col items-start">
          <span className="inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs font-medium text-muted-foreground">
            <MapPin className="h-3.5 w-3.5 text-primary" />
            Temascalcingo y alrededores
          </span>

          <h1 className="mt-5 text-balance text-4xl font-extrabold leading-[1.05] tracking-tight md:text-6xl">
            Te traemos <span className="text-primary">todo</span> hasta Temas.
          </h1>

          <p className="mt-5 max-w-md text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Hacemos tus compras en Costco, Sam&apos;s Club, Walmart y más. Tú pides, nosotros lo compramos
            y te lo entregamos. Así de fácil.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
            >
              <MessageCircle className="h-4 w-4" />
              Pedir por WhatsApp
            </a>
            <a
              href="#catalogo"
              className="inline-flex items-center justify-center rounded-full border border-border bg-card px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary"
            >
              Catálogo
            </a>
          </div>

          <div className="mt-8 flex items-center gap-6">
            <div>
              <p className="text-2xl font-bold">8+</p>
              <p className="text-xs text-muted-foreground">Tiendas disponibles</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold">Entregas</p>
              <p className="text-xs text-muted-foreground">todos los sábados, todo el año</p>
            </div>
            <div className="h-8 w-px bg-border" />
            <div>
              <p className="text-2xl font-bold">100%</p>
              <p className="text-xs text-muted-foreground">Local y confiable</p>
            </div>
          </div>
        </div>

        <div className="relative">
          <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-card shadow-sm">
            <Image
              src="/hero-entrega.png"
              alt="Repartidor de Todo Express Temas entregando bolsas y caja de compras"
              fill
              priority
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-4 -left-4 hidden rounded-2xl border border-border bg-card px-5 py-4 shadow-md sm:block">
            <p className="text-sm font-semibold">Entrega a domicilio</p>
            <p className="text-xs text-muted-foreground">Directo a tu puerta</p>
          </div>
        </div>
      </div>
    </section>
  )
}
