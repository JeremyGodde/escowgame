import Dialog from '../immersion/dialog.structure'
import Sound from '../immersion/sound.structure'
import Player from '../player/player.structure'
import Zone from './zone.structure'

export default interface Room {
    id: number
    id_exit: number
    src: string
    open_if: (player:Player) => boolean
    sounds?: Array<Sound>
    dialog?: Dialog
    zones?: Array<Zone>
}