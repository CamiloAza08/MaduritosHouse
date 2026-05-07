// ===============================
// 🌎 MADURITO;S HOUSE 
// Sistema de Traducción Global
// ===============================
// language.js
window.currentLang = localStorage.getItem("lang") || "es";
// === Todas las traducciones unificadas ===
const translations = {
  es: {
    // ----- General -----
    title: "MADURITO'S HOUSE",
    home: "Inicio",
    menu: "Menú",
    about_us: "Redes Sociales",
    language_label: "Idioma:",
    footer_text: "Comida callejera colombiana en Toronto | Hecho con ❤️ por emprendedores",

  

    // ----- Menú -----
    search_placeholder: "Buscar en el menú...",
    product_empanadas: "Empanadas",
    desc_empanadas: "Empanadas de harina de trigo rellenas de una mezcla de carne molida, huevo y arroz.",
    product_arepa_choclo: "Arepa de Choclo",
    desc_arepa_choclo: "Deliciosa arepa de maíz dulce con queso, ideal para acompañar tu comida",
    product_chicharron_arepa: "Chicharrón con Arepa",
    desc_chicharron_arepa: "Exquisitos chicharrones preparados al mejor estilo colombiano acompañado de arepa de maiz blanco.",
    product_chicharronguacamole: "Chicharrón con Guacamole",
    desc_chicharronguacamole: "Exquisito corte de chicharron acompañado de guacamole cremoso.",
    product_papas_chorreadas: "Papas Chorreadas",
    desc_papas_chorreadas: "Papas cocidas bañadas en exquisito hogao colombiano.",
    product_arepa_blanca:"Arepa Blanca Grande",
    desc_arepa_blanca:"Arepa de maiz blanco cocida a la plancha.",
    product_arepa_queso:"Arepa con Queso",
    desc_arepa_queso:"Arepa de maiz blanco rellena de queso cocida a la plancha.",
    product_patacon: "Canasta de Chicharron",
    desc_patacon: "Canasta de patacon frito acompañado de guacamole cremoso y delicioso corte de chicharron.",
    product_madurochicharronado: "Maduro Chicharronado",
    desc_madurochicharronado: "Delicioso maduro frito con guacamole, maiz y corte exquisito de chicharron.",
    product_maduromixto: "Maduro Mixto",
    desc_maduromixto: "Delicioso maduro frito acompañado con queso salado, pollo desmechado, cebolla caramelizada, tocineta de cerdo, maiz y salsas al gusto.",
    product_madurito:"Madurito",
    desc_madurito:"Maduro frito con crema y queso salado.",
    product_alitas:"Alitas",
    desc_alitas:"Alitas de pollo fritas bañadas en salsa BBQ acompañados con papas a la francesa.",
    product_perro_especial:"Perro Especial",
    desc_perro_especial:"Delicioso perro caliente con guacamole cremoso, maiz con queso y chicharron, acompañado con papas fritas y salsas al gusto.",
    product_perro_loco:"Perro Loco",
    desc_perro_loco:"Delicioso perro caliente con mayonesa, pollo desmechado, queso salado, maiz, tocineta, acompañado de papas fritas y salsas al gusto.",
    product_desgranado:"Desgranado",
    desc_desgranado:"Deliciosa mezcla entre papas fritas, cebolla caramelizada, maiz tierno, queso salado, pollo desmechado, chicharron y salsas al gusto.",
    product_salsa_tartara: "Salsa Tártara",
    desc_salsa_tartara: "Deliciosa salsa tartara tradicional casera.",
    product_salsa_pina: "Salsa de Piña",
    desc_salsa_pina: "Salsa de piña fresca, el toque dulce perfecto para tus platos.",
    product_aji: "Aji",
    desc_aji:"Delicioso y tipico aji colombiano perfecto para acompañar tus comidas.",
    product_hogao: "Hogao",
    desc_hogao: "Salsa tradicional colombiana a base de tomate y cebolla.",
    product_sodas:"Sodas",
    desc_sodas:"Colombiana, Coca Cola y Manzana Postobon.",
    product_limonada:"Limonada de Panela",
    desc_limonada:"Bebida refrescante y tradicional colombiana.",
    add_to_cart: "Agregar al carrito",
    your_order: "Tu pedido",
    send_order: "Enviar pedido por WhatsApp",
    empty_cart: "🗑️ Vaciar carrito",
    scroll_top: "Volver arriba",
    escoger_soda: "Escoge tu soda",
    cancelar_soda:"Cancelar",
    agregado_carrito:"agregado al carrito",
    sold_out:"Agotado",

    // ----- About / Ubicación -----
    social_media: "REDES SOCIALES",
    opening_hours: "Horarios de Apertura",
    day: "Día",
    open_time: "Hora de Apertura",
    close_time: "Hora de Cierre",
    friday: "Viernes",
    saturday: "Sábado",
    sunday: "Domingo",
    location: "📍 Nuestra Ubicación",
    location_text: "Encuéntranos en el corazón de Toronto. ¡Ven a visitarnos!",

    estado: {
    abierto: " Estamos abiertos ahora",
    cerrado: " Cerrado por hoy",
    proximamente: "🕒 Abrimos más tarde",
    cerradoHoy: "Hoy estamos cerrados"
  }

  },

  // ===== English =====
  en: {
    // ----- General -----
    title: "MADURITO'S HOUSE",
    home: "Home",
    menu: "Menu",
    about_us: "Social Media",
    language_label: "Language:",
    footer_text: "Colombian Street Food in Toronto | Made with ❤️ by entrepreneurs",


    // ----- Menu -----
    search_placeholder: "Search in the menu...",
    product_empanadas: "Colombian Patties",
    desc_empanadas: "Wheat flour patties filled with a mixture of ground meat, egg, and rice.",
    product_arepa_choclo: "Corn Arepa",
    desc_arepa_choclo: "Delicious sweet corn arepa with cheese, ideal to accompany your meal.",
    product_chicharron_arepa: "Pork Crackling with Arepa",
    desc_chicharron_arepa: "Exquisite pork rinds prepared in the best Colombian style, accompanied by white corn arepa.",
    product_chicharronguacamole: "Pork Crackling with Guacamole",
    desc_chicharronguacamole: "Exquisite cut of pork accompanied by creamy guacamole.",
    product_papas_chorreadas: "Dripping Potatoes",
    desc_papas_chorreadas: "Boiled potatoes covered in exquisite Colombian hogao sauce.",
    product_arepa_blanca:"Large white Arepa",
    desc_arepa_blanca:"White corn arepa cooked on a griddle.",
    product_arepa_queso:"Cheese Arepa",
    desc_arepa_queso:"White corn arepa filled with cheese, cooked on a griddle.",
    product_patacon: "Plantain with Pork Crackling",
    desc_patacon: "Basket of fried plantain accompanied by creamy guacamole and delicious cut of pork crackling.",
    product_madurochicharronado: "Plantain with pork cracklings",
    desc_madurochicharronado: "Delicious fried sweet plantain with guacamole, corn and an exquisite cut of pork crackling.",
    product_maduromixto: "Mixed Plantain",
    desc_maduromixto: "Delicious fried sweet plantain served with salty cheese, shredded chicken, caramelized onions, pork bacon, corn, and sauces.",
    product_madurito:"Sweet Plantain",
    desc_madurito:"Fried plantain with cream and salty cheese.",
    product_alitas:"Chicken Wings",
    desc_alitas:"Fried chicken wings covered in BBQ sauce served with french fries.",
    product_perro_especial:"Special Hot Dog",
    desc_perro_especial:"Delicious hot dog with creamy guacamole, corn with cheese and pork rinds, accompanied by french fries and sauces.",
    product_perro_loco:"Crazy Hot Dog",
    desc_perro_loco:"Delicious hot dog with mayonnaise, shredded chicken, salty cheese, corn, bacon, served with french fries and sauces.",
    product_desgranado:"Desgranado",
    desc_desgranado:"Delicious mix of french fries, caramelized onions, sweet corn, salty cheese, shredded chicken, pork rinds and sauces.",
    product_salsa_tartara: "Tartar Sauce",
    desc_salsa_tartara: "Delicious homemade traditional tartar sauce.",
    product_salsa_pina: "Pineapple Sauce",
    desc_salsa_pina: "Fresh pineapple sauce, the perfect sweet for your dishes.",
    product_aji:"Aji",
    desc_aji:"Delicious and typical Colombian chili sauce, perfect to accompany your meals.",
    product_hogao: "Hogao",
    desc_hogao: "Traditional Colombian sauce made with tomato and onion.",
    product_sodas:"Sodas",
    desc_sodas:"Colombiana, Coke and Manzana Postobon.",
    product_limonada:"Panela Lemonade",
    desc_limonada:"A refreshing and traditional Colombian drink.",
    add_to_cart: "Add to cart",
    your_order: "Your order",
    send_order: "Send order via WhatsApp",
    empty_cart: "🗑️ Empty cart",
    scroll_top: "Scroll to top",
    escoger_soda:"Choose your soda",
    cancelar_soda:"Cancel",
    agregado_carrito:"added to cart",
    sold_out:"Sold Out",

    // ----- About / Location -----
    social_media: "SOCIAL MEDIA",
    opening_hours: "Opening Hours",
    day: "Day",
    open_time: "Opening Time",
    close_time: "Closing Time",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday",
    location: "📍 Our Location",
    location_text: "Find us in the heart of Toronto. Come visit us!",

    estado: {
    abierto: " We're open now",
    cerrado: " Closed for today",
    proximamente: "🕒 Opening later",
    cerradoHoy: "We're closed today"
  }

  }
};



