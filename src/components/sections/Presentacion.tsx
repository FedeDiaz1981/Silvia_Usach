import { useEffect, useState } from "preact/hooks";
import MaquinaDeEscribir from "../MaquinaDeEscribir";

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

  // bg-gradient-to-b from-white to-blue-50

  return (
    <section class="min-h-[400px] relative flex flex-row items-start justify-center text-center px-4  overflow-hidden pt-[9%]">
      <div class="absolute inset-0 bg-gradient-to-br from-blue-100 via-white to-blue-200 opacity-60 blur-2xl animate-pulse z-0 hidden"></div>

      <div class=" z-10 flex flex-col gap-20 sm:gap-[200px] pt-[8%] pb-[15%]">
        <div className="text-5xl sm:text-6xl font-extrabold drop-shadow-md mb-4">
          Terapia Online
        </div>
       
        <div class="hidden">
          <a
            href="facetime:silvia.usach@example.com"
            class="mt-6 animate-fade-in-soft delay-800
              px-8 py-3 bg-blue-600 text-white font-medium text-lg rounded-full shadow-lg border-2 border-transparent
              transition-all duration-300 ease-in-out
              hover:bg-white hover:text-blue-600 hover:border-blue-600
              active:bg-yellow-400 active:text-black active:border-yellow-500 active:shadow-xl"
          >
            Hablamos?
          </a>
        </div>
      </div>
    </section>
  );
}
