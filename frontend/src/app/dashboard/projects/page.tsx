"use client"
import ProjectCards from "@/components/custom/cards/ProjectCards";
import { usePageTitle } from "@/context/PageTitleContext";
import { useEffect } from "react";

export default function Projects() {
    const { setTitle, setShowBackButton } = usePageTitle();

    useEffect(() => {
        setTitle("Todos os projetos");
        setShowBackButton(true);

        return () => setShowBackButton(false)
    }, [])

    const mockProjectsData = [
        {
            name: "Meu Projeto 1",
            cultures: "tanzânia, arroz irrigado, eucalipto",
            image: "/map_image1.webp",
            date: "01/01/2023",
        },
        {
            name: "Meu Projeto 2",
            cultures: "brachiaria, soja, teca",
            image: "/map_image2.webp",
            date: "01/01/2023",
        },
        {
            name: "Meu Projeto 3",
            cultures: "tanzânia, arroz irrigado, eucalipto",
            image: "/map_image3.webp",
            date: "01/01/2023",
        },
        {
            name: "Meu Projeto 4",
            cultures: "brachiaria, soja, teca",
            image: "/map_image4.webp",
            date: "01/01/2023",
        },
    ]

    return (
        <div className="w-[calc(100vw-60px)] h-full overflow-auto flex flex-col items-start justify-start p-6">
            {mockProjectsData.map((item, index) => (
                <ProjectCards item={item} key={index} />
            ))}
        </div>
    );
}
