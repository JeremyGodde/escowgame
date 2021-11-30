import React from "react"
import style from './menu.module.css'
import DefaultProps from "../../structures/props.structure"

interface MenuProps extends DefaultProps {
    id_exit: number
}

export default class Menu extends React.Component<MenuProps> {
    private after_nodes: React.ReactNode = undefined

    constructor(props: MenuProps) {
        super(props)

    }

    exit = (evt: React.MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()

        this.props.player.move(this.props.id_exit)
    }

    componentDidMount = () => {
        
    }

    render = () => {
        return (
            <>
            <img src="/img/icons/arrow-left-circle-fill.svg" onClick={this.exit}/>

            <div className={style.menu}>
                <img src="/img/icons/list.svg"/>
                <img src="/img/icons/box-arrow-right.svg"/>
            </div>
            </>
        )
    }
}