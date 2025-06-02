"use client"
import { usePageTitle } from "@/context/PageTitleContext";
import { useEffect, useRef, useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Check, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

export default function UploadFile() {
    const router = useRouter()
    const { setTitle, setShowBackButton } = usePageTitle();
    const fileInputRef = useRef<HTMLInputElement | null>(null);
    const [isFileLoaded, setIsFileLoaded] = useState(false);
    const [selectedFile, setSelectedFile] = useState("");

    useEffect(() => {
        setTitle("Enviar arquivo");
        setShowBackButton(true);
        return () => setShowBackButton(false);
    }, []);

    function handleButtonClick() {
        fileInputRef.current?.click();
    };

    function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
        const file = e.target.files?.[0];
        if (file) {
            setSelectedFile(file.name);
            setIsFileLoaded(true);
        }
    };

    function handleFileRemoval() {
        setSelectedFile("");
        setIsFileLoaded(false);
    };

    return (
        <div className="w-[calc(100vw-60px)] h-full overflow-auto flex flex-col items-center justify-center p-6 gap-6">
            <Card className="sm:w-[300px] w-full h-fit py-10 shadow-md bg-secondary">
                <CardContent className="h-full flex flex-col items-center justify-center gap-5 text-center">
                    {!isFileLoaded ? (
                        <>
                            <div className="w-[130px] aspect-square relative flex items-center justify-center bg-green-light text-green-dark rounded-full overflow-hidden">
                                <Upload size={50} />
                            </div>
                            <p className="text-md">Selecione o arquivo contendo as coordenadas da área a ser analisada</p>
                            <input type="file" ref={fileInputRef} onChange={handleFileChange} className="hidden" accept=".png,.webp,.jpg" />
                            <Button className="w-[150px]" variant="greenBtn" onClick={handleButtonClick}>Procurar arquivo</Button>
                        </>
                    ) : (
                        <>
                            <div className="w-[130px] aspect-square relative flex items-center justify-center bg-green-light text-green-dark rounded-full overflow-hidden">
                                <Check size={50} />
                            </div>
                            <p className="text-md font-bold break-all">{selectedFile}</p>
                            <Button variant="destructive" onClick={handleFileRemoval}>Remover arquivo</Button>
                        </>
                    )}
                </CardContent>
            </Card>
            <Button className="w-[120px]" variant="greenBtn" onClick={() => router.push("/dashboard/report")} {...{ disabled: !isFileLoaded }}><Check /> Analisar</Button>
        </div>
    );
}
