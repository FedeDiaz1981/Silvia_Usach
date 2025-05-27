import { c as createComponent, m as maybeRenderHead, a as renderTemplate, r as renderComponent } from '../chunks/astro/server_CXEYHZUd.mjs';
import 'kleur/colors';
import 'html-escaper';
import { $ as $$BaseLayout } from '../chunks/BaseLayout_DXLV5P_p.mjs';
import 'clsx';
export { renderers } from '../renderers.mjs';

const $$TituloHonorarios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="text-center py-16 px-4 bg-blue-50" data-aos="fade-up"> <h1 class="text-4xl font-serif text-gray-800 mb-6">
💼 Honorarios y disponibilidad
</h1> <p class="text-gray-600 max-w-2xl mx-auto">
Cada proceso terapéutico es único. A continuación, encontrarás información
    sobre las sesiones, modalidades y cómo coordinar un encuentro.
</p> </section>`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/sections/TituloHonorarios.astro", void 0);

const $$TarjetaHonorarios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-12 px-4 bg-white" data-aos="fade-up"> <div class="bg-gradient-to-br from-blue-100 to-white rounded-xl shadow-md p-6 max-w-md mx-auto text-center"> <h2 class="text-2xl font-semibold text-gray-800 mb-2">🧠 Sesión individual</h2> <p class="text-gray-700 mb-4">Modalidad presencial u online</p> <div class="text-4xl font-bold text-blue-600 mb-4">$6.000</div> <p class="text-sm text-gray-500">Duración: 50 minutos</p> </div> </section>`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/sections/TarjetaHonorarios.astro", void 0);

const $$Disponibilidad = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-12 px-4 text-center bg-blue-50" data-aos="fade-up"> <h3 class="text-xl font-semibold text-gray-800 mb-4">🕒 Días y horarios disponibles</h3> <ul class="text-gray-700 space-y-2"> <li>🗓️ <strong>Lunes a Viernes</strong> — 10:00 a 13:00 y 15:00 a 20:00</li> <li>🌐 <strong>Modalidad online disponible</strong></li> <li>📍 <strong>Consultorio en Palermo, CABA</strong></li> </ul> </section>`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/sections/Disponibilidad.astro", void 0);

const $$CTAContacto = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 text-center bg-white" data-aos="fade-up"> <a href="https://wa.me/5491123456789?text=Hola Silvia, me gustaría coordinar una sesión" class="inline-block px-8 py-3 bg-green-500 text-white font-medium text-lg rounded-full shadow-lg hover:bg-green-600 hover:scale-105 transition-all duration-300">
📲 Coordinar una primera sesión por WhatsApp
</a> </section>`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/sections/CTAContacto.astro", void 0);

const $$PreguntasFrecuentes = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="py-16 px-6 bg-blue-50 text-gray-800" data-aos="fade-up"> <div class="max-w-3xl mx-auto"> <h2 class="text-2xl font-serif font-semibold text-center mb-8">❓ Preguntas Frecuentes</h2> <details class="mb-4 bg-white rounded-lg shadow p-4 cursor-pointer"> <summary class="font-medium text-lg">¿Cómo es la primera sesión?</summary> <p class="mt-2 text-gray-600">La primera sesión está orientada a conocernos, entender tus necesidades y definir juntos un plan de trabajo terapéutico.</p> </details> <details class="mb-4 bg-white rounded-lg shadow p-4 cursor-pointer"> <summary class="font-medium text-lg">¿Ofrecés sesiones online?</summary> <p class="mt-2 text-gray-600">Sí, trabajo tanto de forma presencial en Palermo como online vía videollamada.</p> </details> <details class="mb-4 bg-white rounded-lg shadow p-4 cursor-pointer"> <summary class="font-medium text-lg">¿Puedo cancelar una sesión?</summary> <p class="mt-2 text-gray-600">Sí, con al menos 24 hs de anticipación para reprogramar sin costo. Cancelaciones fuera de ese plazo se consideran sesión tomada.</p> </details> <details class="mb-4 bg-white rounded-lg shadow p-4 cursor-pointer"> <summary class="font-medium text-lg">¿La terapia es confidencial?</summary> <p class="mt-2 text-gray-600">Absolutamente. Todo lo que se habla en sesión queda resguardado por el secreto profesional.</p> </details> <details class="mb-4 bg-white rounded-lg shadow p-4 cursor-pointer"> <summary class="font-medium text-lg">¿Cómo coordino una cita?</summary> <p class="mt-2 text-gray-600">Podés contactarme por WhatsApp, mail o mediante el formulario de contacto del sitio.</p> </details> </div> </section>`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/sections/PreguntasFrecuentes.astro", void 0);

const $$Honorarios = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$BaseLayout, {}, { "default": ($$result2) => renderTemplate` ${renderComponent($$result2, "TituloHonorarios", $$TituloHonorarios, {})} ${renderComponent($$result2, "TarjetaHonorarios", $$TarjetaHonorarios, {})} ${renderComponent($$result2, "Disponibilidad", $$Disponibilidad, {})} ${renderComponent($$result2, "PreguntasFrecuentes", $$PreguntasFrecuentes, {})} ${renderComponent($$result2, "CTAContacto", $$CTAContacto, {})} ` })}`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/pages/honorarios.astro", void 0);

const $$file = "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/pages/honorarios.astro";
const $$url = "/Silvia_Usach/honorarios";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Honorarios,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
