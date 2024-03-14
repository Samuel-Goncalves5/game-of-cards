import { Carte } from "./Carte";
import { Joueur } from "./Joueur";

export interface Terrain {
    leftPlayer: Joueur;

    leftHandA: Carte | undefined;
    leftHandB: Carte | undefined;
    leftHandC: Carte | undefined;

    leftGameBackA: Carte | undefined;
    leftGameBackB: Carte | undefined;
    leftGameBackC: Carte | undefined;

    leftGameFrontA: Carte | undefined;
    leftGameFrontB: Carte | undefined;
    leftGameFrontC: Carte | undefined;

    turnLeft: boolean | undefined;

    rightGameFrontA: Carte | undefined;
    rightGameFrontB: Carte | undefined;
    rightGameFrontC: Carte | undefined;

    rightGameBackA: Carte | undefined;
    rightGameBackB: Carte | undefined;
    rightGameBackC: Carte | undefined;

    rightHandA: Carte | undefined;
    rightHandB: Carte | undefined;
    rightHandC: Carte | undefined;

    rightPlayer: Joueur;
}