import React from "react"
import Item from "../game/item.structure"
import Room from '../../components/room/room.component'
import Digicode from '../../components/digicode/digicode.component'
import RoomStruct from '../../structures/space/room.structure'
import DigicodeStruct from '../../structures/game/digicode.structure'
import SoundStruct from '../../structures/immersion/sound.structure'

/* Données de jeu */
import { all_rooms } from '../../donnees/rooms.donnee'
import Dialog from "../../components/dialog/dialog.component"
import { CREDITS_ID, HOME_SCREEN_ID } from "../../donnees/list_ids_room.donnee"
import { portes_fermees } from "../../donnees/dialogs.donnee"
import Sound from "../../components/sound/sound.component"

/*
    un joueur
*/

type PLACE = RoomStruct | DigicodeStruct

export default class Player {
    private id_room: number
    private current_room: PLACE
    private solved_enigmas: Array<number>   // identifiants des énigmes résolues
    private opened_room: Set<number>   // identifiants des pièces ouvertes
    private inventory: Set<Item>
    private refresh: (p: Player) => void
    private after_nodes: React.ReactNode = undefined
    private sounds: Array<SoundStruct> = undefined
    
    constructor(start_room: number, refresh:(p: Player) => void) {
        this.current_room = this.findRoom(start_room)
        this.id_room = start_room
        this.solved_enigmas = []
        this.inventory = new Set()
        this.opened_room = new Set()
        this.refresh = refresh
    }

    public move = (id_room:number):void =>  { 
        this.after_nodes = undefined       
        this.id_room = id_room
        if (this.id_room === CREDITS_ID || this.id_room === HOME_SCREEN_ID) {
            this.refresh(this)
            return
        }
        const room = this.findRoom(this.id_room)
        
        if (this.hasOpened(this.id_room)) {
            this.current_room = room
            this.refresh(this)
        } else {
            if (room.type === "ROOM" && room.open_if(this)) {
                this.current_room = room
                this.opened_room.add(id_room)
                this.refresh(this)
            } else if (room.type === "ROOM") {
                const h = Math.floor(Math.random() * portes_fermees.length) 
                this.after_nodes = <Dialog player={this} value={portes_fermees[h]}/>
                this.id_room = this.current_room.id
                this.refresh(this)
            } else if (room.type === "DIGICODE") {
                this.current_room = room
                this.opened_room.add(id_room)
                this.refresh(this)
            }
        }
    }

    public hasOpened = (id_room:number):boolean => {
        return this.opened_room.has(id_room)
    }

    public collect = (item: Item):void => {
        this.inventory.add(item)
        this.refresh(this)
    }

    public owned = (item:Item):boolean => {
        return this.inventory.has(item)
    }

    public getRoom = () :number => {
        return this.id_room
    }

    public findRoom = (id_room):PLACE => {
        if (all_rooms === undefined || all_rooms.length === 0) {
            return undefined
        }
        let room: PLACE = all_rooms.find(
            room => room.id === id_room
        )
        return room
    }

    public renderRoom = ():React.ReactNode => {
        if (this.current_room.sounds!==undefined && this.current_room.sounds!== []){
            this.sounds=this.current_room.sounds
            console.log(this.current_room.id)
        }
        return (
            <>
                {
                    (
                        this.current_room.type === "ROOM" &&
                        <Room player={this} value={this.current_room}/>
                    ) || (
                        this.current_room.type === "DIGICODE" &&
                        <Digicode player={this} value={this.current_room}/>
                    )
                }
                {
                    this.after_nodes !== undefined &&
                    this.after_nodes
                }
                {
                    this.sounds !== undefined &&
                    this.sounds.length &&
                    this.sounds.map(sound => 
                        <Sound player={this} value={sound}/>
                    )
                }
            </>
        )
    }
}