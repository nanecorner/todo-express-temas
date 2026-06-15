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
  note?: string
}

export const products: Product[] = [
  {
    name: "Cheesecake con Frambuesa",
    store: "Costco",
    price: "$300 MXN",
    image: "/productos/costco/cheesecake frambuesa.jpeg",
  },
  {
    name: "Pastel Chocofudge",
    store: "Costco",
    price: "$400 MXN",
    image: "/productos/costco/chocofudge.jpeg",
  },
  {
    name: "Pastel Red Velvet",
    store: "Costco",
    price: "$350 MXN",
    image: "/productos/costco/red velvet.jpeg",
  },
  {
    name: "Cheesecake con Chispas de Chocolate",
    store: "Costco",
    price: "$330 MXN",
    image: "/productos/costco/cheesecake chispas.jpeg",
  },
  {
    name: "Chocoflan",
    store: "Costco",
    price: "$230 MXN",
    image: "/productos/costco/chocoflan.jpeg",
  },
  {
    name: "Pay de Limón",
    store: "Costco",
    price: "$230 MXN",
    image: "/productos/costco/pie limon.jpeg",
  },
  {
    name: "Strudel de Manzana (Paquete)",
    store: "Costco",
    price: "$130 MXN",
    image: "/productos/costco/strudel manzana.jpeg",
  },
  {
    name: "Chocolatines (Paquete)",
    store: "Costco",
    price: "$160 MXN",
    image: "/productos/costco/chocolatines.jpeg",
  },
  {
    name: "Croissants de Mantequilla (Paquete)",
    store: "Costco",
    price: "$170 MXN",
    image: "/productos/costco/croissants.jpeg",
  },
  {
    name: "Croissants rellenos de Zarzamora (Paquete)",
    store: "Costco",
    price: "$225 MXN",
    image: "/productos/costco/croissants zarzamora.jpeg",
  },
  {
    name: "Papel Higiénico Kirkland",
    store: "Costco",
    price: "$490 MXN",
    image: "/productos/costco/papel de baño.jpeg",
  },
  {
    name: "Toallitas Húmedas Kirkland (Paquete)",
    store: "Costco",
    price: "$500 MXN",
    image: "/productos/costco/toallitas húmedas.jpeg",
  },
  {
    name: "Arrancagrasa Axion Líquido",
    store: "Costco",
    price: "$180 MXN",
    image: "/productos/costco/arrancagrasa axion.jpeg",
  },
  {
    name: "Leche Light Kirkland (Caja 12 pzas)",
    store: "Costco",
    price: "$320 MXN",
    image: "/productos/costco/leche light kirkland.jpeg",
  },
  {
    name: "Kéfir Orgánico",
    store: "Costco",
    price: "$200 MXN",
    image: "/productos/costco/kefir.jpeg",
  },
  {
    name: "Papel Higiénico Cottonelle",
    store: "Sam's Club",
    price: "$260 MXN",
    image: "/productos/sams/cotonelle.jpeg",
  },
  {
    name: "Honey Keeper",
    store: "Sam's Club",
    price: "$240 MXN",
    image: "/productos/sams/honey keeper.jpeg",
  },
  {
    name: "Aceite Nutrioli",
    store: "Sam's Club",
    price: "$130 MXN",
    image: "/productos/sams/nutrioli.jpeg",
  },
  {
    name: "Jabón Palmolive Neutro",
    store: "Sam's Club",
    price: "$135 MXN",
    image: "/productos/sams/palmolive neutro.jpeg",
  },
  {
    name: "Shampoo Pantene",
    store: "Sam's Club",
    price: "$160 MXN",
    image: "/productos/sams/pantene.jpeg",
  },
  {
    name: "Desodorante Rexona Aerosol XL",
    store: "Sam's Club",
    price: "$250 MXN",
    image: "/productos/sams/rexona aerosol xl.jpeg",
  },
  {
    name: "Desodorante Rexona Aerosol",
    store: "Sam's Club",
    price: "$210 MXN",
    image: "/productos/sams/rexona aerosol.jpeg",
  },
  {
    name: "Desodorante Rexona Hombre",
    store: "Sam's Club",
    price: "$230 MXN",
    image: "/productos/sams/rexona hombre.jpeg",
  },
  {
    name: "Desodorante Rexona Mujer",
    store: "Sam's Club",
    price: "$230 MXN",
    image: "/productos/sams/rexona mujer.jpeg",
  },
  {
    name: "Toallas Femeninas Saba Rosa",
    store: "Sam's Club",
    price: "$110 MXN",
    image: "/productos/sams/saba rosa.jpeg",
  },
  {
    name: "Leche Santa Clara Entera",
    store: "Sam's Club",
    price: "$340 MXN",
    image: "/productos/sams/santa clara entera.jpeg",
  },
  {
    name: "Papel Higiénico Ultra Soft",
    store: "Sam's Club",
    price: "$390 MXN",
    image: "/productos/sams/ultrasoft.jpeg",
  },

  // Walmart
  {
    name: "Cheerios",
    store: "Walmart",
    price: "$80 MXN",
    image: "/productos/walmart/Cheerios.jpeg",
  },
  {
    name: "Rascals Etapa 3",
    store: "Walmart",
    price: "$700 MXN",
    image: "/productos/walmart/Rascals etapa 3.jpeg",
  },
  {
    name: "Rascals Etapa 4",
    store: "Walmart",
    price: "$700 MXN",
    image: "/productos/walmart/Rascals etapa 4.jpeg",
  },
  {
    name: "Rascals Etapa 6",
    store: "Walmart",
    price: "$250 MXN",
    image: "/productos/walmart/Rascals etapa 6.jpeg",
  },
  {
    name: "Rascals Etapa 7",
    store: "Walmart",
    price: "$1000 MXN",
    image: "/productos/walmart/Rascals etapa 7.jpeg",
  },
  {
    name: "Papel Higiénico Cottonelle Negro",
    store: "Walmart",
    price: "$240 MXN",
    image: "/productos/walmart/cotonelle negro.jpeg",
  },

  // McDonald's
  {
    name: "Big Mac",
    store: "McDonald's",
    price: "$120 MXN",
    image: "/productos/mcdonalds/Big mac.jpeg",
  },
  {
    name: "Cajita Feliz Hamburguesa con Queso",
    store: "McDonald's",
    price: "$145 MXN",
    image: "/productos/mcdonalds/cajita feliz hamburguesa con queso.jpeg",
  },
  {
    name: "Cajita Feliz Hamburguesa sin Queso",
    store: "McDonald's",
    price: "$145 MXN",
    image: "/productos/mcdonalds/cajita feliz hamburguesa sin queso.jpeg",
  },
  {
    name: "Cajita Feliz Nuggets",
    store: "McDonald's",
    price: "$145 MXN",
    image: "/productos/mcdonalds/cajita feliz nuggets.jpeg",
  },
  {
    name: "McPollo",
    store: "McDonald's",
    price: "$120 MXN",
    image: "/productos/mcdonalds/mcPollo.jpeg",
  },
  {
    name: "McTrío Copa Mundial",
    store: "McDonald's",
    price: "$240 MXN",
    image: "/productos/mcdonalds/mcTrío Copa Mundial.jpeg",
  },

  // Little Caesars
  {
    name: "Crazy Puffs",
    store: "Little Caesars",
    price: "$80 MXN",
    image: "/productos/little caesars/crazy puffs.jpeg",
  },
  {
    name: "Pizza 3 Carnes",
    store: "Little Caesars",
    price: "$200 MXN",
    image: "/productos/little caesars/pizza 3 carnes.jpeg",
  },
  {
    name: "Pizza Extra Extra",
    store: "Little Caesars",
    price: "$160 MXN",
    image: "/productos/little caesars/pizza extra extra.jpeg",
  },
  {
    name: "Pizza Pepperoni",
    store: "Little Caesars",
    price: "$150 MXN",
    image: "/productos/little caesars/pizza pepperoni.jpeg",
  },
  {
    name: "Pizza Queso",
    store: "Little Caesars",
    price: "$140 MXN",
    image: "/productos/little caesars/pizza queso.jpeg",
  },

  // Krispy Kreme
  {
    name: "Bites",
    store: "Krispy Kreme",
    price: "$80 MXN",
    image: "/productos/krispy kreme/bites.jpeg",
  },
  {
    name: "Docena Glaseada",
    store: "Krispy Kreme",
    price: "$260 MXN",
    note: "* Día 12: $190",
    image: "/productos/krispy kreme/docena glaseada.jpeg",
  },
  {
    name: "Docena Select",
    store: "Krispy Kreme",
    price: "$360 MXN",
    image: "/productos/krispy kreme/docena select.jpeg",
  },

  // El Globo
  {
    name: "Pastel Carlos V",
    store: "El Globo",
    price: "$750 MXN",
    image: "/productos/globo/pastel carlos v.jpeg",
  },
  {
    name: "Pastel Gansito",
    store: "El Globo",
    price: "$700 MXN",
    image: "/productos/globo/pastel gansito.jpeg",
  },
  {
    name: "Pastel Mil Hojas Circular",
    store: "El Globo",
    price: "$700 MXN",
    image: "/productos/globo/pastel mil hojas circular.jpeg",
  },
  {
    name: "Pastel Mil Hojas Rectangular",
    store: "El Globo",
    price: "$700 MXN",
    image: "/productos/globo/pastel mil hojas rectangular.jpeg",
  },
  {
    name: "Pastel Salón",
    store: "El Globo",
    price: "$850 MXN",
    image: "/productos/globo/pastel salón.jpeg",
  },

  // La Esperanza
  {
    name: "Croissant Turín",
    store: "La Esperanza",
    price: "$50 MXN",
    image: "/productos/esperanza/croissant turin.jpeg",
  },
  {
    name: "Dona Turín",
    store: "La Esperanza",
    price: "$40 MXN",
    image: "/productos/esperanza/dona turin.jpeg",
  },
  {
    name: "Pastel Crepas Carlos V",
    store: "La Esperanza",
    price: "$440 MXN",
    image: "/productos/esperanza/pastel crepas carlos v.jpeg",
  },
  {
    name: "Pastel Crepas Conejo",
    store: "La Esperanza",
    price: "$440 MXN",
    image: "/productos/esperanza/pastel crepas conejo.jpeg",
  },
  {
    name: "Pay Cookies & Cream",
    store: "La Esperanza",
    price: "$40 MXN",
    image: "/productos/esperanza/pay cookies & cream.jpeg",
  },
  {
    name: "Rol de Canela",
    store: "La Esperanza",
    price: "$40 MXN",
    image: "/productos/esperanza/rol canela.jpeg",
  },
  {
    name: "Roll de Chocolate",
    store: "La Esperanza",
    price: "$40 MXN",
    image: "/productos/esperanza/roll chocolate.jpeg",
  },
  {
    name: "Roll de Natilla",
    store: "La Esperanza",
    price: "$40 MXN",
    image: "/productos/esperanza/roll natilla.jpeg",
  },
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
