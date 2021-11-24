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
    CREDITS_ID, 
} from "./list_ids_room.donnee"

import {
    exterieur_1_sound,
    exterieur_2_sound,
    exterieur_3_sound, 
    exterieur_3bis_1_sound,
    exterieur_3bis_2_sound,
    usine_exterieur_1_sound
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
        src: "/img/outdoor/Usine.png",
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
        src: "/img/outdoor/Usine.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dialog: usine_exterieur_1bis_dialog
    },
    {
        id: USINE_EXTERIEUR_1bis,
        id_exit: HOME_SCREEN_ID,
        src: "/img/outdoor/Usine.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dialog: usine_exterieur_1bis_dialog
    },
    {
        id: COULOIR_1,
        id_exit: HOME_SCREEN_ID,
        src: "/img/indoor/couloir_1.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        /*zones: [
            {
                x: 50,
                y: 50,
                h: 10,
                w: 5,
                click: new AfterMoveToRoom(CREDITS_ID),
                svg: "/img/icons/journal-text.svg"
            }
        ]*/
    },
    {
        id: BUREAU_8,
        id_exit: COULOIR_1,
        src: "/img/indoor/bureau_8.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        }
    },
    {
        id: BUREAU_12,
        id_exit: COULOIR_1,
        src: "/img/indoor/bureau_12.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte (A CHANGER)
            return true
        }
    },
    {
        id: BUREAU_13,
        id_exit: COULOIR_1, // A CHANGER, ce sera couloir 2
        src: "/img/indoor/bureau_12.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte 
            return true
        }
    },


]