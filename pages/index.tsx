import React from 'react'
import HomeScreen from '../components/home-screen/home-screen.component'
import Credits from '../components/credits/credits.component'
import Player from '../structures/player/player.structure'
import Room from '../components/room/room.component'

/* Données de jeu */
import { all_rooms } from '../donnees/rooms.donnee'
import { BUREAU_8, CREDITS_ID, HOME_SCREEN_ID } from '../donnees/list_ids_room.donnee'

export default class Index extends React.Component<{},{player: Player},any> {
    constructor(props) {
        super(props)
        this.state = {
            player: new Player(
                BUREAU_8,                      // identifiant de la salle dans laquelle commencer
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
                    this.state.player.getRoom() === CREDITS_ID &&
                    <Credits player={this.state.player}/>
                ) || (
                    all_rooms !== undefined &&                          // si all_rooms existe
                    all_rooms.length >= 1 &&                            // et si all_rooms a au moins 1 pièce
                    all_rooms.map(room => {                             // alors on cherche parmis les pièces
                        if (this.state.player.getRoom() === room.id) {  // celle dans laquelle on se situe
                            if(room.open_if(this.state.player)) {       // et on vérifie que la pièce peut être ouverte)
                                                                        // et on l'affiche
                            return <Room player={this.state.player} value={room}/>
                            
                            
                            } else {                                    // si la pièce ne peut pas encore être ouverte
                                // rester dans la pièce où on était et
                                // dialogue de on peut pas ouvrir
                                // >>>>>> SANS DOUTE UN MEILLEUR MOYEN DE FAIRE MAIS ON VERRA PLUS TARD
                            }
                        }
                    })
                )
                }
            </main>
        )
    }
}