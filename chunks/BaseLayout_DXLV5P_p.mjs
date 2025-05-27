import { c as createComponent, r as renderComponent, a as renderTemplate, m as maybeRenderHead, d as addAttribute, e as renderSlot, f as renderHead } from './astro/server_CXEYHZUd.mjs';
import 'kleur/colors';
import 'html-escaper';
/* empty css                             */
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'preact/hooks';
import 'clsx';

function MobileNavbar() {
  const [open, setOpen] = useState(false);
  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [open]);
  return /* @__PURE__ */ jsx("nav", { class: "w-full bg-white shadow-md sticky top-0 z-50", children: /* @__PURE__ */ jsxs("div", { class: "max-w-7xl mx-auto px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between relative", children: [
    /* @__PURE__ */ jsxs("div", { class: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("a", { href: "/", class: "text-xl font-semibold text-gray-800", children: "Silvia Usach" }),
      /* @__PURE__ */ jsxs(
        "button",
        {
          class: "md:hidden w-8 h-8 flex flex-col justify-between items-center relative z-50 focus:outline-none",
          onClick: () => setOpen(!open),
          "aria-label": "Abrir menú",
          children: [
            /* @__PURE__ */ jsx("span", { class: `block h-0.5 w-full bg-gray-800 transform transition duration-300 ease-in-out ${open ? "rotate-45 translate-y-2" : ""}` }),
            /* @__PURE__ */ jsx("span", { class: `block h-0.5 w-full bg-gray-800 transition duration-300 ease-in-out ${open ? "opacity-0" : ""}` }),
            /* @__PURE__ */ jsx("span", { class: `block h-0.5 w-full bg-gray-800 transform transition duration-300 ease-in-out ${open ? "-rotate-45 -translate-y-2" : ""}` })
          ]
        }
      )
    ] }),
    open && /* @__PURE__ */ jsx("div", { class: "fixed inset-0 bg-black/30 backdrop-blur-sm md:hidden z-40", onClick: () => setOpen(false) }),
    /* @__PURE__ */ jsxs(
      "ul",
      {
        class: `relative z-50 flex flex-col md:flex-row mt-4 md:mt-0 space-y-4 md:space-y-0 md:space-x-6 text-gray-700 text-base font-medium transition-all duration-300 ease-in-out overflow-hidden ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0 md:max-h-screen md:opacity-100"}`,
        children: [
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/biografia", class: "hover:text-blue-600", children: "Biografía" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/honorarios", class: "hover:text-blue-600", children: "Honorarios" }) }),
          /* @__PURE__ */ jsx("li", { children: /* @__PURE__ */ jsx("a", { href: "/contacto", class: "hover:text-blue-600", children: "Contacto" }) })
        ]
      }
    )
  ] }) });
}

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "MobileNavbar", MobileNavbar, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/MobileNavbar.jsx", "client:component-export": "default" })}`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/Navbar.astro", void 0);

const $$Footer = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<footer class="bg-gray-800 text-white text-center py-8 mt-20"> <p class="text-sm">&copy; ${(/* @__PURE__ */ new Date()).getFullYear()} Silvia Usach · Psicología · Todos los derechos reservados</p> <p class="mt-2"> <a href="facetime:silvia.usach@example.com" class="underline hover:text-blue-300">Hablamos por FaceTime</a> </p> </footer>`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/Footer.astro", void 0);

const $$WhatsappFloat = createComponent(($$result, $$props, $$slots) => {
  const telefono = "5491123456789";
  const mensaje = encodeURIComponent("Hola Silvia, me gustar\xEDa hacerte una consulta sobre tus sesiones :)");
  const url = `https://wa.me/${telefono}?text=${mensaje}`;
  return renderTemplate`${maybeRenderHead()}<a${addAttribute(url, "href")} target="_blank" rel="noopener noreferrer" class="fixed bottom-6 right-6 z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-all duration-300 flex items-center justify-center" aria-label="Chatear por WhatsApp"> <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="currentColor" viewBox="0 0 24 24"> <path d="M20.52 3.48A11.8 11.8 0 0 0 12 0a11.79 11.79 0 0 0-9.29 18.78L0 24l5.37-2.69A11.79 11.79 0 0 0 12 24c6.62 0 12-5.38 12-12 0-3.19-1.24-6.18-3.48-8.52zM12 21.7a9.66 9.66 0 0 1-5.23-1.5l-.37-.23-3.19 1.6.85-3.13-.25-.38A9.68 9.68 0 1 1 12 21.7zm5.41-7.49c-.29-.15-1.71-.84-1.98-.94s-.46-.15-.65.14-.74.94-.91 1.13-.34.22-.63.07a7.89 7.89 0 0 1-2.33-1.44 8.78 8.78 0 0 1-1.62-2.03c-.17-.29 0-.45.13-.6.13-.13.29-.34.44-.51s.2-.29.29-.49a.55.55 0 0 0 0-.53c-.08-.15-.65-1.57-.9-2.14s-.47-.5-.65-.51a.56.56 0 0 0-.48 0c-.14 0-.53.07-.8.34s-1.05 1-.88 2.43 1.14 2.67 1.3 2.85a10.43 10.43 0 0 0 4.7 3.49c.66.22 1.17.35 1.57.45.66.14 1.26.12 1.74.07.53-.08 1.71-.7 1.95-1.37s.24-1.25.17-1.37c-.07-.11-.26-.18-.55-.33z"></path> </svg> </a>`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/WhatsappFloat.astro", void 0);

var __freeze = Object.freeze;
var __defProp = Object.defineProperty;
var __template = (cooked, raw) => __freeze(__defProp(cooked, "raw", { value: __freeze(cooked.slice()) }));
var _a;
const $$BaseLayout = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate(_a || (_a = __template(['<html lang="es"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="https://unpkg.com/aos@2.3.4/dist/aos.css"><link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Playfair+Display:wght@600;700&display=swap" rel="stylesheet"><link href="https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap" rel="stylesheet">', "</head> ", " ", ' <main class="container mx-auto p-6"> ', " </main> ", ' <script src="https://unpkg.com/aos@2.3.4/dist/aos.js" onload="AOS.init();"><\/script>  </html>'])), renderHead(), renderComponent($$result, "WhatsappFloat", $$WhatsappFloat, {}), renderComponent($$result, "Navbar", $$Navbar, {}), renderSlot($$result, $$slots["default"]), renderComponent($$result, "Footer", $$Footer, {}));
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/layouts/BaseLayout.astro", void 0);

export { $$BaseLayout as $ };
