import React from 'react'
import VideoStruct from '../../structures/game/video.structure'
import VolumeStruct from '../../structures/immersion/volume.structure'
import DefaultProps from '../../structures/props.structure'
import { DrawingProperties } from '../../structures/space/zone.structure'
import style from '../room/room.module.css'

interface VideoProps  extends DefaultProps {
    value: VideoStruct
    offset: {
        x: number
        y: number
    }
    ratio: number
}

/*
    <Video player={...} value={...} />
*/

export default class Video extends React.Component<VideoProps> {
    private video: React.RefObject<HTMLVideoElement> = React.createRef<HTMLVideoElement>()
    private value: VideoStruct
    private drawingProperties: DrawingProperties
    private after_nodes: React.ReactNode = undefined
    private style_play: React.CSSProperties = undefined
    private playing: boolean

    constructor(props: VideoProps) {
        super(props)
        this.value = this.props.value
        this.drawingProperties = {
            pos: {
                x: this.value.pos.x * props.ratio + props.offset.x,
                y: this.value.pos.y * props.ratio + props.offset.y
            },
            dim: {
                w: this.value.dim.w * props.ratio,
                h: this.value.dim.h * props.ratio
            },
            angulars: undefined
        }
        this.defaultStyle()
    }

    defaultStyle = () => {
        this.style_play = {
            left: `${this.drawingProperties.pos.x}px`,
            bottom: `${this.drawingProperties.pos.y}px`,
            width: `${this.drawingProperties.dim.w}px`,
            height: `${this.drawingProperties.dim.h}px`,
            transform: `rotate(${this.value.rotate})`
        }
        this.playing = false
    }

    end = () => {
        this.defaultStyle()
        this.video.current.removeEventListener("ended",this.end)
        if (this.value.after !== undefined) {
            this.after_nodes = this.value.after.do(this.props.player)
        } else {
            this.video.current.currentTime = 0
        }
        this.setState({})
    }

    setVolume = (volume: VolumeStruct) => {
        this.video.current.volume = volume.set
    }    

    play = (evt: React.MouseEvent) => {
        evt.preventDefault()
        evt.stopPropagation()

        if (this.video === undefined) {
            return
        }
        this.style_play = {
            left: `5%`,
            bottom: `0px`,
            width: `90%`,
            height: `100%`
        }
        this.playing = true
        this.props.player.setAdvanceResource(this.props.value.src)
        this.props.player.save()

        this.video.current.addEventListener("ended",this.end)
        if (this.value.volumes !== undefined) {
            this.value.volumes.forEach(volume => {
                setTimeout(this.setVolume, volume.when*1000, volume);
                // when est en seconde, la fonction attend des millisecondes
            })
        }
        this.video.current.play()
    }

    load = () => {
        this.video.current.src = this.value.src
        this.video.current.load()
    }

    componentDidMount = this.load

    render = () => {
        return (
            <div key={this.value.src}
                className={style.video+(this.playing ? " "+style.playing : "")}
                style={this.style_play}>
                <video
                    ref={this.video}
                    onClick={this.play}
                />
                {
                    this.after_nodes !== undefined &&
                    this.after_nodes
                }
            </div>
        )
    }
}