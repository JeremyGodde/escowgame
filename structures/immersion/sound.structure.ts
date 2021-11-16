import AfterDoAction from "../action/after-do-action.structure"
import Volume from "./volume.structure"

/*
    une piste audio
*/
export default interface Sound {
    timer?: number           // secondes
    src: string              // chemin fichier audio
    is_loop: boolean         // est une boucle
    after?: AfterDoAction   // A CHANGER
    volumes?: Array<Volume>  // ensemble de réglage du volume
}