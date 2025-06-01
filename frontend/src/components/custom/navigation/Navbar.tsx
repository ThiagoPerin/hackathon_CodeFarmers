"use client"
import { usePageTitle } from '@/context/PageTitleContext';
import { ArrowLeft, CircleUser } from 'lucide-react';
import { useRouter } from 'next/navigation';

export default function Navbar() {
    const router = useRouter()

    const { title, showBackButton } = usePageTitle();
    return (
        <div className="w-full h-[70px] px-4 flex items-center justify-between bg-green-mid">
            <h1 className="sm:text-3xl text-xl text-white font-light flex items-center gap-2">
                {showBackButton && (
                    <button onClick={() => router.back()} className="text-white cursor-pointer">
                        <ArrowLeft size={30} />
                    </button>
                )}
                {title}
            </h1>

            <div className="bg-gray-400 w-[40px] h-[40px] rounded-full flex items-center justify-center">
                <CircleUser className='text-gray-300' />
            </div>
        </div>
    );
}