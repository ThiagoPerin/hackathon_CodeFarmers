"use client"
import { Button } from "@/components/ui/button";
import { usePageTitle } from "@/context/PageTitleContext";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Check } from "lucide-react";
import { useEffect, useMemo, useState } from "react";

export default function MapSelection() {
    const { setTitle, setShowBackButton } = usePageTitle();
    const [latitude, setLatitude] = useState("-19.6167");
    const [longitude, setLongitude] = useState("-57.516");

    useEffect(() => {
        setTitle("Selecionar área no mapa");
        setShowBackButton(true);

        return () => setShowBackButton(false)
    }, [])

    const iframeSrc = useMemo(() => {
        if (!latitude || !longitude) return "";
        return `https://maps.google.com/maps?q=${latitude},${longitude}&z=14&output=embed&layer=c`;
    }, [latitude, longitude]);

    return (
        <div className="w-[calc(100vw-60px)] h-full overflow-auto flex flex-col sm:items-start items-center justify-start p-6 gap-6">
            <p className="sm:text-2xl text-lg sm:text-start text-center text-green-dark">Insira as coordenadas da área a ser analisada. Ao final, clique em <strong>“Analisar”</strong>.</p>
            <div className="w-full flex sm:justify-start justify-center items-end gap-4 flex-wrap">
                <div className="grid h-fit w-[200px] max-w-sm items-center gap-3">
                    <Label htmlFor="latitude">Latitude</Label>
                    <Input type="text" id="latitude" placeholder="Latitude" value={latitude} onInput={(e) => setLatitude(e.currentTarget.value)} />
                </div>
                <div className="grid h-fit w-[200px] max-w-sm items-center gap-3">
                    <Label htmlFor="longitude">Longitude</Label>
                    <Input type="text" id="longitude" placeholder="Longitude" value={longitude} onInput={(e) => setLongitude(e.currentTarget.value)} />
                </div>
                <Button className="w-[120px]" variant="greenBtn"><Check /> Analisar</Button>
            </div>
            <div className="w-full h-full rounded overflow-hidden">
                <iframe key={iframeSrc} src={iframeSrc}
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                />
            </div>
        </div>
    );
}
