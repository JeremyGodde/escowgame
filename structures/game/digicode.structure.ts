import Sound from "../immersion/sound.structure"

export default interface Digicode {
    id: number
    type: "DIGICODE"
    code: number
    id_exit: number
    id_entrance: number
    sounds?: Array<Sound>
}