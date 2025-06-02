import { ReactNode } from "react";

type CustomMenuButtonProps = {
    children: ReactNode;
    onClick?: () => void;
};

export default function SidebarButton({ children, onClick }: CustomMenuButtonProps) {
    return (
        <button className="cursor-pointer text-gray-700" onClick={onClick}>
            {children}
        </button>
    );
}
