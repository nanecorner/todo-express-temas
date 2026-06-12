"use client"

import { useState } from "react"
import Image from "next/image"
import { MessageCircle, ImageIcon } from "lucide-react"
import { products, orderProductLink } from "@/lib/site"

export function Catalog() {
  const [selectedStore, setSelectedStore] = useState("Todas")

  // Obtener lista única de tiendas que tienen productos en el catálogo
  const availableStores = ["Todas", ...Array.from(new Set(products.map((p) => p.store)))]

  // Filtrar los productos según la tienda seleccionada
  const filteredProducts = selectedStore === "Todas"
    ? products
    : products.filter((p) => p.store === selectedStore)

  return (
    <section id="catalogo" className="border-y border-border bg-card">
      <div className="mx-auto max-w-6xl px-4 py-16 md:px-6 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <span className="text-sm font-semibold uppercase tracking-wider text-primary">Catálogo (productos estrella)</span>
          <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
            ¿Qué necesitas hoy?
          </h2>
          <p className="mt-3 text-pretty text-muted-foreground">
            Estos son algunos productos que pedimos seguido. ¿No lo ves aquí? También conseguimos
            productos bajo solicitud, solo mándanos tu lista.
          </p>
        </div>

        {/* Botones de Filtro por Tienda */}
        <div className="mt-8 flex flex-nowrap overflow-x-auto pb-4 gap-2 justify-start md:justify-center -mx-4 px-4 scrollbar-none">
          {availableStores.map((store) => (
            <button
              key={store}
              onClick={() => setSelectedStore(store)}
              className={`px-4 py-2 text-sm font-semibold rounded-full border transition-all duration-200 whitespace-nowrap cursor-pointer ${
                selectedStore === store
                  ? "bg-primary border-primary text-primary-foreground shadow-sm scale-102"
                  : "bg-background border-border text-muted-foreground hover:bg-secondary hover:text-foreground"
              }`}
            >
              {store}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {filteredProducts.map((p) => (
            <article
              key={`${p.name}-${p.store}`}
              className="flex flex-col overflow-hidden rounded-2xl border border-border bg-background"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-muted flex items-center justify-center">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={p.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover transition-transform duration-300 hover:scale-105"
                  />
                ) : (
                  <>
                    <ImageIcon className="h-10 w-10 text-muted-foreground/60" aria-hidden="true" />
                    <span className="sr-only">Imagen del producto próximamente</span>
                  </>
                )}
              </div>
              <div className="flex flex-1 flex-col p-4">
                <h3 className="text-base font-semibold leading-snug text-foreground line-clamp-2 h-11">{p.name}</h3>
                <span className="mt-1 text-xs font-medium uppercase tracking-wide text-primary">
                  {p.store}
                </span>
                <div className="mt-3 flex items-baseline gap-1">
                  <span className="text-xs text-muted-foreground">Precio base</span>
                  <span className="ml-auto text-lg font-bold text-foreground">{p.price}</span>
                </div>
                <a
                  href={orderProductLink(p.name, p.store)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center justify-center gap-2 rounded-full bg-primary px-4 py-2.5 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <MessageCircle className="h-4 w-4" />
                  Pedir por WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
