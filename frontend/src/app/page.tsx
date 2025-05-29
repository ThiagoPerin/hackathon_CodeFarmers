"use client"
import { useRef } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button"
import { ChevronsDown } from 'lucide-react';
import WavyPatternBackground from "@/components/custom/backgrounds/WavyPatternBackground";
import CornerPatternBackgorund from "@/components/custom/backgrounds/CornerPatternBackgorund";

export default function Home() {

  const secondSectionRef = useRef<HTMLDivElement>(null);
  const scrollToSecondSection = () => {
    secondSectionRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="h-fit w-full bg-gray-light">

      <div className="h-[95vh] w-full relative">
        <WavyPatternBackground />
        <div className="h-full sm:w-1/2 w-full max-w-3xl relative z-10 sm:p-10 p-6 flex flex-col items-left justify-evenly">
          <div className="flex items-center gap-4">
            <Image src="/logo-transparente.png" alt="Logo" width={130} height={130}></Image>
            <h1 className="sm:text-7xl text-4xl font-light">Nome<strong>App</strong></h1>
          </div>
          <p className="sm:text-5xl text-4xl">Produtividade e sustentabilidade na palma da sua mão</p>
          <p className=" text-lg font-light">NomeApp é a forma mais prática e inteligente de implantar o sistema ILPF na sua propriedade.</p>
          <Button className="w-[200px] p-7 text-md" variant="homeBtn" onClick={scrollToSecondSection}>Quero saber mais <ChevronsDown /></Button>
        </div>
      </div>

      <div ref={secondSectionRef} className="h-[95vh] w-full relative shadow-2xl shadow-black">
        <CornerPatternBackgorund />
        <div className="h-full w-full relative z-10 flex flex-col items-center justify-center gap-8 sm:p-10 p-6 text-center">
          <p className="sm:max-w-1/2 w-full text-lg font-light">
            NomeApp é uma ferramenta que gera sugestões personalizadas para você implantar
            um sistema ILPF - Integração Lavoura-Pecuária-Floresta dentro da sua propriedade.
            Basta informar a área a ser analisada para receber um relatório com insights valiosos
            sobre delimitação de áreas, culturas sugeridas e plano de manejo.
            É mais produtividade com diversificação de renda e menor impacto ambiental.
          </p>
          <p className="sm:text-5xl text-4xl">Comece agora mesmo!</p>
          <Button className="w-fit p-8 text-md" variant="homeBtn">Entrar com o Google</Button>
        </div>
      </div>

    </div>
  );
}
