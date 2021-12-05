import React from "react"
import AfterDoAction from "../action/after-do-action.structure"

export interface DrawingProperties {
    pos: {
        x: number
        y: number
    }
    dim: {
        w: number
        h: number
    }
    angulars?: {
        topLeft: number,
        topRight: number,
        bottomRight: number,
        bottomLeft: number
    }
}

export interface ZoneSVGProps extends DrawingProperties {
    onClick: (e:React.MouseEvent) => void
}

export default interface Zone extends DrawingProperties {
    svg: React.FunctionComponent<{key: string, draw: ZoneSVGProps}>
    click: AfterDoAction
}