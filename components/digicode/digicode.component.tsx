import React from "react"
import DefaultProps from "../../structures/props.structure"
import Zones from '../zones/zones.component'
import DigicodeStruct from "../../structures/game/digicode.structure"
import ZoneStruct from "../../structures/space/zone.structure"
import style from '../room/room.module.css'
import Menu from "../menu/menu.component"
import AfterDoAction from "../../structures/action/after-do-action.structure"
import Player from "../../structures/player/player.structure"
import AfterPlayDialog from "../../structures/action/after-play-dialog.structure"
import { digicode_broken_key_B_dialog } from "../../donnees/dialogs.donnee"

interface DigicodeProps extends DefaultProps {
    value: DigicodeStruct
}

class AfterPushKey extends AfterDoAction {
    private push: () => void
    constructor(push: () => void) {
        super('Key')
        this.push = push
    }

    do = (player: Player):React.ReactNode => {
        this.push()
        return undefined
    }
}

export default class Digicode extends React.Component<DigicodeProps> {
    private after_nodes: React.ReactNode = undefined
    private ratio: number
    private offset: {
        x: number
        y: number
    }
    private code: number = 0
    private led: Array<string> = [undefined,undefined]
    private static readonly dim: {w:number,h:number} = {
        w: 278,
        h: 357
    }
    private static readonly src: string = "/img/items/digicode.png"    
    private readonly keys: Array<ZoneStruct> = [
        { // A = RESET
            svg: Zones.Circ,
            click: new AfterPushKey(() => this.reset()),
            pos: {
                x: 77,
                y: 100
            },
            dim: {
                h: 38,
                w: 38
            }
        },
        { // B
            svg: Zones.Circ,
            click: new AfterPlayDialog(digicode_broken_key_B_dialog),
            pos: {
                x: 169,
                y: 100
            },
            dim: {
                h: 38,
                w: 38
            }
        },
        
        { // 0
            svg: Zones.Circ,
            click: new AfterPushKey(() => this.addNumber(0)),
            pos: {
                x: 123,
                y: 100
            },
            dim: {
                h: 38,
                w: 38
            }
        },
        {// 1
            svg: Zones.Circ,
            click: new AfterPushKey(() => this.addNumber(1)),
            pos: {
                x: 77,
                y: 240
            },
            dim: {
                h: 38,
                w: 38
            }
        },
        {// 2
            svg: Zones.Circ,
            click: new AfterPushKey(() => this.addNumber(2)),
            pos: {
                x: 123,
                y: 240
            },
            dim: {
                h: 38,
                w: 38
            }
        },
        {// 3
            svg: Zones.Circ,
            click: new AfterPushKey(() => this.addNumber(3)),
            pos: {
                x: 169,
                y: 240
            },
            dim: {
                h: 38,
                w: 38
            }
        },
        {// 4
            svg: Zones.Circ,
            click: new AfterPushKey(() => this.addNumber(4)),
            pos: {
                x: 77,
                y: 193
            },
            dim: {
                h: 38,
                w: 38
            }
        },
        {// 5
            svg: Zones.Circ,
            click: new AfterPushKey(() => this.addNumber(5)),
            pos: {
                x: 123,
                y: 193
            },
            dim: {
                h: 38,
                w: 38
            }
        },
        {// 6
            svg: Zones.Circ,
            click: new AfterPushKey(() => this.addNumber(6)),
            pos: {
                x: 169,
                y: 193
            },
            dim: {
                h: 38,
                w: 38
            }
        },
        {// 7
            svg: Zones.Circ,
            click: new AfterPushKey(() => this.addNumber(7)),
            pos: {
                x: 77,
                y: 147
            },
            dim: {
                h: 38,
                w: 38
            }
        },
        {// 8
            svg: Zones.Circ,
            click: new AfterPushKey(() => this.addNumber(8)),
            pos: {
                x: 123,
                y: 147
            },
            dim: {
                h: 38,
                w: 38
            }
        },
        {// 9
            svg: Zones.Circ,
            click: new AfterPushKey(() => this.addNumber(9)),
            pos: {
                x: 169,
                y: 147
            },
            dim: {
                h: 38,
                w: 38
            }
        }
    ]

    constructor(props: DigicodeProps) {
        super(props)
    }

    refresh = (after_nodes: React.ReactNode) => {
        this.after_nodes = after_nodes
        this.setState({})
    }

    addNumber = (num: number) => {
        this.code *= 10
        this.code += num
        this.activeLED(0)

        if (this.code === this.props.value.code) {
            this.props.player.move(this.props.value.id_entrance)
        }
    }

    reset = () => {
        this.code = 0
        this.activeLED(1)
    }

    activeLED = (i: number) => {
        this.led[i] = "active"
        this.setState({})
        setTimeout(this.deactiveLED,200,i)
    }

    deactiveLED = (i: number) => {
        this.led[i] = undefined
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
        if(this.props.player.hasOpened(this.props.value.id_entrance)) {
            this.props.player.move(this.props.value.id_entrance)
        } else {
            this.resize()
            window.addEventListener("resize",this.resize)
        }
    }

    render = () => {
        return (
            <section className={style.room}>
                <div
                    className={style.playground}
                    style={{backgroundImage: `url('${Digicode.src}')`}}>
                    {
                    this.offset !== undefined &&
                        (<>{
                            this.keys.map((key,index) => 
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
                            this.led[0] !== undefined &&
                            <svg
                                className={style.led}
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    width: `${9* this.ratio}px`,
                                    height: `${9* this.ratio}px`,
                                    left: `${108.5* this.ratio + this.offset.x}px`,
                                    bottom: `${288.5* this.ratio + this.offset.y}px`,
                                    fill: "rgba(20,200,10,0.5)"
                                }}
                            >
                                <ellipse
                                    cx={4.5 * this.ratio}
                                    rx={4.5 * this.ratio}
                                    cy={4.5 * this.ratio}
                                    ry={4.5 * this.ratio}
                                />
                            </svg>
                        }
                        {
                            this.led[1] !== undefined &&
                            <svg
                                className={style.led}
                                xmlns="http://www.w3.org/2000/svg"
                                style={{
                                    width: `${9* this.ratio}px`,
                                    height: `${9* this.ratio}px`,
                                    left: `${167.5* this.ratio + this.offset.x}px`,
                                    bottom: `${288.5* this.ratio + this.offset.y}px`,
                                    fill: "rgba(200,20,10,0.5)"
                                }}
                            >
                                <ellipse
                                    cx={4.5 * this.ratio}
                                    rx={4.5 * this.ratio}
                                    cy={4.5 * this.ratio}
                                    ry={4.5 * this.ratio}
                                />
                            </svg>
                        }
                        <Menu
                            player={this.props.player}
                            id_exit={this.props.value.id_exit}
                            offset={this.offset}
                        />
                        </>)
                    }
                    {
                        this.after_nodes !== undefined &&
                        this.after_nodes
                    }
                </div>
            </section>
        )
    }
}