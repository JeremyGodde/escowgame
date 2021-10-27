import React from 'react'
import SoundStruct from '../../structures/ambiant/sound.structure'

interface SoundProps {
    value: SoundStruct
}

/*
    <Sound value={...} />
*/

export default class Sound extends React.Component<SoundProps> {
    private audio: React.RefObject<HTMLAudioElement> = React.createRef<HTMLAudioElement>()
    private value: SoundStruct

    constructor(props: SoundProps) {
        super(props)
        this.value = this.props.value
    }

    end = () => {
        this.audio.current.removeEventListener("ended",this.end)
        if (this.value.next !== undefined) {
            this.value = this.value.next
            this.load()
        }
    }

    play = () => {
        if (this.audio === undefined) {
            return
        }
        
        this.audio.current.addEventListener("ended",this.end)
        this.audio.current.loop = this.value.isLoop
        this.audio.current.play()
    }

    load = () => {
        this.audio.current.src = this.value.src
        this.audio.current.load()
        if(this.value.timer === undefined) {
            this.play()
        } else {
            setTimeout(this.play,this.value.timer * 1000)
        }
    }

    componentDidMount = this.load

    render = () => {
        return (
                <audio ref={this.audio} />
        )
    }
}