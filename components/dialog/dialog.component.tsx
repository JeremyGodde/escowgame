import React from 'react'
import style from './dialog.module.css'
import DialogStruct from '../../structures/immersion/dialog.structure'
import DefaultProps from '../../structures/props.structure'
import { CHIEN, NARRATEUR } from '../../donnees/dialogs.donnee'
import { Choice } from '../../structures/immersion/frame.structure'

/*
    Ce fichier définit le composent HTML suivant :
    <Dialog player={...} value={...}/>
 */

// Structure qui définit les attributs du composent
interface DialogProps extends DefaultProps {
    value: DialogStruct
}

// Déclaration du composent
export default class Dialog extends React.Component<DialogProps> {
    /*
        les variables utilisées par le composent
        sont déclarées ici
        pour accéder à une des variables, on utilise
        le mot-clef this :
            this.current_index_frame
    */
    private current_index_frame: number = null
    private partial_text: string
    private interval_text_printer: NodeJS.Timer
    private show_choices: boolean = false
    private after_nodes: React.ReactNode = undefined

    // nécessaire
    // initialise les valeurs reçues en attributs
    constructor(props: DialogProps) {
        super(props)
        /*
            la variable props contient les attributs,
            elle existe pour tous les composents et n'a
            pas besoin d'être déclarée
            par exemple pour accéder à l'attribut value :
                this.props.value
        */
    }

    // une fonction à nous
    // si la frame actuelle exite et si le texte de cette frame n'est pas entièrement écrit alors on
    //       écrit la lettre suivante
    textPrinter = () => {
        if (this.current_index_frame === undefined) {
            return
        }

        const i = this.partial_text.length
        if (i >= this.props.value.frames[this.current_index_frame].text.length) {
            clearInterval(this.interval_text_printer)
            if (this.props.value.frames[this.current_index_frame]
                .choice !== undefined
            ) {
                this.show_choices = true
                this.setState({})
            }
            return
        }

        this.partial_text += this.props.value.frames[this.current_index_frame].text[i]
        this.setState({})
    }

    // une fonction à nous
    // lance l'effet de texte qui s'écrit lettre par lettre
    print = () => {
        this.partial_text = ""
        this.interval_text_printer = setInterval(this.textPrinter,24)   // tous les 10 ms on affiche une lettre
    }

    // une fonction à nous
    // lance le dialogue
    start = () => {
        this.current_index_frame = 0                  // on commence le dialogue au début
        if (this.props.value.frames[this.current_index_frame]
            .choice === undefined
        ) {                                                                 // si la frame n'est pas une frame à choix alors
            window.addEventListener("click",this.click)                     // on capture le clic sur tout l'écran
        }this.print()
        this.setState({})
        /*
            la fonction setState existe pour tous les composents
            quand elle est appelée elle demande une structure,
            ici {} est une structure vide, et elle met à jour
            l'affichage du composent
        */
    }

    // une fonction à nous
    // passe à la frame suivante ou termine le dialogue le cas échéant
    click = (evt: MouseEvent) => {
        if(this.current_index_frame === undefined) {
                                                                                // on s'arrête là si le dialogue n'est pas lancé
            return
        }

        evt.stopPropagation()                                                   // ces deux lignes arrête la propagation de l'événement (sinon
        evt.preventDefault()                                                    //     il pourrait être détecté plusieurs fois)

        clearInterval(this.interval_text_printer)                               // on arrête l'effet de texte qui s'écrit lettre par lettre
        window.removeEventListener("click",this.click)                          // on supprime la capture du clic
        this.current_index_frame ++                                             // on passe à la frame suivante
        if (this.current_index_frame >= this.props.value.frames.length) {       // s'il n'y a plus d'autres frames alors on a fini
            this.current_index_frame = undefined
            if (this.props.value.after !== undefined) {                         // si la fin du dialogue doit déclencher une action
                this.after_nodes = this.props.value.after.do(this.props.player) // on réalise cette action
                this.setState({})                                               // on met à jour l'affichage
                return
            } else {
                this.after_nodes = undefined
                this.props.player.clearAfter() // la méthode fait un refresh global
                return
            }
        } else {                                                                // sinon s'il y a encore des frames
            if (this.props.value.frames[this.current_index_frame]
                    .choice === undefined
            ) {                                                                 // si la frame n'est pas une frame à choix alors
                window.addEventListener("click",this.click)                     // on capture le clic sur tout l'écran
            }
            this.print()                                                        // on recommence l'effet de texte qui s'écrit lettre par lettre
        }
        // si on a pas atteint la fin du dialogue on met à jour l'affichage
        this.setState({})
    }

