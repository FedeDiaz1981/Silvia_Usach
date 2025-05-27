import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CXEYHZUd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DXLV5P_p.mjs';
import 'clsx';
import { jsxs, jsx, Fragment } from 'preact/jsx-runtime';
import { useState, useRef, useEffect } from 'preact/hooks';
import { $ as $$Biografia, a as $$PorQueElegirme } from '../chunks/PorQueElegirme_C0jXK-RC.mjs';
import { $ as $$FormularioContacto } from '../chunks/FormularioContacto_G_yafbZ1.mjs';
export { renderers } from '../renderers.mjs';

const $$SobreLaTerapia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-20 px-6 text-center" data-aos="fade-up" data-aos-duration="800"> <div class="max-w-3xl mx-auto relative"> <h2 class="text-3xl sm:text-4xl font-serif font-semibold text-gray-800 mb-6">
Sobre la terapia
</h2> <p class="text-4xl font-script italic text-blue-900 leading-relaxed indent-8 relative z-10"> <span class="absolute -top-6 -left-4 text-6xl text-blue-300 select-none z-0">&ldquo;</span>
La terapia psicológica es un espacio de escucha, reflexión y acompañamiento.
        Mi enfoque busca comprender tus necesidades en profundidad para que puedas
        avanzar hacia una vida con mayor claridad, calma y sentido.
<span class="text-6xl text-blue-300 align-bottom select-none">&rdquo;</span> </p> </div> </section>`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/sections/SobreLaTerapia.astro", void 0);

function MaquinaDeEscribir({
  texto,
  velocidad = 100,
  clase = "",
  onFinish = () => {
  }
}) {
  const [visibleText, setVisibleText] = useState("");
  const indexRef = useRef(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (indexRef.current < texto.length) {
        setVisibleText((prev) => prev + texto[indexRef.current]);
        indexRef.current += 1;
      } else {
        clearInterval(interval);
        onFinish();
      }
    }, velocidad);
    return () => clearInterval(interval);
  }, [texto, velocidad]);
  return /* @__PURE__ */ jsxs("h1", { class: `whitespace-pre text-center font-serif ${clase}`, children: [
    visibleText,
    /* @__PURE__ */ jsx("span", { class: "inline-block w-[1ch] animate-blink text-gray-800", children: "|" })
  ] });
}

function Presentacion() {
  const [visible, setVisible] = useState(false);
  return /* @__PURE__ */ jsxs("section", { class: "relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-white to-blue-50 overflow-hidden", children: [
    /* @__PURE__ */ jsx("div", { class: "absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-200 opacity-60 blur-2xl animate-pulse z-0" }),
    /* @__PURE__ */ jsxs("div", { class: "relative z-10 flex flex-col items-center", children: [
      /* @__PURE__ */ jsx(
        MaquinaDeEscribir,
        {
          texto: "Silvia Usach",
          velocidad: 120,
          clase: "text-5xl sm:text-6xl font-extrabold text-gray-800 drop-shadow-md mb-4",
          onFinish: () => setVisible(true)
        }
      ),
      visible && /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx("p", { class: "mt-4 text-lg text-gray-600 font-sans animate-fade-in", children: "Psicología para adultos desde la escucha, el encuentro y el cuidado." }),
        /* @__PURE__ */ jsx(
          "a",
          {
            href: "facetime:silvia.usach@example.com",
            class: "mt-8 inline-block px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 animate-fade-in",
            children: "Hablamos?"
          }
        )
      ] })
    ] })
  ] });
}

const $$Presentacion = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Presentacion_2", Presentacion, { "client:load": true, "client:component-hydration": "load", "client:component-path": "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/sections/Presentacion", "client:component-export": "default" })}`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/sections/Presentacion.astro", void 0);

const $$ContactoGratis = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-blue-50 py-20 px-6 text-center" data-aos="fade-up" data-aos-duration="800"> <div class="max-w-xl mx-auto"> <h2 class="font-serif text-3xl sm:text-4xl font-semibold text-blue-800 mb-6">
Primera toma de contacto gratis
</h2> <p class="text-lg text-blue-700 mb-8 leading-relaxed">
Un primer encuentro para conocernos, charlar sobre lo que te trae hasta
        acá y definir juntos el camino terapéutico.
</p> <a href="facetime:silvia.usach@example.com" class="inline-block px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">
Hablamos ahora
</a> </div> </section>`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/sections/ContactoGratis.astro", void 0);

const $$Index = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Presentacion", $$Presentacion, {})} ${renderComponent($$result2, "SobreLaTerapia", $$SobreLaTerapia, {})} ${renderComponent($$result2, "Biografia", $$Biografia, { "mostrarBoton": true })} ${renderComponent($$result2, "PorQueElegirme", $$PorQueElegirme, {})} ${renderComponent($$result2, "ContactoGratis", $$ContactoGratis, {})} ${renderComponent($$result2, "FormularioContacto", $$FormularioContacto, {})} ` })}`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/pages/index.astro", void 0);

const $$file = "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/pages/index.astro";
const $$url = "/Silvia_Usach";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
