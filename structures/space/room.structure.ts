import Item from '../game/item.structure'
import Video from '../game/video.structure'
import Dialog from '../immersion/dialog.structure'
import Sound from '../immersion/sound.structure'
import Player from '../player/player.structure'
import Zone from './zone.structure'

export default interface Room {
    id: number
    type: "ROOM"
    id_exit: number
    name?: string
    src: string
    open_if: (player:Player) => boolean
    sounds?: Array<Sound>
    videos?: Array<Video>
    dialog?: Dialog
    items?: Array<Item>
    zones?: Array<Zone>
    dim: {
        w: number
        h:number
    }
}