import Item from "../game/item.structure"

/*
    un joueur
*/

export default class Player {
    private current_room: number            // identifiant de la salle actuelle
    private solved_enigmas: Array<number>   // identifiants des énigmes résolues
    private opened_room: Set<number>   // identifiants des pièces ouvertes
    private inventory: Set<Item>
    private refresh: (p: Player) => void
    
    constructor(start_room: number, refresh:(p: Player) => void) {
        this.current_room = start_room
        this.solved_enigmas = []
        this.inventory = new Set()
        this.opened_room = new Set()
        this.refresh = refresh
    }

    public move = (id_room:number):void =>  {
        if (this.hasOpened(id_room)) {
            this.current_room = id_room
            this.refresh(this)
        } else {
            this.current_room = id_room
            this.opened_room.add(id_room)
            this.refresh(this)
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

    public getRoom = ():number => {
        return this.current_room
    } 
}