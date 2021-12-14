import AfterPlayDialog from "../structures/action/after-play-dialog.structure"
import Items from "../structures/game/item.structure"
import { code_post_it_dialog} from "./dialogs.donnee"


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
        after_collect: new AfterPlayDialog(code_post_it_dialog)
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
    export const pelle: Items = {
        pos: {
            x: 3950,
            y: 700

        },
        dim: {
            w:1150,
            h:750
        },
        img: "/img/items/pelle.png",
        collectable: false, 
        draggable: true 
    }
    /*export const échelle: Items = {
        pos: {
            x: 560,
            y: 460

        },
        dim: {
            w:160,
            h:160
        },
        img: "/img/items/échelle.png",
        collectable: false, 
        draggable: true 
    }
    export const carton: Items = {
        pos: {
            x: 560,
            y: 460

        },
        dim: {
            w:160,
            h:160
        },
        img: "/img/items/carton.png",
        collectable: false, 
        draggable: true 
    }*/
    export const lait: Items = {
        pos: {
            x: 3020,
            y: 100

        },
        dim: {
            w:250,
            h:450
        },
        img: "/img/items/lait.png",
        collectable: false, 
        draggable: true 
    }
    export const lait2: Items = {
        pos: {
            x: 770,
            y: 1720

        },
        dim: {
            w:200,
            h:375
        },
        img: "/img/items/lait2.png",
        collectable: false, 
        draggable: true 
    }
    export const paille: Items = {
        pos: {
            x: 5069,
            y: 20

        },
        dim: {
            w:850,
            h:600
        },
        img: "/img/items/paille.png",
        collectable: false, 
        draggable: true 
    }
    export const clef: Items = {
        pos: {
            x: 2560,
            y: 60

        },
        dim: {
            w:160,
            h:160
        },
        img: "/img/items/clef.png",
        collectable: true, 
        draggable: false
    }
 