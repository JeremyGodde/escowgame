import Item from "../game/item.structure"

/*
    un joueur
*/

export default class Player {
    private current_room: number            // identifiant de la salle actuelle
    private solved_enigmas: Array<number>   // identifiants des énigmes résolues
    private inventory: Array<Item>
    private refresh: (p: Player) => void
    
    constructor(start_room: number, refresh:(p: Player) => void) {
        this.current_room = start_room
        this.solved_enigmas = []
        this.inventory = []
        this.refresh = refresh
    }

    public move = (id_room:number):void =>  {// fonction pour se déplacer dans la salle correspondant à id_room
        this.current_room = id_room
        this.refresh(this)
    }

    public collect = (item: Item):void => {
        this.inventory.push(item)
        this.refresh(this)
    }

    public owned = (item:Item):boolean => {
        return this.inventory.findIndex( i => i === item ) > 0
    }

    public getRoom = ():number => {
        return this.current_room
    } 
}