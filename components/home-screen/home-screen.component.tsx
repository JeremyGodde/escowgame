import React from 'react'
import style from './home-screen.module.css'

interface HomeScreenProps {
    readonly moveToPlace: (id_place:number) => void
}

export default class HomeScreen extends React.Component<HomeScreenProps> {
    constructor(props: HomeScreenProps) {
        super(props)
    }

    play = () => {
        this.props.moveToPlace(1)
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