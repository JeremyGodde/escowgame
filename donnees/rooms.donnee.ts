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
    couloir_1_cinematique_entree_dialogue,
    pistolet_abattage_dialogue,
    bureau_inaccessible,
    dialog_final,
    dialog_cinematique_fin_couloir_A,
    dialog_cinematique_fin_couloir_B,
    dialog_cinematique_fin_couloir_C,
    dialog_exterieur_A,
    dialog_exterieur_C,
    dialog_maison_A_C,
    dialog_maison_B,
    elevage_2_dialog,
} from "./dialogs.donnee"
import {
    postit_2,
    postit_3,
    postit_4,
    postit_5,
    fermes_usines,
    clef,
    lait,
    lait2,
    pelle,
    carton,
    échelle,
    rateau,
    grille,
    paille,
    étiquette,
    étiquette_zoom,
} from "./items.donnee"
import {
    NONE,
    HOME_SCREEN_ID,
    EXTERIEUR_1,
    EXTERIEUR_2,
    EXTERIEUR_3,
    EXTERIEUR_3bis,
    USINE_EXTERIEUR_1,
    USINE_EXTERIEUR_1bis,
    COULOIR_1_CINEMATIQUE_ENTREE,
    COULOIR_1,
    COULOIR_1_FLECHE,
    COULOIR_1_FIN_A,
    COULOIR_1_FIN_B,
    COULOIR_1_FIN_C,
    BUREAU_8_VERROUILLE,
    BUREAU_8_DEVERROUILLE,
    BUREAU_8_BOITE_MAIL,
    BUREAU_8_MAIL,
    TABLEAU_LIEGE,
    TELEPHONE_BUREAU_8,
    LOCAL_TECHNIQUE,
    BUREAU_INACCESSIBLE,
    BUREAU_INACCESSIBLE_ZOOM, 
    LOCAL_AFFICHE_1,
    LOCAL_AFFICHE_2,
    LOCAL_BOULETTE,
    PORTE_BUREAU_12,
    DIGICODE_BUREAU_12,
    BUREAU_12,
    COULOIR_2,
    PORTE_SALLE_5,
    DIGICODE_SALLE_5,
    SALLE_5,
    BUREAU_13,
    PORTE_BUREAU_13,
    ELEVAGE_1,
    EXTERIEUR_A,
    EXTERIEUR_C,
    MAISON_A_C,
    MAISON_B,
    ELEVAGE_2,
    ELEVAGE_2_2,
    ELEVAGE_ZOOM_1,
    ELEVAGE_ZOOM_5,
    ELEVAGE_ZOOM_4,
    ELEVAGE_ZOOM_3,
    ELEVAGE_ZOOM_2,
    ELEVAGE_ZOOM_6,
    ELEVAGE_ZOOM_7,
    ELEVAGE_ZOOM_8,
} from "./list_ids_room.donnee"

