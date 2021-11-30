import React from "react"
import AfterDoAction from "../action/after-do-action.structure";

export default interface Zone {
    svg: React.FunctionComponent<{onClick: (e:React.MouseEvent) => void}>
    click: AfterDoAction
}