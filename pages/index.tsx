import React from 'react'
import HomeScreen from '../components/home-screen/home-screen.component'
import Credits from '../components/credits/credits.component'
import Dialog from '../components/dialog/dialog.component'
import DialogStruct, { frames_home_screen } from '../structures/dialog/dialog.structure'

export default class Index extends React.Component {
    private place: number = 0
    private dialog_test: DialogStruct

    constructor(props) {
        super(props)

        this.dialog_test = {
            timer: 2,
            afterDo: () => {
                this.moveToPlace(2)
            },
            frames: frames_home_screen
        }
    }

    moveToPlace = (id_place:number) => {
        this.place = id_place
        this.setState({})
    }

    render() {
        return (
            <main>
                {
                (
                    this.place === 0 &&
                    <HomeScreen moveToPlace={this.moveToPlace}/>
                ) || (
                    this.place === 1 &&
                    <Dialog value={this.dialog_test}/>
                ) || (
                    this.place === 2 &&
                    <Credits moveToPlace={this.moveToPlace}/>
                )
                }
            </main>
        )
    }
}