
/*
        Frame
    correspond à une ligne de dialogue
*/
export default interface Frame {
    text: string        // texte du dialogue
    character: string   // nom du personnage
    img?: string        // URL de l'image du personnage    peut-être null
}