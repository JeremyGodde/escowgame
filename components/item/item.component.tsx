import React from 'react'
import ItemStruct from '../../structures/game/item.structure'
import DefaultProps from '../../structures/props.structure'
import style from './item.module.css'

export interface ItemProps extends DefaultProps {
    value: ItemStruct
}

export default class Item extends React.Component<ItemProps> {
    private self: React.RefObject<HTMLDivElement> = React.useRef<HTMLDivElement>()
    private selected: boolean = false
    private class: string

    constructor(props: ItemProps) {
        super(props)
        this.class = style.item
    }

    collect = (evt: MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()
    }

    select = (selected:boolean, evt: MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()

        this.selected = selected
    }

    move = (evt: MouseEvent) => {
        if (!this.selected) {

        }

        evt.preventDefault()
        evt.stopPropagation()
    }

    componentDidMount = () => {        
        if (this.props.value.collectable === true) {
            this.self.current.addEventListener("click", this.collect)
            this.class += " " + style.clickable
        }
        if (this.props.value.draggable === true) {
            this.self.current.addEventListener("mousedown", (e) => this.select(true,e))
            this.self.current.addEventListener("mouseup", (e) => this.select(false,e))
            window.addEventListener("move",this.move)
            this.class += " " + style.draggable
        }
    }

    render = () => {
        return (
            <div
                className={this.class}
                ref={this.self}
                style={{
                    bottom: `${this.props.value.y}%`,
                    left: `${this.props.value.x}%`,
                    width: `${this.props.value.w}%`,
                    height: `${this.props.value.h}%`,
                    backgroundImage: `url('${this.props.value.img}')`,
                }}
            >

            </div>
        )
    }
}