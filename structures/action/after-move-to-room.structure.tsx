import React from "react"
import Player from "../player/player.structure"
import AfterDoAction from "./after-do-action.structure"

export default class AfterMoveToRoom extends AfterDoAction {
    private id_room: number

    constructor(id_room: number) {
        super('Room')
        this.id_room = id_room
    }

    do = (player: Player):React.ReactNode => {
        player.move(this.id_room)
        return undefined
    }
}