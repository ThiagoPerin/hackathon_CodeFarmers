"use client"
import { useEffect, useState } from "react";
import Image from "next/image";
import LegendCard from "@/components/custom/cards/LegendCard";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { usePageTitle } from "@/context/PageTitleContext";
import { Button } from "@/components/ui/button";
import { Check, Download, Redo2 } from "lucide-react";
import ReportAccordion from "@/components/custom/accordions/ReportAccordion";

export default function UploadFile() {
    const { setTitle, setShowBackButton } = usePageTitle();
    const [projectName, setProjectName] = useState("Meu projeto 1");

    useEffect(() => {
        setTitle("Relatório");
        setShowBackButton(true);
        return () => setShowBackButton(false);
    }, []);

    return (
        <div className="w-[calc(100vw-60px)] h-full overflow-auto flex flex-col items-start justify-start sm:py-6 sm:px-20 p-4 gap-6">
            <div className="h-[400px] min-h-[400px] w-full relative rounded overflow-hidden">
                <Image src="/map_image1_dashed_area.webp" alt="Logo" fill={true}></Image>
            </div>
            <div className="h-fit w-full gap-3">
                <div className="grid h-fit sm:w-[300px] w-full gap-3">
                    <Label htmlFor="nome">Nome do projeto</Label>
                    <Input type="text" id="nome" placeholder="Nome do projeto" value={projectName} onInput={(e) => setProjectName(e.currentTarget.value)} />
                </div>
            </div>
            <div className="h-fit w-fit flex flex-col gap-2">
                <p className="text-xl">Legenda</p>
                <div className="h-fit w-fit flex flex-col items-start justify-start gap-1">
                    <LegendCard label="Área de pastagem">
                        <div className="h-6 w-10 bg-red-400 border-2 border-dashed border-red-600" />
                    </LegendCard>
                    <LegendCard label="Área de lavoura">
                        <div className="h-6 w-10 bg-yellow-400 border-2 border-dashed border-yellow-600" />
                    </LegendCard>
                    <LegendCard label="Pecuária-Floresta">
                        <div className="h-6 w-10 bg-blue-400 border-2 border-dashed border-blue-600" />
                    </LegendCard>
                </div>
            </div>
            <div className="h-fit w-full flex flex-col gap-2">
                <p className="text-xl">Sugestões de cultura</p>
                <div className="h-fit w-full">
                    <ReportAccordion />
                </div>
            </div>
            <div className="h-fit w-full flex items-center justify-center gap-3 flex-wrap">
                <Button className="w-fit p-6 text-md" variant="homeBtn"><Redo2 /> Refazer análise</Button>
                <Button className="w-fit p-6 text-md" variant="homeBtn"><Download /> Baixar em PDF</Button>
                <Button className="w-fit p-6 text-md" variant="greenBtn"><Check /> Salvar projeto</Button>
            </div>
        </div>
    );
}
