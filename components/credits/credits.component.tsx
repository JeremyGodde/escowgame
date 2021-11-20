import React from 'react'
import style from './credits.module.css'
import DefaultProps from '../../structures/props.structure'

const ID = "generics"

export default class Credits extends React.Component<DefaultProps> {
    private genericsElement: HTMLElement
    private timer: NodeJS.Timer
    private y: number = 0

    constructor(props: DefaultProps) {
        super(props)
    }

    // on appellera cette fonction pour mettre fin au générique
    end = (evt: MouseEvent) => {
        // on empêche l'événement de clic de se propager aux autres éléments de la fenêtre
        if(evt !== undefined) {
            evt.stopPropagation()
            evt.preventDefault()
        }
        // on défait le lien entre l'événement de clic et la fonction
        window.removeEventListener("click",this.end)
        // on supprime le timer du scrolling
        clearInterval(this.timer)
        // on change de lieu (retour à l'écran d'accueil)
        this.props.player.move(0)
    }

    // on appellera cette fonction avec un timer pour donner l'effet scrolling d'un générique
    scroll = () => {
        if (this.y > this.genericsElement.offsetHeight + 10) { // 10px après la fin
            this.end(undefined)
        } else {
            this.y += 0.5 // chaque image est décalée de 0.50px vers le haut
            this.setState({})
        }
    }

    // cette fonction est lancée automatiquement lorsque le composent a fini de charger
    componentDidMount = () => {
        this.genericsElement = document.getElementById(ID)
        window.addEventListener("click",this.end)
        this.timer = setInterval(this.scroll,10) // 1 image toutes les 10 ms => 100 fps
    }

    render = () => {
        return (
            <section id={ID} className={style.credits} style={{position: "fixed", top: `-${this.y}px`}}>
                <h2 className={style.space}>Scénaristes</h2>
                <ul>
                    <li><span>Jérémy</span> <span className={style.name}>Godde</span></li>
                    <li><span>Clara</span> <span className={style.name}>Grellier</span></li>
                    <li><span>Margaux</span> <span className={style.name}>Gressel</span></li>
                    <li><span>Marianne</span> <span className={style.name}>Guesneau</span></li>
                    <li><span>Olivia</span> <span className={style.name}>Lasserre</span></li>
                </ul>
                
                <h2>Crédits photographiques</h2>
                <h4>Banques libres de droits</h4>
                <ul>
                    <li>Unsplash, Licence Unsplash,<br/>https://unsplash.com/</li>
                </ul>
                <h4>Travail de la photographie</h4>
                <ul>
                    <li><span>Clara</span> <span className={style.name}>Grellier</span></li>
                    <li><span>Olivia</span> <span className={style.name}>Lasserre</span></li>
                </ul>
                
                <h2>Crédits sonores</h2>
                <h4>Banques libres de droits</h4>
                <ul>
                    <li>LaSonotheque.fr, Licence CC0 1.0 universel,<br/>https://lasonotheque.org/</li>
                    <li>Sond Fishing Bruitages, Licence LESF,<br/>https://sound-fishing.net/bruitages.html</li>
                </ul>
                <h4>Travail du son</h4>
                <ul>
                    <li><span>Marianne</span> <span className={style.name}>Guesneau</span></li>
                </ul>
               
                <h2>Crédits maquettes</h2>
                <ul>
                    <li><span>Clara</span> <span className={style.name}>Grellier</span></li>
                    <li><span>Margaux</span> <span className={style.name}>Gressel</span></li>
                </ul>
                
                <h2>Crédits moteur de jeu</h2>
                <ul>
                    <li><span>Jérémy</span> <span className={style.name}>Godde</span></li>
                </ul>
                
                <h2>Nous remercions</h2>
                <ul>
                    <li><span>Serge</span> <span className={style.name}>Bouchardon</span></li>
                </ul>
                <h1>EscowGame</h1>
                <h3>SI28 - Automne 2021</h3>
                <img src="/img/credits/logoUTC.jpg" alt="Université de technologie de Compiègne" width="240px"/>
            </section>
        )
    }
}