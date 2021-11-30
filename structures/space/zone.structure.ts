import React from "react"
import AfterDoAction from "../action/after-do-action.structure"

export interface ZoneSVGProps {
    onClick: (e:React.MouseEvent) => void
    x: number
    y: number
    w: number
    h: number
}

export default interface Zone {
    svg: React.FunctionComponent<ZoneSVGProps>
    click: AfterDoAction
    x: number
    y: number
    w: number
    h: number
}