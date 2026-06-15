import { ListChecks, MessageCircle, Users } from "lucide-react"
import { WHATSAPP_LIST_LINK, WHATSAPP_GROUP_LINK } from "@/lib/site"

export function SendList() {
  return (
    <section id="lista" className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col rounded-3xl border border-border bg-card p-8 shadow-sm md:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
            <ListChecks className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-2xl font-bold tracking-tight">Mándanos tu lista</h3>
          <p className="mt-3 flex-1 text-pretty leading-relaxed text-muted-foreground">
            Escribe todo lo que necesitas en un solo mensaje y nosotros lo conseguimos. No importa de qué
            tienda sea, te lo llevamos hasta tu puerta.
          </p>
          <a
            href={WHATSAPP_LIST_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <MessageCircle className="h-5 w-5" />
            Enviar mi lista por WhatsApp
          </a>
        </div>

        <div className="flex flex-col rounded-3xl bg-accent p-8 text-accent-foreground shadow-sm md:p-10">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Users className="h-6 w-6" />
          </div>
          <h3 className="mt-5 text-2xl font-bold tracking-tight">Únete a nuestro grupo</h3>
          <p className="mt-3 flex-1 text-pretty leading-relaxed text-accent-foreground/70">
            Ingresa a nuestro grupo de whatsapp para estar al tanto de las mejores ofertas, promociones y novedades de cada semana.
          </p>
          <a
            href={WHATSAPP_GROUP_LINK}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-6 py-3.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <Users className="h-5 w-5" />
            Únete a nuestro grupo
          </a>
        </div>
      </div>
    </section>
  )
}
