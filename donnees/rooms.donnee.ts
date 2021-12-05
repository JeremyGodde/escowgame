import Zones from "../components/zones/zones.component"
import AfterMoveToRoom from "../structures/action/after-move-to-room.structure"
import AfterPlaySound from "../structures/action/after-play-sound.structure"
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
    NONE,
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
    BUREAU_INACCESSIBLE,
    BUREAU_INACCESSIBLE_ZOOM, 
} from "./list_ids_room.donnee"

import {
    exterieur_1_sound,
    exterieur_2_sound,
    exterieur_3_sound, 
    exterieur_3bis_1_sound,
    usine_exterieur_1_sound, 
    bureau_8_sound,
    local_technique_sound,
    bureau_12_sound,
    bureau_13_sound,
    message_telephone_sound
} from "./sounds.donnee"


export const all_rooms: Array<Room> = [
    {
        id: EXTERIEUR_1,
        id_exit: NONE,
        src: "/img/outdoor/Findejournée1.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds:[exterieur_1_sound],
        dialog: exterieur_1_dialog,
        dim: {
            w: 1228,
            h: 768
        }
    },
    {
        id: EXTERIEUR_2,
        id_exit: NONE,
        src: "/img/outdoor/Findejournée2.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds: [exterieur_2_sound],
        dialog: exterieur_2_dialog,
        dim: {
            w: 1170,
            h: 780
        }
    },
    {
        id: EXTERIEUR_3,
        id_exit: NONE,
        src: "/img/outdoor/Findejournée3.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds : [exterieur_3_sound],
        dialog: exterieur_3_dialog,
        dim: {
            w: 1074,
            h: 806
        }
    },
    {
        id: EXTERIEUR_3bis,
        id_exit: NONE,
        src: "/img/outdoor/Findejournée3_chien.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds: [exterieur_3bis_1_sound],
        dialog: exterieur_3bis_dialog,
        dim: {
            w: 1074,
            h: 716
        }
    },
    {
        id: USINE_EXTERIEUR_1,
        id_exit: NONE,
        src: "/img/outdoor/Usine.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds: [usine_exterieur_1_sound],
        dialog: usine_exterieur_1_dialog,
        dim: {
            w: 5184,
            h: 3456
        }
    },
    {
        id: USINE_EXTERIEUR_1bis,
        id_exit: NONE,
        src: "/img/outdoor/Usine.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dialog: usine_exterieur_1bis_dialog,
        dim: {
            w: 5184,
            h: 3456
        }
    },
    {
        id: COULOIR_1,
        id_exit: HOME_SCREEN_ID,
        src: "/img/indoor/couloir_1.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 4000,
            h: 2796
        },
        zones: [
            { //porte 1 -> bureau 8
                click: new AfterMoveToRoom(BUREAU_8),
                svg: Zones.Rect,
                pos: {
                    x:258,
                    y:0
                },
                dim: {
                    w:450,
                    h:2150
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0.19
                }
            },
            { //porte 2 -> local_technique
                click: new AfterMoveToRoom(LOCAL_TECHNIQUE),
                svg: Zones.Rect,
                pos: {
                    x:3342,
                    y:0
                },
                dim: {
                    w:670,
                    h:2500
                },
                angulars: {
                    topLeft: 0.3,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
        ]
    },
    {
        id: BUREAU_8,
        id_exit: COULOIR_1,
        src: "/img/indoor/bureau_8.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds: [bureau_8_sound],
        dim: {
            w: 6000,
            h: 4000
        },
        zones: [
            {//écran d'ordinateur -> Enigme finale
                click: new AfterMoveToRoom(CREDITS_ID),
                svg: Zones.Rect,
                pos: {
                    x:510,
                    y:1200
                },
                dim: {
                    w:2565,
                    h:1700
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0.21,
                    topRight: 0.215
                }
            },
            {//tableau de liège -> Enigme 1
                click: new AfterMoveToRoom(CREDITS_ID),
                svg: Zones.Rect,
                pos: {
                    x:3100,
                    y:1200
                },
                dim: {
                    w:700,
                    h:1050
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0.17,
                    topRight: 0.015
                },
            },
            {//téléphone -> Message
                click: new AfterPlaySound(message_telephone_sound),
                svg: Zones.RectRotate,
                pos: {
                    x:3625,
                    y:815
                },
                dim: {
                    w:505,
                    h:205
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 1.25,
                    bottomRight: 0,
                    topRight: 1.25,
                    rotate: '-15deg'
                }
            }
        ]
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
        dim: {
            w: 4897,
            h: 3265
        },
        zones: [
            {//écran d'ordinateur -> Enigme 2
                click: new AfterMoveToRoom(CREDITS_ID),
                svg: Zones.RectRotate,
                pos: {
                    x:2430,
                    y:1700
                },
                dim: {
                    w:410,
                    h:335
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0,
                    rotate: "7deg"
                }
            }
        ]
    },
    {
        id: BUREAU_13,
        id_exit: COULOIR_1, // A CHANGER, ce sera couloir 2
        src: "/img/indoor/bureau_13.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte 
            return true
        },
        sounds: [bureau_13_sound],
        dim: {
            w: 4032,
            h: 3024
        },
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
    {
        id: BUREAU_INACCESSIBLE,
        id_exit: COULOIR_1, // A CHANGER, ce sera couloir 2
        src: "/img/indoor/bureau_inaccessible.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte 
            return true
        },
        dim: {
            w: 8778,
            h: 6000
        },
        zones: [
            { //la totalité de l'écran, on défini une zone plus restreinte pour zoomer ? 
                click: new AfterMoveToRoom(BUREAU_INACCESSIBLE_ZOOM),
                svg: Zones.Rect,
                pos: {
                    x:0,
                    y:0
                },
                dim: {
                    w:8778,
                    h:6000
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
        ]
    },
    {
        id: BUREAU_INACCESSIBLE_ZOOM,
        id_exit: BUREAU_INACCESSIBLE, 
        src: "/img/indoor/bureau_inaccessible_zoom.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte ??
            return true
        },
        dim: {
            w: 6378,
            h: 3860
        },
    },
]