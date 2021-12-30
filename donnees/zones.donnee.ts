import AfterPlayDialog from "../structures/action/after-play-dialog.structure"
import AfterPlaySound from "../structures/action/after-play-sound.structure"
import Zone from "../structures/space/zone.structure"
import Zones from "../components/zones/zones.component"
import { dialog_mails_recus, lunettes_dialog } from "./dialogs.donnee"
import { papier1_sound, papier2_sound, papier3_sound } from "./sounds.donnee"
import {
    BUREAU_8_BOITE_MAIL,
    BUREAU_8_DEVERROUILLE,
    BUREAU_8_MAIL,
    BUREAU_8_VERROUILLE,
    BUREAU_INACCESSIBLE,
    COULOIR_1,
    COULOIR_2,
    ELEVAGE_1,
    LOCAL_TECHNIQUE,
    PORTE_BUREAU_12,
    PORTE_BUREAU_13,
    PORTE_SALLE_5,
    TABLEAU_LIEGE,
    TELEPHONE_BUREAU_8
} from "./list_ids_room.donnee"
import AfterMoveToRoom from "../structures/action/after-move-to-room.structure"
import AfterAskPassword from "../structures/action/after-ask-password.structure"

export const couloir_1_porte_bureau_8: Zone = {
    click: new AfterMoveToRoom(BUREAU_8_VERROUILLE),
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
}

export const couloir_1_porte_local_technique: Zone = {
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
}

export const couloir_1_porte_bureau_12: Zone = {
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
}

export const couloir_1_porte_bureau_inaccessible: Zone = {
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
}

export const couloir_1_fleche: Zone = {
    click: new AfterMoveToRoom(COULOIR_2),
    svg: Zones.Rect,
    pos: {
        x:1975,
        y:1145
    },
    dim: {
        w:55,
        h:110
    }
}

export const couloir_2_porte_salle_5: Zone = {
    click: new AfterMoveToRoom(PORTE_SALLE_5),
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
}

export const couloir_2_porte_elevage: Zone = {
    click: new AfterMoveToRoom(ELEVAGE_1),
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
}

export const couloir_2_porte_bureau_13: Zone = {
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
}

export const couloir_2_fleche: Zone = {
    click: new AfterMoveToRoom(COULOIR_1),
    svg: Zones.Rect,
    pos: {
        x:1925,
        y:110
    },
    dim: {
        w:90,
        h:150
    }
}

export const bureau_8_enigme: Zone = {
    click: new AfterAskPassword("password",BUREAU_8_DEVERROUILLE),
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
}

export const bureau_8_liege: Zone = {
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
}

export const bureau_8_telephone: Zone = {
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
}

export const bureau_8_lunettes: Zone = {
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
    
}

export const bureau_8_papier_1: Zone = { 
    hover: new AfterPlaySound(papier1_sound),
    svg: Zones.Rect,
    pos: {
         x:3160,
         y:2300
    },
    dim: {
         w:360,
         h:550
    }    
}

export const bureau_8_papier_2: Zone = {
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
    
}

export const bureau_8_papier_3: Zone = {
    hover: new AfterPlaySound(papier3_sound),
    svg: Zones.Rect,
    pos: {
         x:3540,
         y:2300
    },
    dim: {
         w:360,
         h:170
    } 
}

export const bureau_8_icone_mail: Zone = {
    click: new AfterMoveToRoom(BUREAU_8_BOITE_MAIL),
    svg: Zones.Rect,
    pos: {
         x:1675,
         y:1735
    },
    dim: {
         w:78,
         h:78
    },
    angulars: {
        topLeft: 0,
        bottomLeft: 0.1,
        bottomRight: 0,
        topRight: 0.05,
    }
}

export const bureau_8_fermer_fenetre: Zone = {
    click: new AfterMoveToRoom(BUREAU_8_DEVERROUILLE),
    svg: Zones.Circ,
    pos: {
         x:1050,
         y:2665
    },
    dim: {
         w:50,
         h:50
    }
}

export const bureau_8_nouv_mail: Zone = {
    click: new AfterMoveToRoom(BUREAU_8_MAIL),
    svg: Zones.RectRotate,
    pos: {
         x:1050,
         y:2325
    },
    dim: {
         w:315,
         h:80
    },
    angulars:{
        topLeft: 0,
        bottomLeft: 0,
        bottomRight: 0,
        topRight: 0,
        rotate: '2deg'
    }
}

export const bureau_8_mails_recus: Zone = {
    click: new AfterPlayDialog(dialog_mails_recus),
    svg: Zones.Rect,
    pos: {
         x:1420,
         y:1980
    },
    dim: {
         w:1150,
         h:275
    },
    angulars:{
        topLeft: 0,
        bottomLeft: 0,
        bottomRight: 0.1,
        topRight: 0.35
    }

}