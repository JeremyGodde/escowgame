import AfterDoAction from "../action/after-do-action.structure"

/*
    un objet
*/
export default interface Item {
    pos: {
        x: number // px
        y: number // px
    }
    dim: {
        w: number // px
        h: number // px
    }
    img: string
    collectable: boolean // peut être ramassé
    draggable: boolean // peut être déplacé
}