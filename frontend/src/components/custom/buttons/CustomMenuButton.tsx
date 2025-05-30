import { ReactNode } from "react";

type CustomMenuButtonProps = {
    children: ReactNode;
};

export default function CustomMenuButton({ children }: CustomMenuButtonProps) {
    return (
        <button className="w-[130px] h-[130px] rounded-lg flex items-center justify-center bg-green-light text-green-dark hover:bg-green-dark hover:text-gray-light cursor-pointer">
            {children}
        </button>
    );
}
