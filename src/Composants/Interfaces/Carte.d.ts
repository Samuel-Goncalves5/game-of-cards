import { Effet } from "./Effet";

export interface Carte {
    nom: string;
    picture: string;

    vieTotale: number;
    vie: number;
    attaque: number;
    manaa: number;

    effet: Effet | undefined;
}