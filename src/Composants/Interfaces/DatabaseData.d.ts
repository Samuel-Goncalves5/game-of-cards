import { Carte } from "./Carte";
import { Effet } from "./Effet";
import { Terrain } from "./Terrain";

export interface DatabaseData {
    cartes: Carte[];
    effets: Effet[];
    terrain: Terrain;
}