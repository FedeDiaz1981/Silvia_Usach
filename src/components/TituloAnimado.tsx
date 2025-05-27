import { h } from "preact";

interface Props {
  texto: string;
  clase?: string;
  delayBase?: number;
}

export default function TituloAnimado({ texto, clase = "", delayBase = 100 }: Props) {
  return (
    <h1 class={`flex flex-wrap justify-center ${clase}`}>
      {texto.split("").map((char, index) => (
        <span
          key={index}
          class="inline-block"
          data-aos="fade-up"
          data-aos-delay={index * delayBase}
          data-aos-duration="500"
        >
          {char === " " ? "\u00A0" : char}
        </span>
      ))}
    </h1>
  );
}
