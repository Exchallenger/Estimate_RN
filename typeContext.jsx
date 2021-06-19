import { createContext } from "react";

const TypeContext = createContext({
    type:'unknown',
    setType:(ty) =>{}
});

export default TypeContext