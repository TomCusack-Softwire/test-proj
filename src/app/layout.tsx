import Home from "@/app/page";
import React from "react";

interface AppProps {
    children: React.ReactNode
}

export default function App({ children }: AppProps) {
    return <html><body>
        {children}
    </body></html>;
}