'use client';

import { createContext, useContext, useState, ReactNode } from 'react';

type PageTitleContextType = {
    title: string;
    setTitle: (title: string) => void;
    showBackButton: boolean;
    setShowBackButton: (show: boolean) => void;
};

const PageTitleContext = createContext<PageTitleContextType | undefined>(undefined);

export function PageTitleProvider({ children }: { children: ReactNode }) {
    const [title, setTitle] = useState("NomeApp");
    const [showBackButton, setShowBackButton] = useState(false);

    return (
        <PageTitleContext.Provider value={{ title, setTitle, showBackButton, setShowBackButton }}>
            {children}
        </PageTitleContext.Provider>
    );
}

export function usePageTitle() {
    const context = useContext(PageTitleContext);
    if (!context) {
        throw new Error("usePageTitle must be used within a PageTitleProvider");
    }
    return context;
}
