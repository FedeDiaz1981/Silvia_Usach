import { useState, useEffect, useRef } from "preact/hooks";

interface Props {
  texto: string;
  velocidad?: number;
  clase?: string;
  onFinish?: () => void;
}

export default function MaquinaDeEscribir({
  texto,
  velocidad = 100,
  clase = "",
  onFinish = () => {},
}: Props) {
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
  }, [texto, velocidad, onFinish]);

  return (
    <h1
      class={`whitespace-pre-line text-center font-serif ${clase}`}
      aria-live="polite"
      role="heading"
      aria-level={1}
    >
      {visibleText}
    </h1>
  );
}
