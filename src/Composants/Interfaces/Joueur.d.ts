import { Carte } from "./Carte";

export interface Joueur {
    vie: number;
    manaa: number;
    deck: Carte[];
}