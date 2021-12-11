import React from 'react'
import style from '../room/room.module.css'
import ZoneStruct, { DrawingProperties, ZoneSVGProps } from '../../structures/space/zone.structure'
import DefaultProps from '../../structures/props.structure'
import AfterDoAction from '../../structures/action/after-do-action.structure'

export interface ZoneProps extends DefaultProps{
    value: ZoneStruct
    key: string
    ratio: number
    refresh: (after_nodes:React.ReactNode) => void
    offset: {
        x: number
        y: number
    }
}

class Zone extends React.Component<ZoneProps> {
    private drawingProperties: DrawingProperties
    
    constructor(props: ZoneProps) {
        super(props)
        this.drawingProperties = {
            pos: {
                x: props.value.pos.x * props.ratio + props.offset.x,
                y: props.value.pos.y * props.ratio + props.offset.y
            },
            dim: {
                w: props.value.dim.w * props.ratio,
                h: props.value.dim.h * props.ratio
            },
            angulars: props.value.angulars
        }
    }

    activated = (after:AfterDoAction, evt: React.MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()

       this.props.refresh(after.do(this.props.player))
    }

    componentDidMount = () => {

    }
    
    render = () => {
        return this.props.value.svg({
            key: this.props.key,
            draw:{
                onClick: this.props.value.click !== undefined
                    ? (e: React.MouseEvent) => this.activated(this.props.value.click,e)
                    : undefined,
                onMouseOver: this.props.value.hover !== undefined
                    ? (e: React.MouseEvent) => this.activated(this.props.value.hover,e)
                    : undefined,
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
            className={style.svg+(props.draw.onMouseOver !== undefined ? " "+style.hover : "")}
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
            onMouseOver={props.draw.onMouseOver}
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

function RectRotate(props:{key:string, draw:ZoneSVGProps}) {
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
            className={style.svg+(props.draw.onMouseOver !== undefined ? " "+style.hover : "")}
            style={{
                left:`${props.draw.pos.x}px`,
                bottom:`${props.draw.pos.y}px`,
                width:`${props.draw.dim.w}px`,
                height:`${props.draw.dim.h}px`,
                transform: `rotate(${props.draw.angulars.rotate})`
            }}
            xmlns="http://www.w3.org/2000/svg"
        >
        <polygon
            onClick={props.draw.onClick}
            points={
                `${props.draw.dim.w*props.draw.angulars.topLeft/2},0 ` +
                `${props.draw.dim.w*props.draw.angulars.bottomLeft/2},${props.draw.dim.h} ` +
                `${props.draw.dim.w*(1-props.draw.angulars.bottomRight/2)},${props.draw.dim.h} ` +
                `${props.draw.dim.w*(1-props.draw.angulars.topRight/2)},0`
            }
        />
        </svg>
    )
}

function Circ(props:{key:string, draw:ZoneSVGProps}) {
    return (
        <svg
            key={props.key}
            className={style.svg+(props.draw.onMouseOver !== undefined ? " "+style.hover : "")}
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
    RectRotate,
    Circ
}