import React from 'react'
import HomeScreen from '../components/home-screen/home-screen.component'
import Credits from '../components/credits/credits.component'
import Dialog from '../components/dialog/dialog.component.tsx'

export default class Index extends React.Component {    
    constructor(props) {
        super(props)
        this.state = {
            place: 0,
        }
    }    

    moveToPlace = (id_place) => {
        this.setState({
            place: id_place
        })
    }

    // à enlever, juste pour tester les dialogues
    dialog_test = {
        timer: 2,
        afterDo: () => {
            this.moveToPlace(2)
        },
        frames: [
            {
                img: "/img/chien/chien_face.png",
                text: "Bienvenue dans cet essai de dialogue. Cliquez quelque part pour continuer."
            },
            {
                img: "/img/chien/chien_face.png",
                text: "Cela fonctionne-t-il ?"
            },
            {
                img: "/img/chien/chien_face.png",
                text: "Bien ! Passons au générique voulez-vous"
            }
        ]
    }

    render() {
        return (
            <main>
                {
                (
                    this.state.place === 0 &&
                    <HomeScreen moveToPlace={this.moveToPlace}/>
                ) || (
                    this.state.place === 1 &&
                    <Dialog value={this.dialog_test}/>
                ) || (
                    this.state.place === 2 &&
                    <Credits moveToPlace={this.moveToPlace}/>
                )
                }
            </main>
        )
    }
}