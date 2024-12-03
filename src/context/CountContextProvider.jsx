import { useState } from "react";
import { CountContext } from "./CountContext";

/* eslint-disable react/prop-types */
const CountContextProvider = ({ children }) => {
    const [count, setCount] = useState(0);

    return (
        <CountContext.Provider value={{ count, setCount }}>
            {children}
        </CountContext.Provider>
    );
};

export default CountContextProvider;
