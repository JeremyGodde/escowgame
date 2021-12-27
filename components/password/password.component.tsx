import React from 'react'
import DefaultProps from '../../structures/props.structure'
import style from './password.module.css'

interface PasswordProps  extends DefaultProps {
    readonly value: {
        password: string,
        next: number,
        prev: number
    }
}

export default class Password extends React.Component<PasswordProps> {
    private inputRef: React.RefObject<HTMLInputElement> = React.createRef<HTMLInputElement>()
    constructor(props){
        super(props)
    }

    componentDidMount = ():void => {
        if (this.props.player.hasOpened(this.props.value.next)) {
            this.props.player.move(this.props.value.next)
        }
    }

    cancel = () => {
        this.props.player.move(this.props.value.prev)
    }
    
    check = (evt: React.FormEvent) => {
        evt.stopPropagation()
        evt.preventDefault()
        if (this.inputRef.current.value === this.props.value.password) {
            this.props.player.move(this.props.value.next)
        }
    }

    render = () => {
        return (
            <div className={style.password}>
                <input type="password" ref={this.inputRef} onChange={this.check}/>
                <button onClick={this.cancel}>Annuler</button>
            </div>
        )
    }
}