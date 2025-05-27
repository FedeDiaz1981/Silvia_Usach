import { useState } from "preact/hooks";
import MaquinaDeEscribir from "../MaquinaDeEscribir";

export default function Presentacion() {
  const [visible, setVisible] = useState(false);

  return (
    <section class="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-200 opacity-60 blur-2xl animate-pulse z-0"></div>

      <div class="relative z-10 flex flex-col items-center">
        <MaquinaDeEscribir
          texto="Silvia Usach"
          velocidad={120}
          clase="text-5xl sm:text-6xl font-extrabold text-gray-800 drop-shadow-md mb-4"
          onFinish={() => setVisible(true)}
        />

        {visible && (
          <>
            <p class="mt-4 text-lg text-gray-600 font-sans animate-fade-in">
              Psicología para adultos desde la escucha, el encuentro y el cuidado.
            </p>
            <a
              href="facetime:silvia.usach@example.com"
              class="mt-8 inline-block px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow-lg hover:bg-blue-700 hover:scale-105 transition-all duration-300 animate-fade-in"
            >
              Hablamos?
            </a>
          </>
        )}
      </div>
    </section>
  );
}
