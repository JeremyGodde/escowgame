import Zones from "../components/zones/zones.component"
import AfterMoveToRoom from "../structures/action/after-move-to-room.structure"
import AfterPlayDialog from "../structures/action/after-play-dialog.structure"
import AfterPlaySound from "../structures/action/after-play-sound.structure"
import Digicode from "../structures/game/digicode.structure"
import Player from "../structures/player/player.structure"
import Room from "../structures/space/room.structure"
import {
    exterieur_1_dialog,
    exterieur_2_dialog,
    exterieur_3_dialog,
    exterieur_3bis_dialog,
    usine_exterieur_1_dialog,
    usine_exterieur_1bis_dialog,
    lunettes_dialog,
    bureau_inaccessible
} from "./dialogs.donnee"
import { postit_1, postit_2, postit_3, postit_4, postit_5 } from "./items.donnee"
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
    PORTE_BUREAU_12,
    DIGICODE_BUREAU_12,
    BUREAU_12,
    COULOIR_2,
    SALLE_5,
    BUREAU_13,
    PORTE_BUREAU_13,
    LOCAL_TECHNIQUE,
    CREDITS_ID,
    BUREAU_INACCESSIBLE,
    BUREAU_INACCESSIBLE_ZOOM, 
    TABLEAU_LIEGE,
    ORDINATEUR_BUREAU_8,
    TELEPHONE_BUREAU_8,
    LOCAL_AFFICHE_1,
    LOCAL_AFFICHE_2
} from "./list_ids_room.donnee"

import {
    exterieur_1_sound,
    exterieur_2_sound,
    exterieur_3_sound, 
    exterieur_3bis_1_sound,
    usine_exterieur_1_sound,
    couloir_1_sound, 
    bureau_8_sound,
    local_technique_sound,
    bureau_12_sound,
    couloir_2_sound,
    salle_5_sound,
    bureau_13_sound,
    message_telephone_sound,
    papier1_sound,
    papier2_sound,
    papier3_sound
} from "./sounds.donnee"


