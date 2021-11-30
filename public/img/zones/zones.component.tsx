import React from 'react'
import style from '../../../components/room/room.module.css'
import { ZoneSVGProps } from '../../../structures/space/zone.structure'

export interface ZoneProps extends ZoneSVGProps{
    value: React.FunctionComponent<ZoneSVGProps>
    roomDim: {
        w: number
        h: number
    }
}

class Zone extends React.Component<ZoneProps> {
    private x: number
    private y: number
    private w: number
    private h: number
    
    constructor(props) {
        super(props)
    }
    
    resize = () => {
        if (document === null || document.documentElement === null) {
            setTimeout(this.resize,10)
            return
        }

        const r_w = document.documentElement.offsetWidth/this.props.roomDim.w
        const r_h = document.documentElement.offsetHeight/this.props.roomDim.h
        const w_show = document.documentElement.offsetWidth / r_w
        const offsetW = (this.props.roomDim.w - w_show)/2
        const h_show = document.documentElement.offsetHeight / r_h
        const offsetH = (this.props.roomDim.h - h_show)/2

        this.x = offsetW + this.props.x * r_w
        this.y = offsetH + this.props.y * r_h
        this.w = this.props.w * r_w
        this.h = this.props.h * r_h

        console.log("doc",document.documentElement.offsetWidth, document.documentElement.offsetHeight)
        console.log("img",this.props.roomDim.w, this.props.roomDim.h)
        console.log("off", offsetW, offsetH)

        this.setState({})
    }

    componentDidMount = () => {
        setTimeout(this.resize,10)
        window.addEventListener("resize",this.resize)
    }
    
    render = () => {
        return this.props.value({
            onClick: this.props.onClick,
            x: this.x,
            y: this.y,
            w: this.w,
            h: this.h
        })
    }
}

function LocalTechniqueAfficheGauche(props:ZoneSVGProps) {
    const a = 0
    const b = 0
    const c = 0.06
    const d = 0.01
    return (
        <svg
            className={style.svg}
            style={{
                left:`${props.x}px`,
                bottom:`${props.y}px`,
                width:`${props.w}px`,
                height:`${props.h}px`
            }}
            xmlns="http://www.w3.org/2000/svg"
        >
            <polygon
                onClick={props.onClick}
                points={`0,${props.h*a/2} 0,${props.h*(1-b/2)} ${props.w},${props.h*(1-c/2)} ${props.w},${props.h*d/2}`}
            />
        </svg>
    )
}

function LocalTechniqueAfficheDroite(props:ZoneSVGProps) {
    const a = 0.40
    const b = 0.025
    const c = 0
    const d = 0
    return (
        <svg
            className={style.svg}
            style={{
                left:`${props.x}px`,
                bottom:`${props.y}px`,
                width:`${props.w}px`,
                height:`${props.h}px`
            }}
            xmlns="http://www.w3.org/2000/svg"
        >
        <polygon
            onClick={props.onClick}
            points={`0,${props.h*a/2} 0,${props.h*(1-b/2)} ${props.w},${props.h*(1-c/2)} ${props.w},${props.h*d/2}`}
        />
        </svg>
    )
}

function LocalTechniquePapier(props:ZoneSVGProps) {
    const a = 0.40
    const b = 0.025
    const c = 0
    const d = 0
    return (
        <svg
            className={style.svg}
            style={{
                left:`${props.x}px`,
                bottom:`${props.y}px`,
                width:`${props.w}px`,
                height:`${props.h}px`
            }}
            xmlns="http://www.w3.org/2000/svg"
        >
        <ellipse
            onClick={props.onClick}
            cx={props.w/2}
            rx={props.w/2}
            cy={props.h/2}
            ry={props.h/2}
        />
        </svg>
    )
}



export default {
    Zone,
    LocalTechniqueAfficheGauche,
    LocalTechniqueAfficheDroite,
    LocalTechniquePapier
}