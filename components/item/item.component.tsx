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
        if (this.props.value.collectable === true && !this.props.value.draggable) {
            this.class += " " + style.clickable
        }
        if(!this.props.value.collectable && this.props.value.draggable === true) {
            this.class += " " + style.draggable
        }
        this.x = this.props.value.x
        this.y = this.props.value.y
    }

    collect = (evt: MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()

        this.props.player.collect(this.props.value)
        this.class += " " + style.deleted
        this.setState({})
    }

    select = (selected:boolean, evt: MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()

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

        this.x += (105*evt.movementX) / window.screen.width
        this.y += (-105*evt.movementY) / window.screen.height

        this.setState({})
    }

    componentDidMount = () => {        
        if (this.props.value.collectable === true && !this.props.value.draggable) {
            this.self.current.addEventListener("click", this.collect)
        }
        if (this.props.value.collectable === false && this.props.value.draggable === true) {
            this.self.current.addEventListener("mousedown", (e) => this.select(true,e))
            this.self.current.addEventListener("mouseup", (e) => this.select(false,e))
            window.addEventListener("mousemove",this.move)
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