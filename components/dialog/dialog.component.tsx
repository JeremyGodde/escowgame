import React from 'react'
import style from './dialog.module.css'
import DialogStruct from '../../structures/dialog/dialog.structure'

interface DialogProps {
    readonly value: DialogStruct
} 

export default class Dialog extends React.Component<DialogProps> {
    private current_index_frame: number = null

    constructor(props: DialogProps) {
        super(props)
    }

    start = () => {
        this.current_index_frame = 0
        document.addEventListener("click",this.click)
        this.setState({})
    }

    click = (evt: MouseEvent) => {
        if(this.current_index_frame === undefined) {
            return
        }

        evt.stopPropagation()
        evt.preventDefault()

        this.current_index_frame ++
        if (this.current_index_frame >= this.props.value.frames.length) {
            this.current_index_frame = undefined
            window.removeEventListener("click",this.click)
            if (this.props.value.afterDo !== undefined) {
                this.props.value.afterDo()
                return
            }
        }
        this.setState({})
    }

    componentDidMount = () => {
        if(this.props.value.timer === undefined) {
            this.start()
        } else {
            setTimeout(this.start,this.props.value.timer * 1000)
        }
    }

    render = () => {
        return (
            this.current_index_frame !== null &&
            <div className={style.dialog}>
                {
                    this.props.value.frames[this.current_index_frame].img !== undefined &&
                    <img
                        className={style.picture}
                        src={this.props.value.frames[this.current_index_frame].img}
                    />
                }
                <div className={style.text_zone}>
                    <p>
                        {
                            this.props.value.frames[this.current_index_frame].text
                        }
                    </p>
                    <span className={style.toggler}></span>
                </div>
            </div>
        )
    }
}
