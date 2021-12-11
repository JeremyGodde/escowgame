import Player from "../player/player.structure"

export default abstract class AfterDoAction {
    protected readonly type: ActionType
    constructor(type: ActionType) {
        this.type = type
    }

    public do: (player: Player) => React.ReactNode

    is = (type: ActionType):boolean => {
        return this.type === type
    }
}

export type ActionType = 'Sound' | 'Enigma' | 'Dialog' | 'Room' | 'Key'