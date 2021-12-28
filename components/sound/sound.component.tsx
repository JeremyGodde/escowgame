import React from 'react'
import SoundStruct from '../../structures/immersion/sound.structure'
import VolumeStruct from '../../structures/immersion/volume.structure'
import DefaultProps from '../../structures/props.structure'

interface SoundProps  extends DefaultProps {
    readonly value: SoundStruct
}

/*
    <Sound player={...} value={...} />
*/

export default class Sound extends React.Component<SoundProps> {
    private audio: React.RefObject<HTMLAudioElement> = React.createRef<HTMLAudioElement>()
    private value: SoundStruct
    private after_nodes: React.ReactNode = undefined

    constructor(props: SoundProps) {
        super(props)
        this.value = this.props.value
    }

    end = () => {
        this.audio.current.removeEventListener("ended",this.end)
        if (this.value.after !== undefined) {
            this.after_nodes = this.value.after.do(this.props.player)
            this.setState({}) // on met à jour l'affichage
        }
    }

    setVolume = (volume: VolumeStruct) => {
        this.audio.current.volume = volume.set
    }    

    play = () => {
        if (this.audio === undefined) {
            return
        }

        this.audio.current.addEventListener("ended",this.end)
        if (this.value.volumes !== undefined) {
            this.value.volumes.forEach(volume => {
                setTimeout(this.setVolume, volume.when*1000, volume);
                // when est en seconde, la fonction attend des millisecondes
            })
        }
        this.audio.current.loop = this.value.is_loop
        this.audio.current.play()
    }

    load = () => {
        this.value = this.props.value
        this.audio.current.src = this.value.src
        this.audio.current.load()
        if(this.value.timer === undefined) {
            this.play()
        } else {
            setTimeout(this.play,this.value.timer * 1000)
        }
    }

    componentDidMount = this.load

    componentDidUpdate = () => {
        if(this.props.value.src !== this.value.src) {
            this.audio.current.removeEventListener("ended",this.end)
            this.audio.current.pause()
            this.after_nodes = undefined
            this.audio.current.loop = false
            this.audio.current.src = ""
            this.load()
        }
    }

    render = () => {
        return (
            <>
                <audio ref={this.audio} key={this.value.src}/>
                {
                    this.after_nodes !== undefined &&
                    <span className="after">
                    {
                        this.after_nodes
                    }
                    </span>
                }
            </>
        )
    }
}