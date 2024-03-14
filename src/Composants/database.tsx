import { Carte } from "./Interfaces/Carte";
// Interfaces
import { Effet } from "./Interfaces/Effet";
import { Terrain } from "./Interfaces/Terrain";
//Images de cartes
import blob from "../Images/Pictures/Blob.png";
import blobOeil from "../Images/Pictures/EyeBlob.png";
import c4po from "../Images/Pictures/C4PO.png";
import champifou from "../Images/Pictures/Madcap.png";
import chauveSouris from "../Images/Pictures/Bat.png";
import dessinDuProgrammeur from "../Images/Pictures/ProgrammerArt.png";
import fantome from "../Images/Pictures/Ghost.png";
import gardienVolant from "../Images/Pictures/GardienVolant.png";
import reno from "../Images/Pictures/Reno.png";
import saxu from "../Images/Pictures/Saxu.png";
import sorcier from "../Images/Pictures/Sorcerer.png";
// Images d'Effets
import distance from "../Images/Effets/Distance.png";
import initiative from "../Images/Effets/Initiative.png";
import manaa from "../Images/Effets/Manaa.png";
import percee from "../Images/Effets/Percée.png";
import soin from "../Images/Effets/Soin.png";

export const cartes : Carte[] =
[
    {nom:"Blob",                  picture:blob,                vieTotale:0, vie:0, attaque:0, manaa:0, effet:undefined},
    {nom:"Blob Oeil",             picture:blobOeil,            vieTotale:0, vie:0, attaque:0, manaa:0, effet:undefined},
    {nom:"C4PO",                  picture:c4po,                vieTotale:0, vie:0, attaque:0, manaa:0, effet:undefined},
    {nom:"Champifou",             picture:champifou,           vieTotale:0, vie:0, attaque:0, manaa:0, effet:undefined},
    {nom:"Chauve-Souris",         picture:chauveSouris,        vieTotale:0, vie:0, attaque:0, manaa:0, effet:undefined},
    {nom:"Dessin du Programmeur", picture:dessinDuProgrammeur, vieTotale:0, vie:0, attaque:0, manaa:0, effet:undefined},
    {nom:"Fantôme",               picture:fantome,             vieTotale:0, vie:0, attaque:0, manaa:0, effet:undefined},
    {nom:"Gardien volant",        picture:gardienVolant,       vieTotale:0, vie:0, attaque:0, manaa:0, effet:undefined},
    {nom:"Reno",                  picture:reno,                vieTotale:0, vie:0, attaque:0, manaa:0, effet:undefined},
    {nom:"Saxu",                  picture:saxu,                vieTotale:0, vie:0, attaque:0, manaa:0, effet:undefined},
    {nom:"Sorcier",               picture:sorcier,             vieTotale:0, vie:0, attaque:0, manaa:0, effet:undefined},
];

export const effets : Effet[] =
[
    {nom:"Distance",   picture:distance,   description:""},
    {nom:"Initiative", picture:initiative, description:""},
    {nom:"Manaa",      picture:manaa,      description:""},
    {nom:"Percée",     picture:percee,     description:""},
    {nom:"Soin",       picture:soin,       description:""},
];

export const terrain : Terrain =
{
    leftPlayer: {vie: 20, manaa: 0, deck:[]},

    leftHandA: undefined,
    leftHandB: undefined,
    leftHandC: undefined,

    leftGameBackA: undefined,
    leftGameBackB: undefined,
    leftGameBackC: undefined,

    leftGameFrontA: undefined,
    leftGameFrontB: undefined,
    leftGameFrontC: undefined,

    turnLeft: Math.random() < 0.5,

    rightGameFrontA: undefined,
    rightGameFrontB: undefined,
    rightGameFrontC: undefined,

    rightGameBackA: undefined,
    rightGameBackB: undefined,
    rightGameBackC: undefined,

    rightHandA: undefined,
    rightHandB: undefined,
    rightHandC: undefined,

    rightPlayer: {vie: 20, manaa: 0, deck:[]}
};