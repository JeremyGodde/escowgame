/*
    un objet
*/
export default interface Item {
    pos: {
        x: number // pourcentage
        y: number // pourcentage
    }
    dim: {
        w: number // pourcentage
        h: number // pourcentage
    }
    img: string
    collectable: boolean // peut être ramassé
    draggable: boolean // peut être déplacé
}