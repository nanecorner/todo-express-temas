"use client"

import Image from "next/image"
import { useState } from "react"
import { Menu, X } from "lucide-react"
import { WHATSAPP_LINK } from "@/lib/site"

const links = [
  { href: "#tiendas", label: "Tiendas" },
  { href: "#catalogo", label: "Catálogo" },
  { href: "#como-funciona", label: "Cómo funciona" },
  { href: "#faq", label: "Preguntas" },
  { href: "#ubicacion", label: "Ubicación" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 md:px-6">
        <a href="#inicio" className="flex items-center gap-2">
          <span className="relative h-9 w-9 overflow-hidden rounded-md">
            <Image src="/logo.jpg" alt="Todo Express Temas" fill className="object-cover" />
          </span>
          <span className="text-base font-bold tracking-tight">
            Todo<span className="text-primary">Express</span>
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <a
          href={WHATSAPP_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-primary px-5 py-2 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-90 md:inline-flex"
        >
          Pedir ahora
        </a>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex h-10 w-10 items-center justify-center rounded-md text-foreground md:hidden"
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border bg-background px-4 py-4 md:hidden">
          <div className="flex flex-col gap-1">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-foreground"
              >
                {l.label}
              </a>
            ))}
            <a
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-2 inline-flex justify-center rounded-full bg-primary px-5 py-2.5 text-sm font-semibold text-primary-foreground"
            >
              Pedir ahora
            </a>
          </div>
        </nav>
      )}
    </header>
  )
}
