import { Separator } from '@/components/ui/separator';
import Image from 'next/image';

type ProjectCards = {
    item: {
        name: string;
        cultures: string;
        image: string;
        date: string;
    }
};

export default function ProjectCards({ item }: ProjectCards) {
    return (
        <>
            <div className="sm:h-[200px] h-fit w-full flex items-start sm:justify-start justify-center gap-2 py-2.5 text-center flex-wrap">
                <div className="w-[180px] h-[180px] relative rounded-sm overflow-hidden">
                    <Image src={item.image} alt={item.name} fill={true} />
                </div>
                <div className="w-full sm:w-[calc(100%-188px)] sm:h-full h-fit relative flex flex-col sm:items-start items-center justify-center gap-2.5">
                    <div className="text-xl font-bold">{item.name}</div>
                    <div className="text-md">Culturas: {item.cultures}</div>
                    <div className="text-md">Criado em: {item.name}</div>
                </div>
            </div>
            <Separator />
        </>
    );
}