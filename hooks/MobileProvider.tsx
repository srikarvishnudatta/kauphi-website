"use client";
import { createContext, ReactNode, useEffect, useState } from "react";

export const MobileContext = createContext<boolean>(false);

export default function MobileContextProvider({
    children
}: {
    children: ReactNode
}){
    const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 760);
        }
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);
    return <MobileContext.Provider value={isMobile}>
        {children}
    </MobileContext.Provider>
}