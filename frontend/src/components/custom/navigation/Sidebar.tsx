"use client"
import Image from "next/image";
import { House, Plus, Search } from 'lucide-react';
import { useRouter } from "next/navigation";
import SidebarButton from "../buttons/SidebarButton";

export default function Sidebar() {
    const router = useRouter()

    return (
        <div className="w-[60px] h-full bg-gray-300 flex flex-col items-center justify-start gap-4 py-4 px-2">
            <Image src="/logo-transparente.png" alt="Logo" width={60} height={60}></Image>
            <SidebarButton onClick={() => router.push("/dashboard")}>
                <House size={20} />
            </SidebarButton>
            <SidebarButton onClick={() => router.push("/dashboard/upload-file")}>
                <Plus size={20} />
            </SidebarButton>
            <SidebarButton onClick={() => router.push("/dashboard/projects")}>
                <Search size={20} />
            </SidebarButton>
        </div>
    );
}