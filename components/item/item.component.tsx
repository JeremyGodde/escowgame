import React from 'react'
import ItemStruct from '../../structures/game/item.structure'
import DefaultProps from '../../structures/props.structure'
import { DrawingProperties } from '../../structures/space/zone.structure'
import style from './item.module.css'

export interface ItemProps extends DefaultProps {
    value: ItemStruct
    key: string
    ratio: number
    refresh: (after_nodes:React.ReactNode) => void
    offset: {
        x: number
        y: number
    }
}

export default class Item extends React.Component<ItemProps> {
    private self: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
    private drawingProperties: DrawingProperties
    private selected: boolean = false
    private class: string
    private owned: boolean

    constructor(props: ItemProps) {
        super(props)
        this.class = style.item
        
        this.owned = this.props.value.draggable === false && props.player.owned(props.value)
        if (this.owned) {
            this.class += " " + style.deleted
        }
        else if (this.props.value.collectable === true && this.props.value.draggable === false) {
            this.class += " " + style.clickable
        }
        else if(this.props.value.collectable === false && this.props.value.draggable === true) {
            this.class += " " + style.draggable
        }

        this.drawingProperties = {
            pos: {
                x: props.value.pos.x * props.ratio + props.offset.x,
                y: props.value.pos.y * props.ratio + props.offset.y
            },
            dim: {
                w: props.value.dim.w * props.ratio,
                h: props.value.dim.h * props.ratio
            }
        }
    }

    componentDidUpdate = () => {
        if (this.props.value.collectable === false) {
            return
        }
        this.owned = this.props.value.draggable === false && this.props.player.owned(this.props.value)
    }

    collect = (evt: MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()

        if (this.props.value.collectable === false && this.props.value.draggable === true) {
            return
        }

        this.props.refresh(this.props.player.collect(this.props.value))
    }

    select = (selected:boolean, evt: MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()
        
        if (this.props.value.collectable === true && this.props.value.draggable === false) {
            return
        }

        this.selected = selected
        if (selected) {
            this.class = this.class + " " + style.selected
         } else {
            this.class = this.class.replaceAll(" " + style.selected,"")
         }
        this.setState({})
    }

    move = (evt: MouseEvent) => {
        if (!this.selected) {
            return
        }

        evt.preventDefault()
        evt.stopPropagation()

        const dx = evt.movementX
        const dy = -evt.movementY

        if (
            dx + this.drawingProperties.pos.x < document.documentElement.offsetWidth - this.props.offset.x &&
            dx + this.drawingProperties.pos.x > this.props.offset.x &&
            dy + this.drawingProperties.pos.y < document.documentElement.offsetHeight - this.props.offset.y &&
            dy + this.drawingProperties.pos.x > this.props.offset.y
        ) {
            this.drawingProperties.pos.x += dx
            this.drawingProperties.pos.y += dy
            this.setState({})
        } else {
            this.select(false,evt)
        }
    }

    componentDidMount = () => { 
        if (this.owned) {
            return
        }       
        if (this.props.value.collectable === true && this.props.value.draggable === false) {
            console.log(this.props.value.img,"est collectable")
            this.self.current.addEventListener("click", this.collect)            
        }
        else if (this.props.value.collectable === false && this.props.value.draggable === true) {
            console.log(this.props.value.img,"est draggable")
            this.self.current.addEventListener("mousedown", (e) => this.select(true,e))
            this.self.current.addEventListener("mouseup", (e) => this.select(false,e))
            window.addEventListener("mousemove",this.move)
        }
    }

    render = () => {
        if (this.owned) {
            return <></>
        }
        return (
            <div
                className={this.class}
                ref={this.self}
                style={{
                    bottom: `${this.drawingProperties.pos.y}px`,
                    left: `${this.drawingProperties.pos.x}px`,
                    width: `${this.drawingProperties.dim.w}px`,
                    height: `${this.drawingProperties.dim.h}px`,
                    backgroundImage: `url('${this.props.value.img}')`, 
                    transform: `rotate(${this.props.value.rotate})` 
                }}
            >
            </div>
        )
    }
}