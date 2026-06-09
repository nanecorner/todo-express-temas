import Image from "next/image"
import { stores } from "@/lib/site"

export function Stores() {
  const duplicatedStores = [...stores, ...stores, ...stores]

  return (
    <section id="tiendas" className="overflow-hidden py-16 md:py-20 bg-background/50 border-b border-border">
      <div className="mx-auto max-w-6xl px-4 md:px-6 text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">Tiendas</span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Compramos donde tú quieras
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-pretty text-muted-foreground">
          Conseguimos tus productos de las mejores cadenas comerciales y panaderías locales. ¿No ves la tuya? Escríbenos, seguro la conseguimos.
        </p>
      </div>

      {/* Contenedor del Carrusel Marquee */}
      <div className="relative mt-12 w-full overflow-hidden before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-20 before:bg-gradient-to-r before:from-background before:to-transparent after:absolute after:right-0 after:top-0 after:z-10 after:h-full after:w-20 after:bg-gradient-to-l after:from-background after:to-transparent">
        <div className="flex w-max animate-marquee gap-6 py-4">
          {duplicatedStores.map((store, i) => (
            <div
              key={`${store.name}-${i}`}
              className="group flex h-36 w-72 shrink-0 flex-col items-center justify-center rounded-2xl border border-border bg-card px-8 py-6 shadow-sm transition-all duration-300 hover:scale-105 hover:border-primary/40 hover:shadow-md"
            >
              <div className="relative h-16 w-full transition-transform duration-300 group-hover:-translate-y-1">
                <Image
                  src={store.logo}
                  alt={store.name}
                  fill
                  className="object-contain"
                />
              </div>
              <span className="text-sm font-bold text-foreground opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-out group-hover:opacity-100 group-hover:max-h-6 group-hover:mt-3">
                {store.name}
              </span>
            </div>
          ))}
        </div>
      </div>
      
      <div className="mt-6 text-center">
        <p className="text-xs text-muted-foreground">
          Pasa el cursor sobre una tienda para pausar el carrusel.
        </p>
      </div>
    </section>
  )
}
