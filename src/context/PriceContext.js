import { createContext, useState } from "react";

export const PriceContext = createContext();

export const PriceProvider = ({ children }) => {
    const [enabled, setEnabled] = useState(false);

    const pricing = {
        full: {
            basic: "$199,.99",
            pro: "$299.99",
            master: "$399.99"
        },
        monthly: {
            basic: "$220.99",
            pro: "$320.99",
            master: "$420.99"
        }
    };

    return (
        <PriceContext.Provider value={{ pricing, enabled, setEnabled }}>
            {children}
        </PriceContext.Provider>
    );
}