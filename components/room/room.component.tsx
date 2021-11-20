import React from 'react'
import DefaultProps from '../../structures/props.structure'
import RoomStruct from '../../structures/space/room.structure'
import Dialog from '../dialog/dialog.component'
import Sound from '../sound/sound.component'
import style from './room.module.css'

interface RoomProps extends DefaultProps {
    value: RoomStruct
}

export default class Room extends React.Component<RoomProps> {
    constructor(props: RoomProps) {
        super(props)

    }

    exit = (evt: React.MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()

        this.props.player.move(this.props.value.id_exit)
    }

    componentDidMount = () => {
        
    }

    render = () => {
        return (
            <section className={style.room}>
                <div className={style.playground} style={{backgroundImage: `url('${this.props.value.src}')`}}>
                    {
                        this.props.value.dialog !== undefined &&
                        <Dialog player={this.props.player} value={this.props.value.dialog}/>
                    }
                    {
                        this.props.value.sounds !== undefined &&
                        this.props.value.sounds.length &&
                        this.props.value.sounds.map(sound => 
                            <Sound player={this.props.player} value={sound}/>
                        )
                    }
                    <div className={style.menu}>
                        <img src="/img/icons/list.svg"/>
                        <img src="/img/icons/box-arrow-right.svg" onClick={this.exit}/>
                    </div>
                </div>
            </section>
        )
    }
}