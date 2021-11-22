import React from "react"
import AfterDoAction from "../action/after-do-action.structure";

export default interface Zone {
    x: number /*abscisse marge gauche*/
    y: number /*ordonnée marge par rapport au bas*/
    h: number /*hauteur*/
    w: number /*largeur*/
    svg: string
    click: AfterDoAction
}