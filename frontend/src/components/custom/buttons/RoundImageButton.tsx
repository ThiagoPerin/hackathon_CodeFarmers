import { ReactNode } from "react";

type RoundImageButton = {
    children: ReactNode;
    label: string;
};

export default function RoundImageButton({ children, label }: RoundImageButton) {
    return (
        <div className="w-[130px] flex flex-col items-center cursor-pointer gap-1">
            <div className="w-full aspect-square relative flex items-center justify-center bg-green-light rounded-full overflow-hidden">
                {children}
            </div>
            <div className="text-md text-center">{label}</div>
        </div>
    );
}
