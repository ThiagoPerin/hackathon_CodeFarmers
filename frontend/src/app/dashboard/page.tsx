"use client"
import { useRouter } from "next/navigation"
import CustomMenuButton from '@/components/custom/buttons/CustomMenuButton';
import RoundImageButton from '@/components/custom/buttons/RoundImageButton';
import { MapPin, Upload, ArrowRight } from 'lucide-react';
import Image from 'next/image';

export default function Dashboard() {
  const router = useRouter()

  return (
    <div className="w-[calc(100vw-60px)] h-full flex flex-col sm:items-start items-center justify-start p-6 gap-8 overflow-auto">

      <div className="w-fit h-fit text-4xl font-bold text-green-dark">Bem vindo, Usuário!</div>

      <div className="w-fit h-fit flex flex-col sm:items-start items-center justify-start gap-2">
        <div className="text-xl">Novo Projeto</div>
        <div className="h-fit w-fit flex sm:justify-start justify-center gap-4 flex-wrap">
          <CustomMenuButton label="Selecionar área no mapa" onClick={() => router.push("/dashboard/map-selection")}>
            <MapPin size={50} />
          </CustomMenuButton>
          <CustomMenuButton label="Enviar arquivo" onClick={() => router.push("/dashboard/upload")}>
            <Upload size={50} />
          </CustomMenuButton>
        </div>
      </div>

      <div className="w-fit h-fit flex flex-col sm:items-start items-center justify-start gap-2">
        <div className="text-xl">Últimos projetos</div>
        <div className="h-fit w-fit flex sm:justify-start justify-center gap-4 flex-wrap">
          <RoundImageButton label="Meu projeto 1">
            <Image src="/map_image1.webp" alt="Logo" fill={true}></Image>
          </RoundImageButton>
          <RoundImageButton label="Meu projeto 2">
            <Image src="/map_image2.webp" alt="Logo" fill={true}></Image>
          </RoundImageButton>
          <RoundImageButton label="Meu projeto 3">
            <Image src="/map_image3.webp" alt="Logo" fill={true}></Image>
          </RoundImageButton>
          <RoundImageButton label="Meu projeto 4">
            <Image src="/map_image4.webp" alt="Logo" fill={true}></Image>
          </RoundImageButton>
          <RoundImageButton label="Ver todos os projetos" onClick={() => router.push("/dashboard/projects")}>
            <ArrowRight size={50} />
          </RoundImageButton>
        </div>
      </div>

    </div>
  );
}
