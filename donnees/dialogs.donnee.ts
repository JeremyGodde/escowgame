import AfterDoAction from "../structures/action/after-do-action.structure"
import AfterMoveToRoom from "../structures/action/after-move-to-room.structure"
import AfterPlayDialog from "../structures/action/after-play-dialog.structure"
import Dialog from "../structures/immersion/dialog.structure"
import { CREDITS_ID } from "./rooms.donnee"

const test_chained_dialog: Dialog = {
    timer: 0.5,
    after: new AfterMoveToRoom(CREDITS_ID),
    frames: [
        {
            img: "/img/chien/chien_face.png",
            text: "Cela fonctionne-t-il ?"
        },
        {
            img: "/img/chien/chien_face.png",
            text: "Bien ! Passons au générique voulez-vous"
        }
    ]
}

export const test_dialog: Dialog = {
    timer: 2,
    after: new AfterPlayDialog(test_chained_dialog),
    frames: [
        {
            img: "/img/chien/chien_face.png",
            text: "Bienvenue dans cet essai de dialogue. Cliquez quelque part pour continuer."
        }
    ]
}
