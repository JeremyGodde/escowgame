import AfterDoAction from "../action/after-do-action.structure"
import Frame from "./frame.structure"

/*
        Dialog
    correspond à un dialogue
*/
export default interface Dialog {
    timer?: number          // nombre de secondes avant que le dialogue ne se lance    peut-être null (déclenchement immédiat)
    after?: AfterDoAction   // action à réaliser lorsque le dialogue se termine        peut-être null
    frames: Array<Frame>    // ensemble des lignes de dialogue
}