import {ReactElement} from "react";

interface AppProps {
    children: ReactElement
}

export default function App({ children }: AppProps): ReactElement {
    return <html><body>
        {children}
    </body></html>;
}