import {
    exterieur_1_sound, 
    exterieur_3bis_1_sound,
    couloir_1_entree_sound,
    couloir_1_sound, 
    bureau_8_sound,
    local_technique_sound,
    bureau_12_sound,
    couloir_2_sound,
    salle_5_sound,
    bureau_13_sound,
    message_telephone_sound,
    elevage_sound,
} from "./sounds.donnee"
import {
    bureau_8_enigme,
    bureau_8_fermer_fenetre,
    bureau_8_icone_mail,
    bureau_8_liege,
    bureau_8_lunettes,
    bureau_8_mails_recus,
    bureau_8_nouv_mail,
    bureau_8_papier_1,
    bureau_8_papier_2,
    bureau_8_papier_3,
    bureau_8_telephone,
    couloir_1_fleche,
    couloir_1_porte_bureau_12,
    couloir_1_porte_bureau_8,
    couloir_1_porte_bureau_inaccessible,
    couloir_1_porte_local_technique,
    couloir_2_fleche,
    couloir_2_porte_bureau_13,
    couloir_2_porte_elevage,
    couloir_2_porte_salle_5
} from "./zones.donnee"


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
        id: EXTERIEUR_A,
        type: "ROOM",
        id_exit: NONE,
        src: "/img/outdoor/Usine.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dialog: dialog_exterieur_A,
        dim: {
            w: 5184,
            h: 3456
        }
    },
    {
        id: EXTERIEUR_C,
        type: "ROOM",
        id_exit: NONE,
        src: "/img/outdoor/Usine.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dialog: dialog_exterieur_C,
        dim: {
            w: 5184,
            h: 3456
        }
    },
    {
        id: MAISON_A_C,
        type: "ROOM",
        id_exit: NONE,
        src: "/img/indoor/maison_tv.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dialog: dialog_maison_A_C,
        dim: {
            w: 5629,
            h: 3753
        }
    },
    {
        id: MAISON_B,
        type: "ROOM",
        id_exit: NONE,
        src: "/img/indoor/maison.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dialog: dialog_maison_B,
        dim: {
            w: 5629,
            h: 3753
        }
    },
    {
        id: COULOIR_1_CINEMATIQUE_ENTREE,
        type: "ROOM",
        id_exit: NONE,
        src: "/img/indoor/couloir_1.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 4000,
            h: 2796
        },
        sounds:[couloir_1_entree_sound],
        dialog: couloir_1_cinematique_entree_dialogue,
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
            couloir_1_porte_bureau_8,
            couloir_1_porte_local_technique,
            couloir_1_porte_bureau_12,
            couloir_1_porte_bureau_inaccessible
        ]
    },
    {
        id: COULOIR_1_FLECHE,
        type: "ROOM",
        id_exit: HOME_SCREEN_ID,
        src: "/img/indoor/couloir_1_fleche.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 4000,
            h: 2796
        },
        sounds:[couloir_1_sound],
        zones:  [
            couloir_1_porte_bureau_8,
            couloir_1_porte_local_technique,
            couloir_1_porte_bureau_12,
            couloir_1_porte_bureau_inaccessible,
            couloir_1_fleche
        ]
    },
    {
        id: COULOIR_1_FIN_A,
        type: "ROOM",
        id_exit: NONE,
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
        dialog: dialog_cinematique_fin_couloir_A
    },
    {
        id: COULOIR_1_FIN_B,
        type: "ROOM",
        id_exit: NONE,
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
        dialog: dialog_cinematique_fin_couloir_B
    },
    {
        id: COULOIR_1_FIN_C,
        type: "ROOM",
        id_exit: NONE,
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
        dialog: dialog_cinematique_fin_couloir_C
    },
    {
        id: BUREAU_8_VERROUILLE,
        type: "ROOM",
        name: "Bureau 8",
        id_exit: COULOIR_1,
        src: "/img/indoor/bureau_8_verrouille.jpg",
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
            bureau_8_enigme,
            bureau_8_liege,
            bureau_8_telephone,
            bureau_8_lunettes,
            bureau_8_papier_1,
            bureau_8_papier_2,
            bureau_8_papier_3
        ]
    },
    {
        id: BUREAU_8_DEVERROUILLE,
        type: "ROOM",
        id_exit: COULOIR_1,
        src: "/img/indoor/bureau_8_deverrouille.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 6000,
            h: 4000
        },
        zones: [
            bureau_8_icone_mail,
            bureau_8_lunettes,
            bureau_8_papier_1,
            bureau_8_papier_2,
            bureau_8_papier_3
        ]
    },
    {
        id: BUREAU_8_BOITE_MAIL,
        type: "ROOM",
        id_exit: COULOIR_1,
        src: "/img/indoor/bureau_8_boite_mail.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 6000,
            h: 4000
        },
        zones: [
            bureau_8_fermer_fenetre,
            bureau_8_nouv_mail,
            bureau_8_mails_recus,
            bureau_8_lunettes,
            bureau_8_papier_1,
            bureau_8_papier_2,
            bureau_8_papier_3
        ]
    },
    {
        id: BUREAU_8_MAIL,
        type: "ROOM",
        id_exit: COULOIR_1,
        src: "/img/indoor/bureau_8_mail.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 6000,
            h: 4000
        },
        dialog: dialog_final,
        zones: [
            bureau_8_fermer_fenetre,
            bureau_8_lunettes,
            bureau_8_papier_1,
            bureau_8_papier_2,
            bureau_8_papier_3
        ]
    },
    {
        id: BUREAU_12,
        type: "ROOM",
        id_exit: COULOIR_1,
        name: "Bureau 12",
        src: "/img/indoor/bureau_12.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        videos: [
            {
                src: "/video/cowspiracy.mp4",
                pos: {
                    x:2430,
                    y:1698
                },
                dim: {
                    w:410,
                    h:345
                },
                rotate: '8deg'
            }
        ],
        dim: {
            w: 4897,
            h: 3265
        },
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
            couloir_2_porte_salle_5,
            couloir_2_porte_elevage,
            couloir_2_porte_bureau_13,
            couloir_2_fleche
        ]
    },
    {
        id: PORTE_SALLE_5,
        type: "ROOM",
        id_exit: COULOIR_2,
        src: "/img/indoor/Porte_salle_5.jpg",
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
                click: new AfterMoveToRoom(DIGICODE_SALLE_5),
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
        id: DIGICODE_SALLE_5,
        type: "DIGICODE",
        id_exit: PORTE_SALLE_5,
        id_entrance: SALLE_5,
        code: 45135,
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
            w: 6048,
            h: 4024
        },
        zones:[
            { //pistolet d'abattage
                click: new AfterPlayDialog(pistolet_abattage_dialogue),
                svg: Zones.RectRotate,
                pos: {
                    x:1080,
                    y:280
                },
                dim: {
                    w:484,
                    h:100
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0,
                    rotate: '-7deg'
                },   
            },
        ],
        items: [lait, lait2, clef, pelle, carton, échelle, rateau, grille,paille]
    },
    {
        id: BUREAU_13,
        type: "ROOM",
        id_exit: COULOIR_2, 
        name: "Bureau 13",
        src: "/img/indoor/bureau_13.jpg",
        open_if: (player: Player): boolean => {
            return player.owned(clef)
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
            return true        },
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
                click: new AfterMoveToRoom(LOCAL_BOULETTE),
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
        id: LOCAL_BOULETTE,
        type: "ROOM",
        id_exit: LOCAL_TECHNIQUE, 
        src: "/img/posters/boulette.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte ??
            return true
        },
        dim: {
            w: 4128,
            h: 2322
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
        id_exit: BUREAU_8_VERROUILLE,
        src: "/img/indoor/tableau_liège.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 1006,
            h: 668
        },
        items: [fermes_usines,postit_2, postit_3, postit_4, postit_5]
    },
    {
        id: TELEPHONE_BUREAU_8,
        type: "ROOM",
        id_exit: BUREAU_8_VERROUILLE,
        src: "/img/indoor/bureau_8_telephone.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
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
    {
        id: ELEVAGE_1,
        type: "ROOM",
        id_exit: COULOIR_2,
        src: "/img/indoor/Elevage.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 2475,
            h: 1650
        },
        videos: [
            {
                src: "/video/elevage.mp4",
                pos: {
                    x:0,
                    y:0
                },
                dim: {
                    w:5000,
                    h:3000
                },
                after: new AfterMoveToRoom(ELEVAGE_2)
            }
        ],
    },
    {
        id: ELEVAGE_2,
        type: "ROOM",
        id_exit: COULOIR_2,
        src: "/img/indoor/Elevage.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 2475,
            h: 1650
        },
        dialog: elevage_2_dialog,
        items: [étiquette],
        zones: [
            { //vache avec étiquette
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_1),
                svg: Zones.Rect,
                pos: {
                    x:1487,
                    y:1000
                },
                dim: {
                    w:45,
                    h:30
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //vache tout à droite
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_5),
                svg: Zones.Rect,
                pos: {
                    x:2405,
                    y:700
                },
                dim: {
                    w:45,
                    h:30
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //vache tout devant
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_4),
                svg: Zones.Rect,
                pos: {
                    x:514,
                    y:60
                },
                dim: {
                    w:65,
                    h:60
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //vache devant
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_3),
                svg: Zones.Rect,
                pos: {
                    x:839,
                    y:300
                },
                dim: {
                    w:60,
                    h:60
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //vache à gauche
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_2),
                svg: Zones.Rect,
                pos: {
                    x:222,
                    y:1115
                },
                dim: {
                    w:40,
                    h:40
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //vache blanche avec noir derrière
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_6),
                svg: Zones.Rect,
                pos: {
                    x:876,
                    y:830
                },
                dim: {
                    w:50,
                    h:50
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //vache blanche avec marron derrière
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_7),
                svg: Zones.Rect,
                pos: {
                    x:1530,
                    y:1320
                },
                dim: {
                    w:20,
                    h:20
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //vache blanche avec marron clair derrière
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_8),
                svg: Zones.Rect,
                pos: {
                    x:2312,
                    y:1280
                },
                dim: {
                    w:30,
                    h:30
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
        ],
        sounds: [elevage_sound]
    },
    {
        id: ELEVAGE_2_2,
        type: "ROOM",
        id_exit: COULOIR_2,
        src: "/img/indoor/Elevage.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 2475,
            h: 1650
        },
        items: [étiquette],
        zones: [
            { //vache avec étiquette
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_1),
                svg: Zones.Rect,
                pos: {
                    x:1487,
                    y:1000
                },
                dim: {
                    w:45,
                    h:30
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //vache tout à droite
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_5),
                svg: Zones.Rect,
                pos: {
                    x:2405,
                    y:700
                },
                dim: {
                    w:45,
                    h:30
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //vache tout devant
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_4),
                svg: Zones.Rect,
                pos: {
                    x:514,
                    y:60
                },
                dim: {
                    w:65,
                    h:60
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //vache devant
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_3),
                svg: Zones.Rect,
                pos: {
                    x:839,
                    y:300
                },
                dim: {
                    w:60,
                    h:60
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //vache à gauche
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_2),
                svg: Zones.Rect,
                pos: {
                    x:222,
                    y:1115
                },
                dim: {
                    w:40,
                    h:40
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //vache blanche avec noir derrière
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_6),
                svg: Zones.Rect,
                pos: {
                    x:876,
                    y:830
                },
                dim: {
                    w:50,
                    h:50
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //vache blanche avec marron derrière
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_7),
                svg: Zones.Rect,
                pos: {
                    x:1530,
                    y:1320
                },
                dim: {
                    w:20,
                    h:20
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            { //vache blanche avec marron clair derrière
                click: new AfterMoveToRoom(ELEVAGE_ZOOM_8),
                svg: Zones.Rect,
                pos: {
                    x:2312,
                    y:1280
                },
                dim: {
                    w:30,
                    h:30
                },
                angulars: {
                    topLeft: 0,
                    bottomLeft: 0,
                    bottomRight: 0,
                    topRight: 0
                }
            },
            
        ],  
    },
    {
        id: ELEVAGE_ZOOM_1,
        type: "ROOM",
        id_exit: ELEVAGE_2_2,
        src: "/img/indoor/Elevage_zoom_1.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 190,
            h: 205
        },
        items:[étiquette_zoom]
    },
    {
        id: ELEVAGE_ZOOM_2,
        type: "ROOM",
        id_exit: ELEVAGE_2_2,
        src: "/img/indoor/Elevage_zoom_2.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 215,
            h: 235
        },
    },
    {
        id: ELEVAGE_ZOOM_3,
        type: "ROOM",
        id_exit: ELEVAGE_2_2,
        src: "/img/indoor/Elevage_zoom_3.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 164,
            h: 162
        },
    },
    {
        id: ELEVAGE_ZOOM_4,
        type: "ROOM",
        id_exit: ELEVAGE_2_2,
        src: "/img/indoor/Elevage_zoom_4.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 229,
            h: 203
        },
    },
    {
        id: ELEVAGE_ZOOM_5,
        type: "ROOM",
        id_exit: ELEVAGE_2_2,
        src: "/img/indoor/Elevage_zoom_4.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 126,
            h: 179
        },
    },
    {
        id: ELEVAGE_ZOOM_1,
        type: "ROOM",
        id_exit: ELEVAGE_2_2,
        src: "/img/indoor/Elevage_zoom_1.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 190,
            h: 205
        },
        items:[étiquette_zoom]
    },
    {
        id: ELEVAGE_ZOOM_6,
        type: "ROOM",
        id_exit: ELEVAGE_2_2,
        src: "/img/indoor/Elevage_zoom_6.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 114,
            h: 119
        },
    },
    {
        id: ELEVAGE_ZOOM_7,
        type: "ROOM",
        id_exit: ELEVAGE_2_2,
        src: "/img/indoor/Elevage_zoom_7.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 119,
            h: 121
        },
    },
    {
        id: ELEVAGE_ZOOM_8,
        type: "ROOM",
        id_exit: ELEVAGE_2_2,
        src: "/img/indoor/Elevage_zoom_8.jpg",
        open_if: (player: Player): boolean => {
            // toujours ouverte
            return true
        },
        dim: {
            w: 119,
            h: 121
        },
    },
]