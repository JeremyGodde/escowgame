import React from 'react'
import ItemStruct from '../../structures/game/item.structure'
import DefaultProps from '../../structures/props.structure'
import style from './item.module.css'

export interface ItemProps extends DefaultProps {
    value: ItemStruct
}

export default class Item extends React.Component<ItemProps> {
    private self: React.RefObject<HTMLDivElement> = React.createRef<HTMLDivElement>()
    private selected: boolean = false
    private class: string
    private x: number
    private y: number

    constructor(props: ItemProps) {
        super(props)
        this.class = style.item
        if (this.props.value.collectable === true) {
            this.class += " " + style.clickable
        }
        if(this.props.value.draggable === true) {
            this.class += " " + style.draggable
        }
        this.y = this.props.value.x
        this.y = this.props.value.y
    }

    collect = (evt: MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()
    }

    select = (selected:boolean, evt: MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()

        this.selected = selected
        this.class = this.selected ? this.class + " " + style.selected : this.class;
        this.setState({})
    }

    move = (evt: MouseEvent) => {
        if (!this.selected) {
            return
        }

        evt.preventDefault()
        evt.stopPropagation()

        this.x += evt.movementX / window.screen.availWidth
        this.y += evt.movementY / window.screen.availHeight

        this.setState({})
    }

    componentDidMount = () => {        
        if (this.props.value.collectable === true) {
            this.self.current.addEventListener("click", this.collect)
        }
        if (this.props.value.draggable === true) {
            this.self.current.addEventListener("mousedown", (e) => this.select(true,e))
            this.self.current.addEventListener("mouseup", (e) => this.select(false,e))
            window.addEventListener("move",this.move)
        }
    }

    render = () => {
        return (
            <div
                className={this.class}
                ref={this.self}
                style={{
                    bottom: `${this.y}%`,
                    left: `${this.x}%`,
                    width: `${this.props.value.w}%`,
                    height: `${this.props.value.h}%`,
                    backgroundImage: `url('${this.props.value.img}')`,
                }}
            >

            </div>
        )
    }
}