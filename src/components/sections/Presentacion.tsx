import { useEffect, useState } from "preact/hooks";
import MaquinaDeEscribir from "../MaquinaDeEscribir";

export default function Presentacion() {
  const [showMatricula, setShowMatricula] = useState(false);
  const [showSlogan, setShowSlogan] = useState(false);
  const [showBoton, setShowBoton] = useState(false);

  const handleFinishTyping = () => {
    setTimeout(() => {
      setShowMatricula(true);

      setTimeout(() => {
        setShowSlogan(true);

        setTimeout(() => {
          setShowBoton(true);
        }, 700);
      }, 600);
    }, 500);
  };

  return (
    <section class="relative min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gradient-to-b from-white to-blue-50 overflow-hidden">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-200 opacity-60 blur-2xl animate-pulse z-0"></div>

      <div class="relative z-10 flex flex-col items-center">
        <div className="text-5xl sm:text-6xl font-extrabold text-gray-800 drop-shadow-md mb-4">
          Terapia Online
        </div>

        <MaquinaDeEscribir
          texto="Silvia Usach"
          velocidad={120}
          clase="text-4xl sm:text-4xl font-extrabold text-gray-800 drop-shadow-md mb-4"
          onFinish={handleFinishTyping}
        />

        {showMatricula && (
          <p class="mt-4 text-lg text-gray-600 font-sans animate-fade-in-soft">
            Matrícula 40522
          </p>
        )}

        {showSlogan && (
          <p class="mt-3 text-xl text-gray-700 font-medium tracking-wide animate-fade-in-soft delay-200">
            Terapia virtual de <span class="text-2xl">🇦🇷</span> al <span class="text-2xl">🌍</span>
          </p>
        )}

        {showBoton && (
          <a
            href="facetime:silvia.usach@example.com"
            class="mt-6 animate-fade-in-soft delay-300
              px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow-lg border-2 border-transparent
              transition-all duration-300 ease-in-out
              hover:bg-white hover:text-blue-600 hover:border-blue-600
              active:bg-yellow-400 active:text-black active:border-yellow-500 active:shadow-xl"
          >
            Hablamos?
          </a>
        )}
      </div>
    </section>
  );
}
