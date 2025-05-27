import { c as createComponent, b as createAstro, m as maybeRenderHead, a as renderTemplate } from './astro/server_CXEYHZUd.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';

const $$Astro = createAstro();
const $$Biografia = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Biografia;
  const { mostrarBoton = false } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<section class="bg-gray-50 py-20 px-6" data-aos="fade-up" data-aos-duration="800"> <div class="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center"> <!-- Texto --> <div> <h2 class="text-3xl sm:text-4xl font-serif font-semibold text-gray-800 mb-6">
Sobre mí
</h2> <p class="text-lg font-serif text-gray-700 leading-relaxed">
Soy Silvia Usach, psicóloga con más de 15 años de experiencia en el
        acompañamiento terapéutico de personas adultas. Creo profundamente en el
        poder de la palabra, la escucha activa y el encuentro genuino para
        transformar aquello que duele.
</p> ${mostrarBoton && renderTemplate`<a href="/biografia" class="mt-6 inline-block px-6 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300">
Conocer más
</a>`} </div> <!-- Imagen --> <!-- Imagen con símbolo de Psicología --> <div data-aos="zoom-in" data-aos-delay="200" class="relative flex justify-center md:justify-end"> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" class="w-72 h-72 md:w-96 md:h-96 text-blue-100 opacity-48 blur-[2px] drop-shadow-md" fill="currentColor"> <text x="50%" y="50%" text-anchor="middle" dominant-baseline="middle" font-size="150">
Ψ
</text> </svg> </div> </div> </section>`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/sections/Biografia.astro", void 0);

const $$PorQueElegirme = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="bg-white py-20 px-6 text-center" data-aos="fade-up" data-aos-duration="800"> <div class="max-w-3xl mx-auto"> <h2 class="font-serif text-3xl sm:text-4xl font-semibold text-gray-800 mb-6">
¿Por qué elegirme?
</h2> <p class="text-lg text-gray-700 leading-relaxed mb-10">
Mi enfoque terapéutico se basa en una escucha activa, empática y sin
      juicios. Me comprometo con cada persona que acompaño, ofreciendo un
      espacio seguro para explorar, comprender y transformar aquello que impide
      avanzar. Trabajo con sensibilidad, claridad y respeto por los tiempos de
      cada proceso.
</p> <a href="/honorarios" class="inline-block px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300">Honorarios & Disponibilidad
</a> </div> </section>`;
}, "/Users/fede/Desktop/Repositorio/02 astro/02 silvia_usach/src/components/sections/PorQueElegirme.astro", void 0);

export { $$Biografia as $, $$PorQueElegirme as a };
