import { useContext } from "react";
import { DatabaseContext, DatabaseContextData } from "./DatabaseContextProvider";

export function useDatabase(): DatabaseContextData {
    return useContext(DatabaseContext);
}