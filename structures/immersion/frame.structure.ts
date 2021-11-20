import AfterDoAction from "../action/after-do-action.structure"

/*
        Frame
    correspond à une ligne de dialogue
*/
export default interface Frame {
    text: string            // texte du dialogue
    character: string       // nom du personnage
    img?: string            // URL de l'image du personnage    peut-être null
    choice?: Array<Choice>  // choix laisser à l'utilisateur   peut-être null
}

export interface Choice {
    proposition: string
    after: AfterDoAction
}