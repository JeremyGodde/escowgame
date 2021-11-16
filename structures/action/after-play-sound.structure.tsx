import Sound from "../immersion/sound.structure"
import AfterDoAction from "./after-do-action.structure"
import SoundComponent from "../../components/sound/sound.component"
import Player from "../player/player.structure"

export default class AfterPlaySound extends AfterDoAction {
    private sound: Sound 

    constructor(sound: Sound) {
        super('Sound')
        this.sound = sound
    }

    do = (player: Player):React.ReactNode => {
        return <SoundComponent player={player} value={this.sound}/>
    }
}