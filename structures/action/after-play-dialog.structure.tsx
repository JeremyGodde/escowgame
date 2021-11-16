import Dialog from "../immersion/dialog.structure"
import AfterDoAction from "./after-do-action.structure"
import DialogComponent from "../../components/dialog/dialog.component"
import Player from "../player/player.structure"

export default class AfterPlayDialog extends AfterDoAction {
    private dialog: Dialog 

    constructor(dialog: Dialog) {
        super('Dialog')
        this.dialog = dialog
    }

    do = (player: Player):React.ReactNode => {
        return <DialogComponent player={player} value={this.dialog}/>
    }
}