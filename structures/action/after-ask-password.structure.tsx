import Password from "../../components/password/password.component";
import Player from "../player/player.structure";
import AfterDoAction from "./after-do-action.structure";

export default class AfterAskPassword extends AfterDoAction {
    private id_room: number
    private id_next_room: number
    private password: string

    constructor(password: string,id_next_room:number) {
        super('Password')
        this.password = password
        this.id_next_room = id_next_room
    }

    do = (player: Player):React.ReactNode => {
        return <Password player={player} value={{
            password:this.password,
            next:this.id_next_room
        }}/>
    }
}