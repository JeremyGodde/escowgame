import Zones from "../components/zones/zones.component"
import AfterMoveToRoom from "../structures/action/after-move-to-room.structure"
import Player from "../structures/player/player.structure"
import Room from "../structures/space/room.structure"
import {
    exterieur_1_dialog,
    exterieur_2_dialog,
    exterieur_3_dialog,
    exterieur_3bis_dialog,
    usine_exterieur_1_dialog,
    usine_exterieur_1bis_dialog
} from "./dialogs.donnee"
import {
    HOME_SCREEN_ID,
    EXTERIEUR_1,
    EXTERIEUR_2,
    EXTERIEUR_3,
    EXTERIEUR_3bis,
    USINE_EXTERIEUR_1,
    USINE_EXTERIEUR_1bis,
    COULOIR_1,
    BUREAU_8,
    BUREAU_12,
    BUREAU_13,
    LOCAL_TECHNIQUE,
    CREDITS_ID, 
} from "./list_ids_room.donnee"

import {
    exterieur_1_sound,
    exterieur_2_sound,
    exterieur_3_sound, 
    exterieur_3bis_1_sound,
    exterieur_3bis_2_sound,
    usine_exterieur_1_sound, 
    bureau_8_sound,
    local_technique_sound,
    bureau_12_sound,
    bureau_13_sound
} from "./sounds.donnee"


export const all_rooms: Array<Room> = [
    {
        id: EXTERIEUR_1,
        id_exit: HOME_SCREEN_ID,
        src: "/img/outdoor/Findejournée1.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds:[exterieur_1_sound],
        dialog: exterieur_1_dialog

    },
    {
        id: EXTERIEUR_2,
        id_exit: HOME_SCREEN_ID,
        src: "/img/outdoor/Findejournée2.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds: [exterieur_2_sound],
        dialog: exterieur_2_dialog
    },
    {
        id: EXTERIEUR_3,
        id_exit: HOME_SCREEN_ID,
        src: "/img/outdoor/Findejournée3.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds : [exterieur_3_sound],
        dialog: exterieur_3_dialog
    },
    {
        id: EXTERIEUR_3bis,
        id_exit: HOME_SCREEN_ID,
        src: "/img/outdoor/Findejournée3_chien.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds: [exterieur_3bis_1_sound],
        dialog: exterieur_3bis_dialog
    },
    {
        id: USINE_EXTERIEUR_1,
        id_exit: HOME_SCREEN_ID,
        src: "/img/outdoor/Usine.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds: [usine_exterieur_1_sound],
        dialog: usine_exterieur_1_dialog
    },
    {
        id: USINE_EXTERIEUR_1bis,
        id_exit: HOME_SCREEN_ID,
        src: "/img/outdoor/Usine.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dialog: usine_exterieur_1bis_dialog
    },
  
    {
        id: COULOIR_1,
        id_exit: HOME_SCREEN_ID,
        src: "/img/indoor/couloir_1.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
    },
    {
        id: BUREAU_8,
        id_exit: COULOIR_1,
        src: "/img/indoor/bureau_8.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds: [bureau_8_sound],
    },
    {
        id: BUREAU_12,
        id_exit: COULOIR_1,
        src: "/img/indoor/bureau_12.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte (A CHANGER)
            return true
        },
        sounds: [bureau_12_sound],
    },
    {
        id: BUREAU_13,
        id_exit: COULOIR_1, // A CHANGER, ce sera couloir 2
        src: "/img/indoor/bureau_12.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte 
            return true
        },
        sounds: [bureau_13_sound],
    },

    {
        id: LOCAL_TECHNIQUE,
        id_exit: COULOIR_1, 
        src: "/img/indoor/local_technique.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte 
            return true
        },
        dim: {
            w: 4128,
            h: 2322
        },
        zones: [
            { //affiche gauche
                click: new AfterMoveToRoom(CREDITS_ID),
                svg: Zones.Rect,
                pos: {
                    x:815,
                    y:1180
                },
                dim: {
                    w:522,
                    h:800
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0.06,
                    topRight: 0.1
                }
            },
            { //affiche droite
                click: new AfterMoveToRoom(CREDITS_ID),
                svg: Zones.Rect,
                pos: {
                    x:2265,
                    y:853
                },
                dim: {
                    w:1424,
                    h:1147
                },
                angulars: {
                    topLeft: 0.375,
                    bottomLeft: 0.07,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //boulette de papier
                click: new AfterMoveToRoom(CREDITS_ID),
                svg: Zones.Circ,
                pos: {
                    x:1579,
                    y:338
                },
                dim: {
                    w:163,
                    h:162
                }
            },
        ],
        sounds: [local_technique_sound],
    },


]