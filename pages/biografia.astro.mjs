import { c as createComponent, r as renderComponent, a as renderTemplate } from '../chunks/astro/server_CXEYHZUd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DXLV5P_p.mjs';
import { $ as $$Biografia$1, a as $$PorQueElegirme } from '../chunks/PorQueElegirme_C0jXK-RC.mjs';
export { renderers } from '../renderers.mjs';

const $$Biografia = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "BaseLayout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "Biografia_bio", $$Biografia$1, {})} ${renderComponent($$result2, "PorQueElegirme", $$PorQueElegirme, {})} ` })}`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/pages/biografia.astro", void 0);

const $$file = "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/pages/biografia.astro";
const $$url = "/Silvia_Usach/biografia";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
    __proto__: null,
    default: $$Biografia,
    file: $$file,
    url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
