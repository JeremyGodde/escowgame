import React from 'react'
import DefaultProps from '../../structures/props.structure'
import RoomStruct from '../../structures/space/room.structure'
import Zone from '../../structures/space/zone.structure'
import Zones from '../zones/zones.component'
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
    private ratio: number
    private offset: {
        x: number
        y: number
    }

    constructor(props: RoomProps) {
        super(props)
    }

    zoneActivated = (zone:Zone, evt: React.MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()

       this.after_nodes = zone.click.do(this.props.player)
       this.setState({})
    }

    resize = () => {
        if (document === null || document.documentElement === null) {
            setTimeout(this.resize,10)
            return
        }

        const ratio = {
            w: document.documentElement.offsetWidth/this.props.value.dim.w,
            h: document.documentElement.offsetHeight/this.props.value.dim.h
        }

        if(ratio.h < ratio.w) {
            // limitée par la hauteur
            // => ratio.h est la proportion à répercuter partout
            this.ratio = ratio.h
            this.offset = {
                x: (document.documentElement.offsetWidth - this.props.value.dim.w*ratio.h)/2,
                y: 0
            }
        } else if(ratio.h > ratio.w) {
            // limitée par la largeur
            // => ratio.w est la proportion à répercuter partout
            this.ratio = ratio.w
            this.offset = {
                y: (document.documentElement.offsetHeight - this.props.value.dim.h*ratio.w)/2,
                x: 0
            }
        } else {
            // pile la bonne taille (dimensions identiques)
            // => ratio.h et ratio.w sont égaux ici
            this.ratio = ratio.w
            this.offset = {
                x: 0,
                y: 0
            }
        }
        this.setState({})
    }

    componentDidMount = () => {
        this.resize()
        window.addEventListener("resize",this.resize)
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
                        this.offset !== undefined &&
                        this.props.value['zones'] !== undefined &&
                        this.props.value['zones'].length &&
                        this.props.value['zones'].map((zone,index) => 
                            <Zones.Zone
                                key={`${this.props.value.id}_zone_${index}`}
                                value={zone.svg}
                                onClick={(e) => this.zoneActivated(zone,e)}
                                pos={zone.pos}
                                dim={zone.dim}
                                angulars={zone.angulars}
                                ratio={this.ratio}
                                offset={this.offset}
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
                    {
                        this.offset !== undefined &&
                        <Menu
                            player={this.props.player}
                            id_exit={this.props.value.id_exit}
                            offset={this.offset}
                        />
                    }
                </div>
            </section>
        )
    }
}