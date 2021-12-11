import AfterMoveToRoom from "../structures/action/after-move-to-room.structure"
import AfterPlayDialog from "../structures/action/after-play-dialog.structure"
import AfterPlaySound from "../structures/action/after-play-sound.structure"
import Dialog from "../structures/immersion/dialog.structure"
import { 
    COULOIR_1,
    CREDITS_ID,
    EXTERIEUR_3,
    EXTERIEUR_3bis,
    USINE_EXTERIEUR_1
} from "./list_ids_room.donnee"
import { EXTERIEUR_2 } from "./list_ids_room.donnee"
import { bureau_inaccessible_sound, local_technique_sound } from "./sounds.donnee"

export const NARRATEUR = "narrateur"
export const CHIEN = "Le chien" 
export const JOUEUR = "Vous"

export const code_post_it_dialog: Dialog = {
    frames: [
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Cela ne ressemble pas à un mot de passe d'ordinateur, à quoi ce code peut-il bien servir ?"
        },
    ]
}

export const digicode_broken_key_B_dialog: Dialog = {
    frames: [
        {
            character: JOUEUR,
            text: "Cette touche est cassée, impossible d'appuyer dessus"
        }
    ]
}

export const lunettes_dialog: Dialog = {
    frames: [
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Mais que fais-tu ? Ce ne sont que les lunettes de mon maître, n'y touche pas, cela ne va pas nous aider"
        },
    ]
}

export const bureau_inaccessible: Dialog = {
    frames: [
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "On dirait que la porte est fermée. Je ne pense pas que tu puisses accéder à cette pièce..."
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Tu devrais essayer une autre porte."
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Attends, j'entends quelque chose. Tends l'oreille."
        },
    ],
    after: new AfterPlaySound(bureau_inaccessible_sound)
}

export const usine_exterieur_1bis_dialog: Dialog = {
    timer: 1,
    after: new AfterMoveToRoom(COULOIR_1),
    frames: [
        {
            character: JOUEUR,
            text: "Mais où est ce que tu m’as emmené ? Quel est cet endroit ?... Peut-être devrais-je rebrousser chemin..."
        },
        {
            character: CHIEN,
            text: "Non, attends ne pars pas !"
        },
        {
            character: JOUEUR,
            text: "Pardon ?? Qui me parle ????"
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "C’est moi, devant toi !"
        },
        {
            character: JOUEUR,
            text: "Je dois rêver, ce n’est pas possible, que se passe t-il ici ??!!!"
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Si je t’aborde c’est parce qu’il y a une urgence à l’intérieur, j’ai vraiment besoin de toi! S’il te plaît, n’ai pas peur et suis moi..."
        },
        {
            character: JOUEUR,
            text: "Comment pourrais-je faire confiance à un chien qui parle, et comment pourrais-je y croire ??"
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "S’il te plaît, tu dois me faire confiance, je te promets de ne te faire aucun mal. Je veux juste que tu découvres la vérité sur ce que font subir les humains aux animaux et que tu nous aides... Suis moi."
        },
        {
            character: JOUEUR,
            text: "Je dois être en train de faire un cauchemar. Je vais quand même y jeter un œil, mais si ça ne m’inspire pas confiance je ferais demi-tour."
        }
    ]
}

export const usine_exterieur_1_dialog: Dialog = {
    timer: 1,
    after: new AfterPlayDialog(usine_exterieur_1bis_dialog),
    frames: [
        {
            character: JOUEUR,
            text: "Mais quel est ce bâtiment ? Je ne l’avais jamais vu auparavant, cela ressemble à une usine… C’est un peu effrayant de nuit..."
        }
    ]
}

const exterieur_4_dialog_follow_dog: Dialog = {
    after: new AfterMoveToRoom(USINE_EXTERIEUR_1),
    frames: [
        {
            character: JOUEUR,
            text: "Je ne peux pas le laisser là !"
        }
    ]
}

const exterieur_4_dialog_back_home: Dialog = {
    after: new AfterMoveToRoom(CREDITS_ID),
    frames: [
        {
            character: JOUEUR,
            text: "Je dois rentrer chez moi, tant pis pour lui."
        }
    ]
}

export const exterieur_3bis_dialog: Dialog = {
    frames: [
        {
            character: NARRATEUR,
            text: "Un chien s’extirpe difficilement du grillage et vous coupe la route ! Il aboie fortement et ne semble pas vouloir s’arrêter"
        },
        {
            character: JOUEUR,
            text: "Je devrais peut-être faire demi-tour…"
        },
        {
            character: JOUEUR,
            text: "Oh mais pourquoi se met-il à pleurer ??"
        },
        {
            character: NARRATEUR,
            text: "Le chien cesse soudainement d'aboyer. Il n’a pas l’air agressif ! Au contraire … Il pousse de petits cris plaintifs et à l’air mal en point. Il baisse la queue et commence à venir vers vous sans trop s’approcher. Il vous regarde avec insistance puis regarde en direction du grillage d’où il vient. On dirait qu’il veut que vous le suiviez."
        },
        {
            character: NARRATEUR,
            text: "Il fait nuit mais ce chien vous intrigue énormément. Que décidez vous ?",
            choice: [
                {
                    proposition: "Suivre le chien",
                    after: new AfterPlayDialog(exterieur_4_dialog_follow_dog)
                },
                {
                    proposition: "Rentrer à la maison",
                    after: new AfterPlayDialog(exterieur_4_dialog_back_home)
                }
            ]
        }
    ]
}

export const exterieur_3_dialog: Dialog = {
    timer: 1,
    after: new AfterMoveToRoom(EXTERIEUR_3bis),
    frames: [
        {
            character: JOUEUR,
            text: "… Il commence à faire sombre ici …"
        },
        {
            character: NARRATEUR,
            text: "Vous n’êtes plus si loin de votre habitation, lorsque soudain ..."
        }
    ]
}

export const exterieur_2_dialog: Dialog = {
    timer: 1,
    after: new AfterMoveToRoom(EXTERIEUR_3),
    frames: [
        {
            character: JOUEUR,
            text: "La nuit tombe, il faut que je me dépêche."
        },
    ]
}

export const exterieur_1_dialog: Dialog = {
    timer: 1,
    after: new AfterMoveToRoom(EXTERIEUR_2),
    frames: [
        {
            character: JOUEUR,
            text: "… Enfin cette journée s’achève. Quel bonheur de rentrer à vélo par un temps pareil ! La campagne me semble si belle ce soir."
        },
        {
            character: NARRATEUR,
            text: "Vous enfourchez votre vélo et commencez à rentrer chez vous à travers le calme de la campagne."
        }
    ]
}
