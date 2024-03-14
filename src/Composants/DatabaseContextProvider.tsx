import React, { createContext, useState } from 'react';
import { DatabaseData } from './Interfaces/DatabaseData';
import { cartes, effets, terrain } from './database';

export interface DatabaseContextData {
    database: DatabaseData;
    updateDatabase: (update: DatabaseData) => void;
}

export const DatabaseContext = createContext<DatabaseContextData>({
    database: {
        cartes:[],
        effets:[],
        terrain: {
            leftPlayer: {vie: NaN, manaa: NaN, deck:[]},

            leftHandA: undefined,
            leftHandB: undefined,
            leftHandC: undefined,
        
            leftGameBackA: undefined,
            leftGameBackB: undefined,
            leftGameBackC: undefined,
        
            leftGameFrontA: undefined,
            leftGameFrontB: undefined,
            leftGameFrontC: undefined,

            turnLeft: undefined,
        
            rightGameFrontA: undefined,
            rightGameFrontB: undefined,
            rightGameFrontC: undefined,
        
            rightGameBackA: undefined,
            rightGameBackB: undefined,
            rightGameBackC: undefined,
        
            rightHandA: undefined,
            rightHandB: undefined,
            rightHandC: undefined,

            rightPlayer: {vie: NaN, manaa: NaN, deck:[]}
        }
    },
    updateDatabase: () => {},
})

function DatabaseContextProvider({children}: { children: React.ReactNode }) {
    const [database, setDatabase] = useState<DatabaseData>({
        cartes,
        effets,
        terrain
    });

    const updateDatabase = (update: DatabaseData) => {
        setDatabase(update);
    }

    return (
        <DatabaseContext.Provider value={{database, updateDatabase}}>
            {children}
        </DatabaseContext.Provider>
    );
}

export default DatabaseContextProvider;