import React from 'react'
import style from '../room/room.module.css'
import { DrawingProperties, ZoneSVGProps } from '../../structures/space/zone.structure'

export interface ZoneProps extends ZoneSVGProps{
    value: React.FunctionComponent<{key: string, draw: ZoneSVGProps}>
    key: string
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
            key: this.props.key,
            draw:{
                onClick: this.props.onClick,
                pos: this.drawingProperties.pos,
                dim: this.drawingProperties.dim,
                angulars: this.drawingProperties.angulars
            }
        })
    }
}

function Rect(props:{key:string, draw:ZoneSVGProps}) {
    if (props.draw.angulars === undefined) {
        props.draw.angulars = {
            topLeft: 0,
            bottomLeft: 0,
            bottomRight: 0,
            topRight: 0
        }
    }

    return (
        <svg
            key={props.key}
            className={style.svg}
            style={{
                left:`${props.draw.pos.x}px`,
                bottom:`${props.draw.pos.y}px`,
                width:`${props.draw.dim.w}px`,
                height:`${props.draw.dim.h}px`
            }}
            xmlns="http://www.w3.org/2000/svg"
        >
        <polygon
            onClick={props.draw.onClick}
            points={
                `0,${props.draw.dim.h*props.draw.angulars.topLeft/2} ` +
                `0,${props.draw.dim.h*(1-props.draw.angulars.bottomLeft/2)} ` +
                `${props.draw.dim.w},${props.draw.dim.h*(1-props.draw.angulars.bottomRight/2)} ` +
                `${props.draw.dim.w},${props.draw.dim.h*props.draw.angulars.topRight/2}`
            }
        />
        </svg>
    )
}

function Circ(props:{key:string, draw:ZoneSVGProps}) {
    return (
        <svg
            key={props.key}
            className={style.svg}
            style={{
                left:`${props.draw.pos.x}px`,
                bottom:`${props.draw.pos.y}px`,
                width:`${props.draw.dim.w}px`,
                height:`${props.draw.dim.h}px`
            }}
            xmlns="http://www.w3.org/2000/svg"
        >
        <ellipse
            onClick={props.draw.onClick}
            cx={props.draw.dim.w/2}
            rx={props.draw.dim.w/2}
            cy={props.draw.dim.h/2}
            ry={props.draw.dim.h/2}
        />
        </svg>
    )
}



export default {
    Zone,
    Rect,
    Circ
}