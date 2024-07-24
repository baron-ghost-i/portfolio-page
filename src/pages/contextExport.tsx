import { createContext } from "react";

type union = string | React.Dispatch<React.SetStateAction<string>>
export const menuChangingContext = createContext<Array<union> | null>(null);