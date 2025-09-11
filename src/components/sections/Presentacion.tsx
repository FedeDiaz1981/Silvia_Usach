import { useState } from "preact/hooks";

export default function Presentacion() {
  const [showMatricula, setShowMatricula] = useState(false);
  const [showBoton, setShowBoton] = useState(false);
  const [showSlogan, setShowSlogan] = useState(false);

  const handleFinishTyping = () => {
    setTimeout(() => {
      setShowMatricula(true);
      setTimeout(() => {
        setShowBoton(true);
        setShowSlogan(true);
      }, 800);
    }, 500);
  };

  return (
    <section
      class="min-h-[400px] relative flex flex-col items-center justify-center text-center px-4 overflow-hidden pt-[9%] motion-safe:transition-all"
      aria-label="Presentación de Silvia Usach"
    >
      {/* Descripción oculta para lectores de pantalla */}
      <p class="sr-only">
        Bienvenido al sitio de la Licenciada Silvia Usach, psicóloga especializada en terapia online.
      </p>

      {/* Fondo animado (opcional y escondido en preferencias de accesibilidad) */}
      <div
        aria-hidden="true"
        class="absolute inset-0 z-0 hidden motion-safe:block"
      ></div>

      {/* Contenido principal */}
      <div class="relative z-10 flex flex-col items-center gap-8 sm:gap-28 pt-[8%] pb-[15%] max-w-4xl w-full">
        <header>
          <h1 class="text-5xl sm:text-6xl font-extrabold drop-shadow-md leading-tight">
            Terapia Online
          </h1>
          <p class="text-2xl sm:text-3xl mt-4 font-semibold">
            Lic. Silvia Usach
          </p>
        </header>

        {showBoton && (
          <a
            href="facetime:silvia.usach@example.com"
            class="px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow-lg border-2 border-transparent
            transition-all duration-300 ease-in-out
            hover:bg-white hover:text-blue-600 hover:border-blue-600
            active:bg-yellow-400 active:text-black active:border-yellow-500 active:shadow-xl"
            role="button"
            aria-label="Contactar ahora vía FaceTime"
          >
            ¿Hablamos?
          </a>
        )}

        {showSlogan && (
          <p class="mt-4 text-lg text-gray-700 italic">
            Espacio seguro para tu bienestar emocional.
          </p>
        )}
      </div>
    </section>
  );
}
