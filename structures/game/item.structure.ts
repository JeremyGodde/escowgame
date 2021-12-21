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
    rotate?: string
    img: string
    collectable: boolean // peut être ramassé
    draggable: boolean // peut être déplacé
    after_collect?: AfterDoAction // action à faire après avoir collecté
}