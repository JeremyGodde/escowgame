import React from "react"
import ItemStruct from "../game/item.structure"
import Room from '../../components/room/room.component'
import Digicode from '../../components/digicode/digicode.component'
import RoomStruct from '../../structures/space/room.structure'
import DigicodeStruct from '../../structures/game/digicode.structure'
import SoundStruct from '../../structures/immersion/sound.structure'

/* Données de jeu */
import { all_rooms } from '../../donnees/rooms.donnee'
import Dialog from "../../components/dialog/dialog.component"
import {
    SALLE_5,
    BUREAU_12,
    COULOIR_1,
    COULOIR_1_FLECHE,
    CREDITS_ID,
    HOME_SCREEN_ID,
    COULOIR_2,
    PORTE_SALLE_5
} from "../../donnees/list_ids_room.donnee"
import { indices, portes_fermees } from "../../donnees/dialogs.donnee"
import Sound from "../../components/sound/sound.component"
import Item from "../../components/item/item.component"

/*
    un joueur
*/

type PLACE = RoomStruct | DigicodeStruct

export default class Player {
    private id_room: number
    private current_room: PLACE
    private start_time: number = undefined
    private opened_room: Set<number>   // identifiants des pièces ouvertes
    private inventory: Set<ItemStruct>
    private refresh: (p: Player) => void
    private after_nodes: React.ReactNode = undefined
    private sounds: Array<SoundStruct> = undefined
    private diary: string = undefined
    private advance: number = 0
    private toggle_clear: boolean = false
    private draw: boolean = true
    
    constructor(start_room: number, refresh:(p: Player) => void) {
        this.current_room = this.findRoom(start_room)
        this.id_room = start_room
        this.inventory = new Set()
        this.opened_room = new Set()
        this.refresh = refresh
    }

    public save = () => {
        this.refresh(this)
    }

    public start = () => {
        this.start_time = (new Date()).getTime()
        this.move(1)
    }

    public getTime = (): {
        sec: number
        node: React.ReactNode
    } => {
        if (this.start_time === undefined) {
            return {sec:0,node:""}
        }
        const diff = (new Date()).getTime() - this.start_time
        const duration = new Date(diff)
        const mtz = duration.getTimezoneOffset()
        const m = duration.getMinutes() + (60 * duration.getHours() + mtz)
        const s = duration.getSeconds()
        return {sec:s,node:<span>{m < 10 ? `0${m}` : m}<br/>{s < 10 ? `0${s}` : s}</span>}
    }

    public getDiary = (): string => {
        return this.diary
    }

    public setDiary = (diary:string) => {
        this.diary = diary
    }

    public move = (id_room:number):void =>  { 
        if (id_room === COULOIR_1 && this.advance >= 4) {
            id_room = COULOIR_1_FLECHE
        }
        this.id_room = id_room
        if (this.id_room === CREDITS_ID || this.id_room === HOME_SCREEN_ID) {
            this.refresh(this)
            return
        }
        const room = this.findRoom(this.id_room)
        
        if (this.hasOpened(this.id_room)) {
            this.current_room = room
            this.setAdvanceRoom(id_room)
            if (this.current_room.sounds!==undefined && this.current_room.sounds!== []){
                this.toggle_clear = true
            }
            this.refresh(this)
        } else {
            if (room.type === "ROOM" && room.open_if(this)) {
                this.current_room = room
                this.opened_room.add(id_room)
                this.setAdvanceRoom(id_room)
                if (this.current_room.sounds!==undefined && this.current_room.sounds!== []){
                    this.toggle_clear = true
                }
                this.refresh(this)
            } else if (room.type === "ROOM") {
                const h = Math.floor(Math.random() * portes_fermees.length) 
                this.after_nodes = <Dialog player={this} value={portes_fermees[h]}/>
                this.id_room = this.current_room.id
                this.refresh(this)
            } else if (room.type === "DIGICODE") {
                this.current_room = room
                this.opened_room.add(id_room)
                if (this.current_room.sounds!==undefined && this.current_room.sounds!== []){
                    this.toggle_clear = true
                }
                this.refresh(this)
            }
        }
    }

    public hasOpened = (id_room:number):boolean => {
        return this.opened_room.has(id_room)
    }

    public collect = (item: ItemStruct):React.ReactNode => {
        this.inventory.add(item)
        if (this.setAdvanceResource(item.img)) {
            this.refresh(this)
        }
        if (item.after_collect !== undefined) {
            return item.after_collect.do(this)
        }
        return undefined
    }

    public owned = (item:ItemStruct):boolean => {
        return this.inventory.has(item)
    }
    
    public DisplayItems = ():React.ReactNode => {
        return Array.from(this.inventory.values()).map(
            (item,indice) =>
            <Item
                key={`inventory_item_${indice}`}
                value={{
                    ...item,
                    pos: {
                        x:25+150*(indice%3),
                        y:25+150*(indice - (indice%3))
                    },
                    collectable:false,
                    draggable:true
                }}
                ratio={1}
                refresh={()=>{}}
                offset={{x:20,y:20}}
                player={this}
            />
        )
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
        if (this.toggle_clear === false) {
            this.draw = true
        }
        if (
            this.current_room.sounds!==undefined &&
            this.current_room.sounds!== []
        ) {
            if (this.toggle_clear === true) {
                this.toggle_clear = false
                this.draw = false
                this.sounds = undefined
                setTimeout(this.refresh,10,this)
            } else {
                this.sounds = this.current_room.sounds
            }
        }

        return (
            <>
                {
                this.draw === true &&
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
                </>
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

    public clearAfter() {
        this.after_nodes = undefined
        this.refresh(this)
    }

    private incrAdvance(j:number) {
        this.advance = this.advance === j-1 ? j : this.advance
    }

    public setAdvanceRoom = (id_room:number) => {
        switch(id_room) {
            case SALLE_5:
                this.incrAdvance(7)
                break
            case PORTE_SALLE_5:
                this.incrAdvance(6)
                break
                case COULOIR_2:
                this.incrAdvance(5)
                    break
            case BUREAU_12:
                this.incrAdvance(2)
                break
            default:
                break
        }
    }

    public setAdvanceResource = (src:string): boolean => {
        switch(src) {
            case '/img/items/clef.png':
                this.incrAdvance(8)
                return true
            case '/sound/Employe.wav':
                this.incrAdvance(4)
                return true
            case '/video/cowspiracy.mp4':
                this.incrAdvance(3)
                return true
            case '/img/items/post-it_4.png':
                this.incrAdvance(1)
                return true
            default:
                return false
        }
    }

    public getHint = ():void => {
        this.after_nodes =
            this.advance < indices.length
            ? <Dialog player={this} value= {indices[this.advance]}/>
            : undefined
        this.refresh(this)
    }
}