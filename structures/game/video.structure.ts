import AfterDoAction from "../action/after-do-action.structure"
import Volume from "../immersion/volume.structure"

export default interface Video {
    src: string
    volumes?: Array<Volume>
    after?: AfterDoAction
    pos: {
        x: number
        y: number
    }
    dim: {
        w: number
        h: number
    }
    rotate?: string
}