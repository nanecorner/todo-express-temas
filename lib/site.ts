export const WHATSAPP_NUMBER = "524421445948"

export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "¡Hola vendedor! Me gustaría hacer un pedido.",
)}`

export const WHATSAPP_LIST_LINK = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
  "¡Hola vendedor! Esta es mi lista de productos:\n\n- ",
)}`

// Reemplaza este enlace por la invitación real del grupo (https://chat.whatsapp.com/...)
export const WHATSAPP_GROUP_LINK = "https://chat.whatsapp.com/LdQMqqAEesdBnjuSrQADX7?s=sw&p=i&ilr=2"

export const INSTAGRAM_LINK = "https://www.instagram.com/todoexpresstemas/"
export const FACEBOOK_LINK = "https://www.facebook.com/todoexpress.temas"

export const ADDRESS = "Calle Lic. Felipe de Jesús Chaparro 4, 50400 Temascalcingo, Edo. Méx., México"
export const MAPS_LINK =
  "https://www.google.com/maps/search/Calle%20Licenciado%20Felipe%20de%20Jes%C3%BAs%20Chaparro%204%2C%2050400%20Temascalcingo%20Edo.%20M%C3%A9x.%2C%20M%C3%A9xico/@19.9182,-100.0058,17z?hl=es"
export const MAPS_EMBED =
  "https://www.google.com/maps?q=Calle%20Licenciado%20Felipe%20de%20Jes%C3%BAs%20Chaparro%204%2C%2050400%20Temascalcingo%20Edo.%20M%C3%A9x.%2C%20M%C3%A9xico&z=16&output=embed"

// Tiendas con color de marca para las tarjetas
export const stores: { name: string; color: string; logo: string }[] = [
  { name: "Costco", color: "#005DAA", logo: "/Costco.png" },
  { name: "Sam's Club", color: "#0067A0", logo: "/Sams.png" },
  { name: "Walmart", color: "#0071CE", logo: "/Walmart.png" },
  { name: "McDonald's", color: "#DB0007", logo: "/McDonald's.png" },
  { name: "Little Caesars", color: "#FF6000", logo: "/Little-Caesars.svg" },
  { name: "Krispy Kreme", color: "#006241", logo: "/Krispy_Kreme.png" },
  { name: "El Globo", color: "#7A1F2B", logo: "/el-globo.svg" },
  { name: "La Esperanza", color: "#C8102E", logo: "/la-esperanza.jfif" },
]

export type Product = {
  name: string
  store: string
  price: string
  image?: string
}

export const products: Product[] = [
  {
    name: "Cheesecake con Frambuesa",
    store: "Costco",
    price: "$299 MXN",
    image: "/productos/cheesecake frambuesa.jpeg",
  },
  {
    name: "Pastel Chocofudge",
    store: "Costco",
    price: "$349 MXN",
    image: "/productos/chocofudge.jpeg",
  },
  {
    name: "Pastel Red Velvet",
    store: "Costco",
    price: "$329 MXN",
    image: "/productos/red velvet.jpeg",
  },
  {
    name: "Cheesecake con Chispas de Chocolate",
    store: "Costco",
    price: "$289 MXN",
    image: "/productos/cheesecake chispas.jpeg",
  },
  {
    name: "Chocoflan",
    store: "Costco",
    price: "$199 MXN",
    image: "/productos/chocoflan.jpeg",
  },
  {
    name: "Pie de Limón",
    store: "Costco",
    price: "$229 MXN",
    image: "/productos/pie limon.jpeg",
  },
  {
    name: "Strudel de Manzana (Paquete)",
    store: "Costco",
    price: "$189 MXN",
    image: "/productos/strudel manzana.jpeg",
  },
  {
    name: "Chocolatines (Paquete)",
    store: "Costco",
    price: "$189 MXN",
    image: "/productos/chocolatines.jpeg",
  },
  {
    name: "Croissants de Mantequilla (Paquete)",
    store: "Costco",
    price: "$169 MXN",
    image: "/productos/croissants.jpeg",
  },
  {
    name: "Croissants rellenos de Zarzamora (Paquete)",
    store: "Costco",
    price: "$199 MXN",
    image: "/productos/croissants zarzamora.jpeg",
  },
  {
    name: "Papel Higiénico Kirkland Ultra Soft",
    store: "Costco",
    price: "$389 MXN",
    image: "/productos/papel de baño.jpeg",
  },
  {
    name: "Toallitas Húmedas Kirkland (Paquete)",
    store: "Costco",
    price: "$349 MXN",
    image: "/productos/toallitas húmedas.jpeg",
  },
  {
    name: "Arrancagrasa Axion Líquido",
    store: "Costco",
    price: "$139 MXN",
    image: "/productos/arrancagrasa axion.jpeg",
  },
  {
    name: "Leche Light Kirkland (Caja 12 pzas)",
    store: "Costco",
    price: "$249 MXN",
    image: "/productos/leche light kirkland.jpeg",
  },
  {
    name: "Kéfir Orgánico",
    store: "Costco",
    price: "$169 MXN",
    image: "/productos/kefir.jpeg",
  },
  { name: "Caja de docena original glaseada", store: "Krispy Kreme", price: "$329 MXN" },
  { name: "Combo Cuarto de Libra con queso", store: "McDonald's", price: "$159 MXN" },
  { name: "Pizza Hot-N-Ready pepperoni", store: "Little Caesars", price: "$129 MXN" },
  { name: "Rotisserie / pollo rostizado", store: "Costco", price: "$169 MXN" },
  { name: "Paquete de agua embotellada 24 pzas", store: "Sam's Club", price: "$89 MXN" },
  { name: "Despensa básica del mes", store: "Walmart", price: "Bajo cotización" },
  { name: "Pastel de chocolate mediano", store: "El Globo", price: "$389 MXN" },
  { name: "Pan dulce surtido (10 pzas)", store: "La Esperanza", price: "$120 MXN" },
]

export const faqs = [
  {
    q: "¿Cuál es el costo de entrega?",
    a: "El costo depende de cada producto.",
  },
  {
    q: "¿Dónde entregan?",
    a: "Las entregas son en Temascalcingo. Al viajar desde Querétaro, también podemos acordar un punto de entrega en el camino (Santa Rosa, módulo de Solís, Cerritos, San Isidro, La Glorieta).\n\nSe hacen entregas a domicilio en el centro de Temascalcingo (Bonshó, Boqui, El Calvario) por $5.\n\nSe hacen entregas a los alrededores con un costo extra (La Magdalena, Ahuacatitlán, Cruz Blanca, etc.).",
  },
  {
    q: "¿Cuándo debo hacer mi pedido y cuándo se entrega?",
    a: "Los miércoles se envían los precios actualizados y se cierra el pedido el viernes a las 4:00 pm. Las entregas se realizan todos los sábados.",
  },
  {
    q: "¿Puedo pedir productos que no estén en el catálogo?",
    a: "Sí, podemos conseguir cualquier producto fuera del catálogo bajo solicitud y cotización previa.",
  },
  {
    q: "¿Qué métodos de pago aceptan?",
    a: "Aceptamos efectivo y transferencia bancaria. Para clientes nuevos, se requiere un 50% de anticipo al realizar el pedido.",
  },
]

export function orderProductLink(name: string, store: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `¡Hola vendedor! Me interesa pedir: ${name} (${store}).`,
  )}`
}
