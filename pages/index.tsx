import React from 'react'
import HomeScreen from '../components/home-screen/home-screen.component'
import Credits from '../components/credits/credits.component'
import Dialog from '../components/dialog/dialog.component'
import Player from '../structures/player/player.structure'

/* Données de jeu */
import { test_dialog } from '../donnees/dialogs.donnee'
import { CREDITS_ID, HOME_SCREEN_ID } from '../donnees/rooms.donnee'

export default class Index extends React.Component<{},{player: Player},any> {
    constructor(props) {
        super(props)
        this.state = {
            player: new Player(
                HOME_SCREEN_ID,                      // identifiant de la salle dans laquelle commencer
                (p: Player) => this.setState({player: p})
            )
        }
    }

    render() {
        return (
            <main>
                {
                (
                    this.state.player.getRoom() === HOME_SCREEN_ID &&
                    <HomeScreen player={this.state.player}/>
                ) || (
                    this.state.player.getRoom() === 1 &&
                    <Dialog player={this.state.player} value={test_dialog}/>
                ) || (
                    this.state.player.getRoom() === CREDITS_ID &&
                    <Credits player={this.state.player}/>
                )
                }
            </main>
        )
    }
}