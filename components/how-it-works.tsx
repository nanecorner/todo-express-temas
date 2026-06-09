import { MessageSquareText, ShoppingCart, Truck, AlertCircle, Tag } from "lucide-react"

const steps = [
  {
    icon: Tag,
    title: "1. Enviamos precios",
    desc: "Los miércoles enviamos precios y ofertas de tus tiendas favoritas.",
  },
  {
    icon: MessageSquareText,
    title: "2. Envíanos tu lista",
    desc: "Recibimos tu pedido por WhatsApp y cerramos pedidos los viernes a las 4:00 pm.",
  },
  {
    icon: ShoppingCart,
    title: "3. Nosotros lo compramos",
    desc: "Vamos a la tienda y seleccionamos cada producto de tu lista con cuidado.",
  },
  {
    icon: Truck,
    title: "4. Te lo entregamos",
    desc: "Llevamos tus compras hasta tu puerta o punto acordado los días sábados.",
  },
]

export function HowItWorks() {
  return (
    <section id="como-funciona" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Cómo funciona</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            Pedir es rápido y sencillo
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Sigue estos cuatro sencillos pasos para recibir tus compras en casa.
          </p>
        </div>

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <div
              key={s.title}
              className="flex flex-col rounded-2xl border border-border bg-background p-6"
            >
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 text-primary">
                <s.icon className="h-6 w-6" />
              </span>
              <h3 className="mt-4 text-lg font-semibold">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{s.desc}</p>
            </div>
          ))}
        </div>

        {/* Info adicional de políticas y anticipo */}
        <div className="mt-16 rounded-3xl border border-border bg-background p-8 md:p-10 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-primary/5 rounded-full blur-xl pointer-events-none" />
          
          <div className="max-w-3xl mx-auto">
            <h3 className="text-xl font-bold text-foreground text-center sm:text-left">Políticas y Anticipo</h3>
            <p className="mt-1 text-sm text-muted-foreground text-center sm:text-left">Condiciones para tus pedidos</p>
            
            <div className="mt-6 grid gap-6 sm:grid-cols-2 text-left">
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <AlertCircle className="h-4 w-4" />
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Todo está <strong className="text-foreground font-medium">sujeto a disponibilidad</strong> de las tiendas.
                </p>
              </div>
              
              <div className="flex gap-3 items-start">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <AlertCircle className="h-4 w-4" />
                </span>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  Se solicita un <strong className="text-foreground font-medium">50% de anticipo</strong> para clientes nuevos.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