// === Detectar idioma actual o usar español por defecto ===
let currentLang = localStorage.getItem("lang") || "es";

// === Aplicar traducción a los elementos con data-i18n ===
function updateTexts(lang) {
  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    if (translations[lang] && translations[lang][key]) {
      if (el.placeholder !== undefined && el.tagName === "INPUT") {
        el.placeholder = translations[lang][key];
      } else {
        el.textContent = translations[lang][key];
      }
    }
  });
}

// === Inicialización ===
document.addEventListener("DOMContentLoaded", () => {
  updateTexts(currentLang);

  const langBtn = document.getElementById("language-button");
  const langMenu = document.getElementById("language-menu");

  if (langBtn && langMenu) {
    langBtn.addEventListener("click", () => {
      langMenu.classList.toggle("show");
    });

    langMenu.querySelectorAll("li").forEach((item) => {
      item.addEventListener("click", () => {
        const selectedLang = item.getAttribute("data-lang");
        currentLang = selectedLang;
        localStorage.setItem("lang", selectedLang);
        updateTexts(selectedLang);
        updateHorario(selectedLang);
        langMenu.classList.remove("show");
      });
    });

    document.addEventListener("click", (e) => {
      if (!langBtn.contains(e.target) && !langMenu.contains(e.target)) {
        langMenu.classList.remove("show");
      }
    });
  }
});
