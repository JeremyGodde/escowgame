import AfterMoveToRoom from "../structures/action/after-move-to-room.structure"
import AfterPlaySound from "../structures/action/after-play-sound.structure"
import Player from "../structures/player/player.structure"
import Items from "../structures/game/item.structure"
import AfterPlayDialog from "../structures/action/after-play-dialog.structure"
import { exterieur_1_dialog } from "./dialogs.donnee"


export const postit_1: Items = {
        pos: {
            x: 30,
            y: 162

        },
        dim: {
            w:300,
            h:500
        },
        img: "/img/items/post-it_1.jpg",
        collectable: false, 
        draggable: true 
    }

    export const postit_2: Items = {
        pos: {
            x: 400,
            y: 160

        },
        dim: {
            w:160,
            h:160
        },
        img: "/img/items/post-it_2.png",
        collectable: false, 
        draggable: true 
    }
    export const postit_3: Items = {
        pos: {
            x: 800,
            y: 380

        },
        dim: {
            w:160,
            h:160
        },
        img: "/img/items/post-it_3.png",
        collectable: false, 
        draggable: true 
    }
    export const postit_4: Items = {
        pos: {
            x: 550,
            y: 100

        },
        dim: {
            w:160,
            h:160
        },
        img: "/img/items/post-it_4.png",
        collectable: true, 
        draggable: false,
        after: new AfterPlayDialog(exterieur_1_dialog)
    }
    export const postit_5: Items = {
        pos: {
            x: 560,
            y: 460

        },
        dim: {
            w:160,
            h:160
        },
        img: "/img/items/post-it_5.png",
        collectable: false, 
        draggable: true 
    }
 