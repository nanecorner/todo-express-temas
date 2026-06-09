import { MapPin } from "lucide-react"
import { ADDRESS, MAPS_LINK, MAPS_EMBED } from "@/lib/site"

export function LocationMap() {
  return (
    <section id="ubicacion" className="border-t border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="grid items-center gap-8 md:grid-cols-2">
          <div>
            <span className="text-sm font-semibold uppercase tracking-wider text-primary">Ubicación</span>
            <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
              Encuéntranos en Temascalcingo
            </h2>
            <p className="mt-4 flex items-start gap-2 text-pretty leading-relaxed text-muted-foreground">
              <MapPin className="mt-0.5 h-5 w-5 flex-shrink-0 text-primary" />
              {ADDRESS}
            </p>
          </div>

          <div className="overflow-hidden rounded-3xl border border-border shadow-sm">
            <iframe
              src={MAPS_EMBED}
              title="Ubicación de Todo Express Temas en Google Maps"
              className="h-[320px] w-full"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </section>
  )
}
