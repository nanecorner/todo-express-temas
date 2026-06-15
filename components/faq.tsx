import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { faqs } from "@/lib/site"

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-3xl px-4 py-16 md:px-6 md:py-20">
      <div className="mx-auto max-w-2xl text-center">
        <span className="text-sm font-semibold uppercase tracking-wider text-primary">
          Preguntas frecuentes
        </span>
        <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight md:text-4xl">
          Resolvemos tus dudas 
        </h2>
      </div>

      <Accordion className="mt-10 w-full">
        {faqs.map((item, i) => (
          <AccordionItem key={item.q} value={`item-${i}`}>
            <AccordionTrigger className="text-left text-base font-semibold">{item.q}</AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-muted-foreground whitespace-pre-line">
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  )
}
