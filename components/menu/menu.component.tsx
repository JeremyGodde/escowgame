import React from "react"
import style from './menu.module.css'
import DefaultProps from "../../structures/props.structure"
import { HOME_SCREEN_ID, NONE } from "../../donnees/list_ids_room.donnee"

interface MenuProps extends DefaultProps {
    id_exit: number
    offset: {
        x: number
        y: number
    }
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
        {
            this.props.id_exit !== NONE &&
            <>
            {
                this.props.id_exit !== HOME_SCREEN_ID &&
                <img
                    className={style.exit_button}
                    src="/img/icons/arrow-left-circle-fill.svg"
                    style={{
                        left:`${4 + this.props.offset.x}px`,
                        top:`${4 + this.props.offset.y}px`
                    }}
                    onClick={this.exit}
                />
            }
                <div className={style.menu}>
                    <img src="/img/icons/list.svg"/>
                    <img src="/img/icons/box-arrow-right.svg"/>
                </div>
            </>
        }
        </>
        )
    }
}