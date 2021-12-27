import React from "react"
import style from './menu.module.css'
import DefaultProps from "../../structures/props.structure"
import { HOME_SCREEN_ID, NONE } from "../../donnees/list_ids_room.donnee"

interface MenuProps extends DefaultProps {
    id_exit: number
    dim: {
        h: number
        w: number
    }
    offset: {
        x: number
        y: number
    }
}

interface MenuState {
    open:boolean
    inventory: boolean
    diary: boolean
    time: {
        sec: number
        node: React.ReactNode
    }
}

export default class Menu extends React.Component<MenuProps,MenuState> {
    private after_nodes: React.ReactNode = undefined
    private interval: NodeJS.Timer = undefined
    private my_diary: string

    constructor(props: MenuProps) {
        super(props)
        this.state = {
            open: false,
            inventory: false,
            diary: false,
            time: props.player.getTime()
        }
        this.my_diary = this.props.player.getDiary()
    }

    exit = (evt: React.MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()

        this.props.player.move(this.props.id_exit)
    }

    componentDidMount = () => {
        
    }

    setMenu = (evt: React.MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()
        
        const open = !this.state.open
        if (open) {
            this.interval = setInterval(()=>this.setState({time: this.props.player.getTime()}),1000)
        } else {
            clearInterval(this.interval)
            this.interval = undefined
        }
        this.setState({open,diary:false,inventory:false})
    }

    diary = (evt: React.MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()
        
        if(!this.state.open) {
            return
        }
        this.my_diary = this.props.player.getDiary()
        this.setState({diary:!this.state.diary,inventory:false})
    }

    hint = (evt: React.MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()
        
        if(!this.state.open) {
           return
        }
        this.props.player.getHint()
    }
    
    inventory = (evt: React.MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()

        if(!this.state.open) {
            return
        }
        
        this.setState({diary:false,inventory:!this.state.inventory})
    }

    editHint = (evt: React.KeyboardEvent) => {
        evt.preventDefault()
        evt.stopPropagation()

        this.props.player.setDiary(evt.currentTarget.innerHTML)
    }

    render = () => {
        return (
        <>
        {
            this.props.id_exit !== NONE &&
            <>
                {
                    this.props.id_exit !== HOME_SCREEN_ID &&
                    <svg
                        className={style.exit_button}
                        style={{
                            left:`${4 + this.props.offset.x}px`,
                            top:`${4 + this.props.offset.y}px`
                        }}
                        onClick={this.exit}
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 16 16"
                        height="16"
                        width="16"
                    >
                        <path d="M8 0a8 8 0 1 0 0 16A8 8 0 0 0 8 0zm3.5 7.5a.5.5 0 0 1 0 1H5.707l2.147 2.146a.5.5 0 0 1-.708.708l-3-3a.5.5 0 0 1 0-.708l3-3a.5.5 0 1 1 .708.708L5.707 7.5H11.5z"/>
                    </svg>
                }
                {
                    this.state.inventory && 
                    <div
                        className={style.inventory}
                        style={{
                            height: `${this.props.dim.h - 40}px`,
                            width: `${this.props.dim.w - 40}px`,
                            left: `${this.props.offset.x + 20}px`,
                            bottom: `${this.props.offset.y + 20}px`
                        }}
                    >
                        {
                            this.props.player.DisplayItems()
                        }
                    </div>
                }
                {
                    this.state.diary &&
                    <div
                        className={style.diary}
                        style={{
                            height: `${this.props.dim.h - 104}px`,
                            width: `${this.props.dim.w - 104}px`,
                            left: `${this.props.offset.x + 20}px`,
                            bottom: `${this.props.offset.y + 20}px`
                        }}
                        contentEditable={true}
                        onKeyUpCapture={this.editHint}
                        dangerouslySetInnerHTML={{__html: this.my_diary}}
                    ></div>
                }
                <div className={style.menu + (this.state.open ? " "+style.opened : "")}>
                    {
                    <>
                        {
                            !this.state.open
                            ? <img src="/img/icons/list.svg" onClick={this.setMenu}/>
                            : <img src="/img/icons/list-cut.svg" onClick={this.setMenu}/>
                        }        
                        <div>
                            <img
                                src="/img/icons/circle.svg"
                                style={{
                                    transform: `rotate(${6*this.state.time.sec}deg)`
                                }}
                            />
                            {this.state.time.node}
                        </div>
                        {
                            this.state.inventory
                                ? <img src="/img/icons/handbag.svg" onClick={this.inventory} style={{opacity:0.5}}/>
                                : <img src="/img/icons/handbag.svg" onClick={this.inventory}/>
                        }
                        {
                            this.state.diary
                            ? <img src="/img/icons/journal-text.svg" onClick={this.diary} style={{opacity:0.5}}/>
                            : <img src="/img/icons/journal-text.svg" onClick={this.diary}/>
                        }
                        <img className={style.hint} title="Un indice ?" src="/img/icons/lightbulb.svg" onClick={this.hint}/>
                    </>
                    }
                </div>
            </>
        }
        </>
        )
    }
}