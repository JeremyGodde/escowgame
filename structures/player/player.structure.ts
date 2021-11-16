/*
    un joueur
*/

export default class Player {
    private current_room: number            // identifiant de la salle actuelle
    private solved_enigmas: Array<number>   // identifiants des énigmes résolues
    private refresh: (p: Player) => void
    
    constructor(start_room: number, refresh:(p: Player) => void) {
        this.current_room = start_room
        this.solved_enigmas = []
        this.refresh = refresh
    }

    public move = (id_room:number):void =>  {// fonction pour se déplacer dans la salle correspondant à id_room
        this.current_room = id_room
        this.refresh(this)
    }

    public getRoom = ():number => {
        return this.current_room
    } 
}