    pick = (choice: Choice, evt: React.MouseEvent) => {
        evt.stopPropagation()
        evt.preventDefault()

        this.current_index_frame = undefined
        this.after_nodes = choice.after.do(this.props.player)
        this.setState({})
    }

    /*
        la fonction componentDidMount est appelée automatique lorsque le composent
        est chargé et prêt à être affiché
    */
    // dès que le composent est près on cherche à lancer le dialogue
    componentDidMount = () => {
        if(this.props.value.timer === undefined) {  // si le dialogue n'attent aucun délai
            this.start() // on commence le dialogue
        } else {
            // sinon on attent le délai demander pour commencer le dialogue
            setTimeout(this.start,this.props.value.timer * 1000)
        }
    }

    // nécessaire
    /*
        Cette fonction renvoie le HTML correspond au composent.
        
        1) La syntaxe est un peu différente du HTML car elle permet d'insérer des conditions :
        
        this.current_index_frame !== null &&        --> la balise div ne sera affiché que si la
        <div className={style.dialog}>                  condition est vraie
            ...                                             • && veut dire AND
        </div>                                              • || veut dire OR
                                                            • On peut modifier la priorité des
                                                              opérations avec des ()

        Chaque condition doit être entre {}, sauf pour la première où ce n'est pas obligatoire

        2) L'autre différence est pour insérer du contenu Javascript :

        <p>
            {
                this.props.value.frames[this.current_index_frame].text
            }
        </p>

        On utilise les {} pour afficher le contenu d'une variable, l'exemple ci-dessus affiche
        dans un paragraphe la valeur de la propriété text de la frame d'indice current_index_frame

        Point particulier :
            l'attribut className={style.dialog} est l'éqivalent de class="dialog"

    */
    render = () => {
        let current_frame = 
            this.current_index_frame !== undefined &&
            this.current_index_frame !== null
                ? this.props.value.frames[this.current_index_frame]
                : undefined
        
        return (
            <>
            {
                // si on a commencé le dialogue on peut afficher le composent
                current_frame !== undefined &&
                <div className={style.dialog}>
                    {
                        // si la frame a une image alors on l'affiche
                        current_frame.img !== undefined &&
                        <img
                            className={style.picture}
                            src={current_frame.img}
                        />
                    }
                    <div className={style.text_zone + (
                        current_frame.character === NARRATEUR
                            ? " "+style.narrator
                            : current_frame.character === CHIEN
                                ? " " + style.dog
                                : ""
                    )}>
                        <p>
                            {
                                // dans la zone de texte on affiche le texte de la frame
                                this.partial_text
                            }
                        </p>
                        {
                            // on ajoute un truc qui clignote en guise de signe passeur
                        }
                        {
                            this.show_choices === false &&
                            <span className={style.toggler}></span>
                        }
                    </div>
                {
                    this.show_choices === true &&
                    <div className={style.set_buttons}>
                    {
                        current_frame.choice.map(choice =>
                            <button onClick={(e)=>this.pick(choice,e)}>
                                {choice.proposition}
                            </button>
                        )
                    }
                    </div>
                }
                </div>
            }
            {
                this.after_nodes !== undefined &&
                this.after_nodes
            }
            </>
        )
    }
}
