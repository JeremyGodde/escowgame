import Player from "../structures/player/player.structure"
import Room from "../structures/space/room.structure"
import {
    exterieur_1_dialog,
    exterieur_2_dialog,
    exterieur_3_dialog,
    exterieur_3bis_dialog
} from "./dialogs.donnee"
import {
    HOME_SCREEN_ID,
    EXTERIEUR_1,
    EXTERIEUR_2,
    EXTERIEUR_3,
    EXTERIEUR_3bis
} from "./list_ids_room.donnee"

export const all_rooms: Array<Room> = [
    {
        id: EXTERIEUR_1,
        id_exit: HOME_SCREEN_ID,
        src: "/img/outdoor/Findejournée1.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
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
        dialog: exterieur_3bis_dialog
    }
]