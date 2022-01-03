import AfterPlayDialog from "../structures/action/after-play-dialog.structure"
import Items from "../structures/game/item.structure"
import { code_post_it_dialog} from "./dialogs.donnee"

export const étiquette_zoom: Items ={
    pos: {
        x: 40,
        y: 2

    },
    dim: {
        w:152,
        h:160
    },
    img: "/img/items/Etiquettebas.png",
    collectable: false, 
    draggable: true 
}
export const étiquette: Items ={
        pos: {
            x: 0,
            y: 400

        },
        dim: {
            w:150,
            h:100
        },
        img: "/img/items/Etiquettebas.png",
        collectable: false, 
        draggable: true 
    }
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
            x: 200,
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
    export const fermes_usines: Items = {
        pos: {
            x: 27,
            y: 20

        },
        dim: {
            w:360,
            h:660
        },
        img: "/img/items/fermes-usines.jpg",
        collectable: false, 
        draggable: true 
    }
    export const pelle: Items = {
        pos: {
            x: 3650,
            y: 400

        },
        dim: {
            w:2250,
            h:1200
        },
        img: "/img/items/pelle.png",
        collectable: false, 
        draggable: true,
        rotate: '-70deg'
    }
    export const échelle: Items = {
        pos: {
            x: 1640,
            y: 200

        },
        dim: {
            w:480,
            h:1820
        },
        img: "/img/items/échelle.png",
        collectable: false, 
        draggable: true 
    }
    export const carton: Items = {
        pos: {
            x: 200,
            y: 50

        },
        dim: {
            w:850,
            h:600
        },
        img: "/img/items/carton.png",
        collectable: false, 
        draggable: true 
    }
    export const lait: Items = {
        pos: {
            x: 3200,
            y: 20

        },
        dim: {
            w:250,
            h:450
        },
        img: "/img/items/lait.png",
        collectable: false, 
        draggable: true 
    }
    export const grille: Items = {
        pos: {
            x: 4400,
            y: 410

        },
        dim: {
            w:1340,
            h:970
        },
        img: "/img/items/grille.png",
        collectable: false, 
        draggable: true 
    }
    export const lait2: Items = {
        pos: {
            x: 755,
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
            x: 0,
            y: 0

        },
        dim: {
            w:1700,
            h:1100
        },
        img: "/img/items/paille.png",
        collectable: false, 
        draggable: true 
    }
    export const rateau: Items = {
        pos: {
            x: 1900,
            y: -200
        },
        dim: {
            w:1500,
            h:1300
        },
        img: "/img/items/râteau.png",
        collectable: false, 
        draggable: true,
        rotate:'-60deg'
    }
    export const clef: Items = {
        pos: {
            x: 1410,
            y: 10

        },
        dim: {
            w:200,
            h:200
        },
        img: "/img/items/clef.png",
        collectable: true, 
        draggable: false
    }