export const all_rooms: Array<Room | Digicode> = [
    {
        id: EXTERIEUR_1,
        type: "ROOM",
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
        type: "ROOM",
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
        type: "ROOM",
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
        type: "ROOM",
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
        type: "ROOM",
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
        type: "ROOM",
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
        type: "ROOM",
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
        sounds:[couloir_1_sound],
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
            { //porte 3 -> bureau 12
                click: new AfterMoveToRoom(PORTE_BUREAU_12),
                svg: Zones.Rect,
                pos: {
                    x:1442,
                    y:726
                },
                dim: {
                    w:60,
                    h:890
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0.2,
                    topRight: 0.05
                },
            },
            { //porte 4 -> bureau inaccessible
                click: new AfterMoveToRoom(BUREAU_INACCESSIBLE),
                svg: Zones.Rect,
                pos: {
                    x:1690,
                    y:1000
                },
                dim: {
                    w:50,
                    h:550
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0.2,
                    topRight: 0.05
                },
            },  
            { //flèche -> couloir 2
                click: new AfterMoveToRoom(COULOIR_2),
                svg: Zones.Rect,
                pos: {
                    x:1985,
                    y:1150
                },
                dim: {
                    w:55,
                    h:110
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
        id: BUREAU_8,
        type: "ROOM",
        name: "Bureau 8",
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
                click: new AfterMoveToRoom(ORDINATEUR_BUREAU_8),
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
                click: new AfterMoveToRoom(TABLEAU_LIEGE),
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
                click: new AfterMoveToRoom(TELEPHONE_BUREAU_8),
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
                },
            },
            {//lunettes -> Dialogue
                click: new AfterPlayDialog(lunettes_dialog),
                svg: Zones.RectRotate,
                pos: {
                     x:3815,
                    y:1170
                },
                dim: {
                     w:290,
                    h:120
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0,
                    rotate: '7deg'
                }
                
            },
            {//papiers diversion 1-> Bruit feuilles 
                hover: new AfterPlaySound(papier1_sound),
                svg: Zones.Rect,
                pos: {
                     x:3160,
                     y:2300
                },
                dim: {
                     w:360,
                     h:550
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0,
                }
                
            },
            {//papiers diversion 2-> Bruit feuilles 
                hover: new AfterPlaySound(papier2_sound),
                svg: Zones.RectRotate,
                pos: {
                     x:3840,
                     y:1840
                },
                dim: {
                     w:540,
                     h:720
                },
                angulars: {
                    topLeft: 0.2,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0.3,
                    rotate: '3deg'
                }
                
            },
            {//papiers diversion 3-> Bruit feuilles 
                hover: new AfterPlaySound(papier3_sound),
                svg: Zones.Rect,
                pos: {
                     x:3540,
                     y:2300
                },
                dim: {
                     w:360,
                     h:170
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0,
                }
                
            }
        ]
    },
    {
        id: BUREAU_12,
        type: "ROOM",
        id_exit: COULOIR_1,
        name: "Bureau 12",
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
        id: PORTE_BUREAU_12,
        type: "ROOM",
        id_exit: COULOIR_1,
        sounds: [couloir_1_sound],
        src: "/img/indoor/Porte_bureau_12.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte 
            return true
        },
        dim: {
            w: 4833,
            h: 3758
        },
        zones: [
            { //digicode
                click: new AfterMoveToRoom(DIGICODE_BUREAU_12),
                svg: Zones.Rect,
                pos: {
                    x:2343,
                    y:1400
                },
                dim: {
                    w:170,
                    h:240
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
        id: DIGICODE_BUREAU_12,
        type: "DIGICODE",
        id_exit: PORTE_BUREAU_12,
        id_entrance: BUREAU_12,
        code: 245689,
        //sounds: [couloir_1_sound],
    },
    {
        id: COULOIR_2,
        type: "ROOM",
        id_exit: COULOIR_1,
        src: "/img/indoor/couloir_2.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte -> a changer ce sera une condition
            return true
        },
        dim: {
            w: 4000,
            h: 2796
        },
        sounds:[couloir_2_sound],
        zones: [
            { //porte 1 -> salle 5
                click: new AfterMoveToRoom(SALLE_5),
                svg: Zones.Rect,
                pos: {
                    x:240,
                    y:0
                },
                dim: {
                    w:460,
                    h:2140
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0.19
                }
            },
            { //porte 2 -> élevage
                click: new AfterMoveToRoom(CREDITS_ID),
                svg: Zones.Rect,
                pos: {
                    x:3400,
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
            { //porte 3 -> bureau 13
                click: new AfterMoveToRoom(PORTE_BUREAU_13),
                svg: Zones.Rect,
                pos: {
                    x:1442,
                    y:726
                },
                dim: {
                    w:60,
                    h:890
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0.2,
                    topRight: 0.05
                }
            },
        ]
    },
    {
        id: SALLE_5,
        type: "ROOM",
        id_exit: COULOIR_2, 
        name: "Salle 5",
        src: "/img/indoor/salle_5.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte 
            return true
        },
        sounds: [salle_5_sound],
        dim: {
            w: 4032,
            h: 3024
        },
    },
    {
        id: BUREAU_13,
        type: "ROOM",
        id_exit: COULOIR_2, 
        name: "Bureau 13",
        src: "/img/indoor/bureau_13.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte, à changer, il y aura la clef
            return true
        },
        sounds: [bureau_13_sound],
        dim: {
            w: 4032,
            h: 3024
        },
    },
    {
        id: PORTE_BUREAU_13,
        type: "ROOM",
        id_exit: COULOIR_2, 
        name: "Bureau 13",
        src: "/img/indoor/Porte_bureau_13.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte, à changer, il y aura la clef
            return true
        },
        sounds: [couloir_2_sound],
        dim: {
            w: 4833,
            h: 3758
        },
        zones:[
            { //on clique sur porte -> bureau 13
                click: new AfterMoveToRoom(BUREAU_13),
                svg: Zones.Rect,
                pos: {
                    x:1755,
                    y:100
                },
                dim: {
                    w:1330,
                    h:2750
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
        id: LOCAL_TECHNIQUE,
        type: "ROOM",
        name: "Local Technique",
        id_exit: COULOIR_1, 
        src: "/img/indoor/local_technique.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte 
            return false
        },
        dim: {
            w: 4128,
            h: 2322
        },
        zones: [
            { //affiche gauche
                click: new AfterMoveToRoom(LOCAL_AFFICHE_2),
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
                click: new AfterMoveToRoom(LOCAL_AFFICHE_1),
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
        id: LOCAL_AFFICHE_1,
        type: "ROOM",
        id_exit: LOCAL_TECHNIQUE,
        src: "/img/posters/Affiche.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte 
            return true
        },
        dim: {
            w: 600,
            h: 450
        },
    },
    {
        id: LOCAL_AFFICHE_2,
        type: "ROOM",
        id_exit: LOCAL_TECHNIQUE,
        src: "/img/posters/affiche-L214.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte 
            return true
        },
        dim: {
            w: 625,
            h: 916
        },
    },
    {
        id: BUREAU_INACCESSIBLE,
        type: "ROOM",
        id_exit: COULOIR_1,
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
            {
                click: new AfterMoveToRoom(BUREAU_INACCESSIBLE_ZOOM),
                svg: Zones.Rect,
                pos: {
                    x:4800,
                    y:2685
                },
                dim: {
                    w:1320,
                    h:275
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0.75,
                    bottomRight: 0,
                    topRight: 0.35
                }
            },
        ]
    },
    {
        id: BUREAU_INACCESSIBLE_ZOOM,
        type: "ROOM",
        id_exit: NONE, 
        src: "/img/indoor/bureau_inaccessible_zoom.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte ??
            return true
        },
        dim: {
            w: 6378,
            h: 3860
        },
        dialog: bureau_inaccessible,
    },
    {
        id: TABLEAU_LIEGE,
        type: "ROOM",
        id_exit: BUREAU_8,
        src: "/img/indoor/tableau_liège.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds:[bureau_8_sound],
        dim: {
            w: 1006,
            h: 668
        },
        items: [postit_1, postit_2, postit_3, postit_4, postit_5]
    },
    {
        id: ORDINATEUR_BUREAU_8,
        type: "ROOM",
        id_exit: BUREAU_8,
        src: "/img/indoor/ordinateur.png",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds:[bureau_8_sound],
        dim: {
            w: 1277,
            h: 951
        },
        /*zones: à ajouter quand on pourra écrire le mdp*/
    },
    {
        id: TELEPHONE_BUREAU_8,
        type: "ROOM",
        id_exit: BUREAU_8,
        src: "/img/indoor/bureau_8_telephone.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        sounds:[bureau_8_sound],
        dim: {
            w: 6000,
            h: 4000
        },
        zones: [
            { //la totalité de l'écran, on défini une zone plus restreinte pour zoomer ?
                click: new AfterPlaySound(message_telephone_sound),
                svg: Zones.Rect,
                pos: {
                    x:3094,
                    y:1500
                },
                dim: {
                    w:600,
                    h:50
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
]