import React from 'react'
import style from '../room/room.module.css'
import { DrawingProperties, ZoneSVGProps } from '../../structures/space/zone.structure'

export interface ZoneProps extends ZoneSVGProps{
    value: React.FunctionComponent<ZoneSVGProps>
    ratio: number
    offset: {
        x: number
        y: number
    }
}

class Zone extends React.Component<ZoneProps> {
    private drawingProperties: DrawingProperties
    
    constructor(props) {
        super(props)
        console.log(props.pos,props.dim,props.ratio,props.offset)
        this.drawingProperties = {
            pos: {
                x: props.pos.x * props.ratio + props.offset.x,
                y: props.pos.y * props.ratio + props.offset.y
            },
            dim: {
                w: props.dim.w * props.ratio,
                h: props.dim.h * props.ratio
            },
            angulars: props.angulars
        }
    }

    componentDidMount = () => {

    }
    
    render = () => {
        return this.props.value({
            onClick: this.props.onClick,
            pos: this.drawingProperties.pos,
            dim: this.drawingProperties.dim,
            angulars: this.drawingProperties.angulars
        })
    }
}

function Rect(props:ZoneSVGProps) {
    if (props.angulars === undefined) {
        props.angulars = {
            topLeft: 0,
            bottomLeft: 0,
            bottomRight: 0,
            topRight: 0
        }
    }

    return (
        <svg
            className={style.svg}
            style={{
                left:`${props.pos.x}px`,
                bottom:`${props.pos.y}px`,
                width:`${props.dim.w}px`,
                height:`${props.dim.h}px`
            }}
            xmlns="http://www.w3.org/2000/svg"
        >
        <polygon
            onClick={props.onClick}
            points={
                `0,${props.dim.h*props.angulars.topLeft/2} ` +
                `0,${props.dim.h*(1-props.angulars.bottomLeft/2)} ` +
                `${props.dim.w},${props.dim.h*(1-props.angulars.bottomRight/2)} ` +
                `${props.dim.w},${props.dim.h*props.angulars.topRight/2}`
            }
        />
        </svg>
    )
}

function Circ(props:ZoneSVGProps) {
    return (
        <svg
            className={style.svg}
            style={{
                left:`${props.pos.x}px`,
                bottom:`${props.pos.y}px`,
                width:`${props.dim.w}px`,
                height:`${props.dim.h}px`
            }}
            xmlns="http://www.w3.org/2000/svg"
        >
        <ellipse
            onClick={props.onClick}
            cx={props.dim.w/2}
            rx={props.dim.w/2}
            cy={props.dim.h/2}
            ry={props.dim.h/2}
        />
        </svg>
    )
}



export default {
    Zone,
    Rect,
    Circ
}