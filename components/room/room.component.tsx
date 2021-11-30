import React from 'react'
import DefaultProps from '../../structures/props.structure'
import RoomStruct from '../../structures/space/room.structure'
import Zone from '../../structures/space/zone.structure'
import Zones from '../../public/img/zones/zones.component'
import Dialog from '../dialog/dialog.component'
import Item from '../item/item.component'
import Menu from '../menu/menu.component'
import Sound from '../sound/sound.component'
import style from './room.module.css'

interface RoomProps extends DefaultProps {
    value: RoomStruct
}

export default class Room extends React.Component<RoomProps> {
    private after_nodes: React.ReactNode = undefined

    constructor(props: RoomProps) {
        super(props)

    }

    zoneActivated = (zone:Zone, evt: React.MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()

       this.after_nodes = zone.click.do(this.props.player)
       this.setState({})
    }

    componentDidMount = () => {
        
    }

    render = () => {
        return (
            <section className={style.room}>
                <div
                    className={style.playground}
                    style={{backgroundImage: `url('${this.props.value.src}')`}}>
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
                    {
                        this.props.value['zones'] !== undefined &&
                        this.props.value['zones'].length &&
                        this.props.value['zones'].map(zone => 
                            <Zones.Zone
                                value={zone.svg}
                                onClick={(e) => this.zoneActivated(zone,e)}
                                x={zone.x}
                                y={zone.y}
                                w={zone.w}
                                h={zone.h}
                                roomDim={this.props.value['dim']}
                            />
                        )
                    }
                    {
                        this.props.value.items !== undefined &&
                        this.props.value.items.length &&
                        this.props.value.items.filter( item =>
                            !this.props.player.owned(item)
                        ).map(item => 
                                <Item value={item} player={this.props.player}/>
                            )
                    }
                    {
                        this.after_nodes !== undefined &&
                        this.after_nodes
                    }
                    <Menu player={this.props.player} id_exit={this.props.value.id_exit}/>
                </div>
            </section>
        )
    }
}