import { ReactNode } from "react";

type RoundImageButton = {
    children: ReactNode;
    label: string;
    onClick?: () => void;
};

export default function RoundImageButton({ children, label, onClick }: RoundImageButton) {
    return (
        <div className="w-[130px] flex flex-col items-center cursor-pointer gap-1" onClick={onClick}>
            <div className="w-full aspect-square relative flex items-center justify-center bg-green-light text-green-dark hover:bg-green-dark hover:text-gray-light rounded-full overflow-hidden">
                {children}
            </div>
            <div className="text-md text-center">{label}</div>
        </div>
    );
}
