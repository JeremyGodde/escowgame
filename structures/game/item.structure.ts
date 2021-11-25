/*
    un objet
*/
export default interface Item {
    x: number // pourcentage
    y: number // pourcentage
    w: number // pourcentage
    h: number // pourcentage
    img: string
    collectable: boolean // peut être ramassé
    draggable: boolean // peut être déplacé
}