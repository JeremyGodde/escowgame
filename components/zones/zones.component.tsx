import React from 'react'
import style from '../room/room.module.css'
import { DrawingProperties, ZoneSVGProps } from '../../structures/space/zone.structure'

export interface ZoneProps extends ZoneSVGProps{
    value: React.FunctionComponent<ZoneSVGProps>
    roomDim: {
        w: number
        h: number
    }
}

class Zone extends React.Component<ZoneProps> {
    private drawingProperties: DrawingProperties
    
    constructor(props) {
        super(props)
        this.drawingProperties = {
            pos: {x:0,y:0},
            dim: {w:0,h:0}
        }
    }
    
    resize = () => {
        if (document === null || document.documentElement === null) {
            setTimeout(this.resize,10)
            return
        }

        const ratio = {
            w: document.documentElement.offsetWidth/this.props.roomDim.w,
            h: document.documentElement.offsetHeight/this.props.roomDim.h
        }
        const ratio_zoom = ratio.h/ratio.w

        if(ratio_zoom < 1) {
            // limitée par la hauteur
            // => ratio.h est la proportion à répercuter partout

            const offset =  (document.documentElement.offsetWidth - this.props.roomDim.w*ratio.h)/2

            this.drawingProperties.pos.x = this.props.pos.x * ratio.h + offset
            this.drawingProperties.pos.y = this.props.pos.y * ratio.h
            
            this.drawingProperties.dim.h = this.props.dim.h * ratio.h
            this.drawingProperties.dim.w = this.props.dim.w * ratio.h
        } else if(ratio_zoom > 1) {
            // limitée par la largeur
            // => ratio.w est la proportion à répercuter partout
            const offset = (document.documentElement.offsetHeight - this.props.roomDim.h*ratio.w)/2
            
            this.drawingProperties.pos.x = this.props.pos.x * ratio.w
            this.drawingProperties.pos.y = this.props.pos.y * ratio.w + offset
            
            this.drawingProperties.dim.h = this.props.dim.h * ratio.w
            this.drawingProperties.dim.w = this.props.dim.w * ratio.w
        } else {
            // pile la bonne taille (dimensions identiques)
            // => ratio.h et ratio.w sont égaux ici
            this.drawingProperties.pos.x = this.props.pos.x * ratio.h
            this.drawingProperties.pos.y = this.props.pos.y * ratio.w

            this.drawingProperties.dim.h = this.props.dim.h * ratio.h
            this.drawingProperties.dim.w = this.props.dim.w * ratio.w
        }

        this.drawingProperties.angulars = this.props.angulars

        this.setState({})
    }

    componentDidMount = () => {
        setTimeout(this.resize,10)
        window.addEventListener("resize",this.resize)
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