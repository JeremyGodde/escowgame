import React from 'react'
import DefaultProps from '../../structures/props.structure'
import RoomStruct from '../../structures/space/room.structure'
import Zones from '../zones/zones.component'
import Dialog from '../dialog/dialog.component'
import Item from '../item/item.component'
import Menu from '../menu/menu.component'
import Sound from '../sound/sound.component'
import style from './room.module.css'
import { HOME_SCREEN_ID, NONE } from '../../donnees/list_ids_room.donnee'
import Video from '../video/video.component'

interface RoomProps extends DefaultProps {
    value: RoomStruct
}

export default class Room extends React.Component<RoomProps,{loading:boolean}> {
    private after_nodes: React.ReactNode = undefined
    private id: number
    private ratio: number
    private offset: {
        x: number
        y: number
    }

    constructor(props: RoomProps) {
        super(props)
        this.state = {
            loading: true
        }
        this.id = props.value.id
    }

    refresh = (after_nodes: React.ReactNode) => {
        this.after_nodes = after_nodes
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

    show = () => {
        this.setState({loading:false})
    }

    componentDidMount = () => {
        this.resize()
        window.addEventListener("resize",this.resize)
        window.addEventListener("fullscreenchange",this.resize)
    }

    componentDidUpdate = () => {
        if (this.id !== this.props.value.id) {
            this.id = this.props.value.id
            this.setState({loading:true})
            this.resize()
        }
    }

    render = () => {
        if (this.id !== this.props.value.id) {
            return <></>      
        }

        return (
            <>
            {
                this.state.loading === true
                    ?   <img
                            onLoad={this.show}
                            style={{
                                opacity: 0,
                                height: "calc(100% - 6px)",
                                width: "100%",
                                cursor: "wait"
                            }}
                            src={this.props.value.src}
                        />
                    :   <section className={style.room}>
                            <div
                                className={style.playground}
                                style={{backgroundImage: `url('${this.props.value.src}')`}}>
                                {
                                    this.props.value.dialog !== undefined &&
                                    <Dialog player={this.props.player} value={this.props.value.dialog}/>
                                }
                                {
                                    this.offset !== undefined &&
                                    <>{
                                        this.props.value.videos !== undefined &&
                                        this.props.value.videos.length &&
                                        this.props.value.videos.map(video => 
                                            <Video
                                                player={this.props.player}
                                                value={video}
                                                offset={this.offset}
                                                ratio={this.ratio}
                                            />
                                        )
                                    }
                                    {
                                        this.props.value['zones'] !== undefined &&
                                        this.props.value['zones'].length &&
                                        this.props.value['zones'].map((zone,index) => 
                                            <Zones.Zone
                                                value={zone}
                                                player={this.props.player}
                                                key={`${this.props.value.id}_zone_${index}`}
                                                refresh={this.refresh}
                                                ratio={this.ratio}
                                                offset={this.offset}
                                            />
                                        )
                                    }
                                    {
                                        this.props.value.items !== undefined &&
                                        this.props.value.items.length &&
                                        this.props.value.items.map((item,index) => 
                                                <Item
                                                    value={item}
                                                    player={this.props.player}
                                                    key={`${this.props.value.id}_item_${index}`}
                                                    refresh={this.refresh}
                                                    ratio={this.ratio}
                                                    offset={this.offset}
                                                />
                                            )
                                    }
                                    {
                                        this.props.value.id_exit !== NONE &&
                                        this.props.value.id_exit !== HOME_SCREEN_ID &&
                                        this.props.value.name !== undefined &&
                                        <h2
                                            className={style.name}
                                            style={{
                                                left: `${64 + this.offset.x}px`,
                                                top: `4px`
                                            }}
                                        >
                                        {this.props.value.name}
                                        </h2>
                                    }
                                    {
                                        <Menu
                                            player={this.props.player}
                                            id_exit={this.props.value.id_exit}
                                            offset={this.offset}
                                            dim={{
                                                h: document.documentElement.offsetHeight - 2*this.offset.y,
                                                w: document.documentElement.offsetWidth - 2*this.offset.x
                                            }}
                                        />
                                    }</>
                                }
                                {
                                    this.after_nodes !== undefined &&
                                    this.after_nodes
                                }
                            </div>
                        </section>
            }
            </>
        )
    }
}