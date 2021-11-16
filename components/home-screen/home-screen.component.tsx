import React from 'react'
import DefaultProps from '../../structures/props.structure'
import style from './home-screen.module.css'

export default class HomeScreen extends React.Component<DefaultProps> {
    constructor(props: DefaultProps) {
        super(props)
    }

    play = () => {
        this.props.player.move(1)
    }

    render = () => {
        return (
            <section className={style.home}>
                <h1>EscowGame</h1>
                <h3>
                    Grellier - Godde - Gressel - Guesneau - Lasserre<br/>
                    SI28 - Université de technologie de Compiègne
                </h3>
                <p>
                    AVERTISSEMENT : la suite du jeu contient des images
                    susceptibles de choquer la sensibilité des plus
                    fragiles. Si vous ne souhaitez pas continuer
                    l’aventure,  ne suivez pas le chien.
                </p>
                <button onClick={this.play}>Jouer</button>
            </section>
        )
    }
}