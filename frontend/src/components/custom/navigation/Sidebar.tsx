import Image from "next/image";
import { House, Plus, Search } from 'lucide-react';

export default function Sidebar() {
    return (
        <div className="w-[60px] h-full bg-gray-300 flex flex-col items-center justify-start gap-4 py-4 px-2">
            <Image src="/logo-transparente.png" alt="Logo" width={60} height={60}></Image>
            <House size={20} className="text-gray-700"/>
            <Plus size={20} className="text-gray-700"/>
            <Search size={20} className="text-gray-700"/>
        </div>
    );
}