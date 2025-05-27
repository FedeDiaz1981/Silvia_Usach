import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CXEYHZUd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DXLV5P_p.mjs';
import { $ as $$FormularioContacto } from '../chunks/FormularioContacto_G_yafbZ1.mjs';
export { renderers } from '../renderers.mjs';

const $$Contacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "FormularioContacto", $$FormularioContacto, {})} ` })}`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/pages/contacto.astro", void 0);

const $$file = "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/pages/contacto.astro";
const $$url = "/Silvia_Usach/contacto";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Contacto,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
