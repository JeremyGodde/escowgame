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
        console.log(evt.currentTarget.nodeValue)
        if (evt.currentTarget.nodeValue === this.props.value.password) {
            this.props.player.move(this.props.value.next)
        }
    }

    render = () => {
        return (
            <div className={style.password}>
                <input type="password" onChange={this.check}/>
                <button onClick={this.cancel}>Annuler</button>
            </div>
        )
    }
}