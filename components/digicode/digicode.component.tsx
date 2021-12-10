import React from "react"
import DefaultProps from "../../structures/props.structure"
import Zones from '../zones/zones.component'
import DigicodeStruct from "../../structures/game/digicode.structure"
import ZoneStruct from "../../structures/space/zone.structure"
import style from '../room/room.module.css'
import Menu from "../menu/menu.component"

interface DigicodeProps extends DefaultProps {
    value: DigicodeStruct
}

const keys: Array<ZoneStruct> = [
    {
        svg: Zones.Circ,
        pos: {
            x: 123,
            y: 100
        },
        dim: {
            h: 38,
            w: 38
        }
    }
]

export default class Digicode extends React.Component<DigicodeProps> {
    private after_nodes: React.ReactNode = undefined
    private ratio: number
    private offset: {
        x: number
        y: number
    }
    private static dim: {w:number,h:number} = {
        w: 278,
        h: 357
    }
    private static src: string = "/img/items/digicode.png"

    constructor(props: DigicodeProps) {
        super(props)
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
            w: document.documentElement.offsetWidth/Digicode.dim.w,
            h: document.documentElement.offsetHeight/Digicode.dim.h
        }

        if(ratio.h < ratio.w) {
            // limitée par la hauteur
            // => ratio.h est la proportion à répercuter partout
            this.ratio = ratio.h
            this.offset = {
                x: (document.documentElement.offsetWidth - Digicode.dim.w*ratio.h)/2,
                y: 0
            }
        } else if(ratio.h > ratio.w) {
            // limitée par la largeur
            // => ratio.w est la proportion à répercuter partout
            this.ratio = ratio.w
            this.offset = {
                y: (document.documentElement.offsetHeight - Digicode.dim.h*ratio.w)/2,
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
                    style={{backgroundImage: `url('${Digicode.src}')`}}>
                    {
                        this.offset !== undefined &&
                        keys.map((key,index) => 
                            <Zones.Zone
                                value={key}
                                player={this.props.player}
                                key={`Digicode_key_${index}`}
                                refresh={this.refresh}
                                ratio={this.ratio}
                                offset={this.offset}
                            />
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