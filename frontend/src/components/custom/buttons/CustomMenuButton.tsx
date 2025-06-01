import { ReactNode } from "react";

type CustomMenuButtonProps = {
    children: ReactNode;
    label: string;
    onClick?: () => void;
};

export default function CustomMenuButton({ children, label, onClick }: CustomMenuButtonProps) {
    return (
        <div className="w-[130px] flex flex-col">
            <button className="w-[130px] h-[130px] rounded-lg flex items-center justify-center bg-green-light text-green-dark hover:bg-green-dark hover:text-gray-light cursor-pointer" onClick={onClick}>
                {children}
            </button>
            <div className="text-sm text-center">{label}</div>
        </div>
    );
}
