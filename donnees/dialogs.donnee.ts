import AfterMoveToRoom from "../structures/action/after-move-to-room.structure"
import AfterPlayDialog from "../structures/action/after-play-dialog.structure"
import AfterPlaySound from "../structures/action/after-play-sound.structure"
import Dialog from "../structures/immersion/dialog.structure"
import { 
    COULOIR_1,
    COULOIR_1_CINEMATIQUE_ENTREE,
    COULOIR_1_FIN_A,
    COULOIR_1_FIN_B,
    COULOIR_1_FIN_C,
    CREDITS_ID,
    EXTERIEUR_3,
    EXTERIEUR_3bis,
    EXTERIEUR_A,
    EXTERIEUR_C,
    MAISON_A_C,
    MAISON_B,
    USINE_EXTERIEUR_1
} from "./list_ids_room.donnee"
import { EXTERIEUR_2 } from "./list_ids_room.donnee"
import {employé_sound } from "./sounds.donnee"

export const NARRATEUR = "narrateur"
export const CHIEN = "Le chien" 
export const JOUEUR = "Vous"

export const indices: Array<Dialog> = [
    {
        // 0
        frames: [
            {
                character: CHIEN,
                img: "/img/dog/chien_face.png",
                text: "As-tu bien cherché dans le bureau 8 ? l'employé qui travaille là laisse souvent traîner ses affaires, et il a mauvaise mémoire, je sais qu'il laisse traîner des mots de passe."
            }
        ] 
    },
    {
        // 1
        frames: [
            {
                character: CHIEN,
                img: "/img/dog/chien_face.png",
                text: "As-tu fait attention au dessin sur le post-it que tu as ramassé ?"
            }
        ] 
    },
    {
        // 2
        frames: [
            {
                character: CHIEN,
                img: "/img/dog/chien_face.png",
                text: "Il y a une vidéo d'ouverte sur l'ordinateur du bureau"
            }
        ]
    },
    {
        // 3
        frames: [
            {
                character: CHIEN,
                img: "/img/dog/chien_face.png",
                text: "Es-tu sûr d'avoir essayer toutes les portes ?"
            }
        ]
    },
    {
        // 4
        frames: [
            {
                character: CHIEN,
                img: "/img/dog/chien_face.png",
                text: "Si on allait voir au fond du couloir ?"
            }
        ]
    },
    {
        // 5
        frames: [
            {
                character: CHIEN,
                img: "/img/dog/chien_face.png",
                text: "Si j'avais des mains je t'aiderai à chercher tu sais"
            }
        ]
    },
    {
        // 6
        frames: [
            {
                character: CHIEN,
                img: "/img/dog/chien_face.png",
                text: "La trace d'eau sur cette porte à une forme familière"
            }
        ]
    },
    {
        // 7
        frames: [
            {
                character: CHIEN,
                img: "/img/dog/chien_face.png",
                text: "La salle 5 est un débarras, les employés y laissent traîner tout et n'importe quoi"
            }
        ]
    },
    {
        // 8
        frames: [
            {
                character: CHIEN,
                img: "/img/dog/chien_face.png",
                text: "Qu'est-ce qu'une clef peut bien ouvrir ?"
            }
        ]
    },
    {
        // 9
        frames: [
            {
                character: CHIEN,
                img: "/img/dog/chien_face.png",
                text: "Où peut bien être l'autre moitié ?"
            }
        ]
    },
    {
        // 10
        frames: [
            {
                character: CHIEN,
                img: "/img/dog/chien_face.png",
                text: "Cette étiquette est bien différente des autres"
            }
        ]
    },
    {
        // 11
        frames: [
            {
                character: CHIEN,
                img: "/img/dog/chien_face.png",
                text: "Tu vas pouvoir prévenir l'extérieur de ce qu'il se passe ici !"
            }
        ]
    }
]
export const elevage_2_dialog: Dialog = {
    frames: [
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Regarde ! J'ai trouvé un bout d'étiquette par terre. Cela peut peut-être nous aider"
        },
    ]
}
export const pistolet_abattage_dialogue: Dialog = {
    frames: [
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: ": Ah ça, c’est un vieux pistolet d’abattage. Il est ici car ça fait bien longtemps qu’ils n’en utilisent plus. Cela sert à étourdir les vaches avant de les abattre… Mais cela prend trop de temps selon eux, il faut tenir la cadence et abattre les vaches à la chaîne alors maintenant ils les laissent conscientes"
        },
    ]
}

export const portes_fermees :Array<Dialog> = [
    {
        frames: [
            {
                character: CHIEN,
                img: "/img/dog/chien_face.png",
                text: "Cette porte est fermée, essayons-en une autre"
            },
        ]
    },
    {
        frames: [
            {
                character: CHIEN,
                img: "/img/dog/chien_face.png",
                text: "Il doit nous manquer un code ou une clef pour ouvrir cette porte"
            },
        ]
    }
]

export const code_post_it_dialog: Dialog = {
    frames: [
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Cela ne ressemble pas à un mot de passe d'ordinateur, à quoi ce code peut-il bien servir ?",
            choice: [
                {
                    proposition: "Bonne question...",
                    after: new AfterMoveToRoom(COULOIR_1)
                }
            ]
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
    after: new AfterPlaySound(employé_sound)
}

export const couloir_1_cinematique_entree_dialogue: Dialog = {
    timer:4,
    frames: [
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Mince, la porte s'est refermée, on ne peut plus l'ouvrir de l'intérieur !"
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Nous sommes bloqués ! Nous allons devoir trouver un moyen de sortir d'ici !"
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Il va falloir avertir quelqu'un à l'exterieur de notre présence pour qu'on vienne nous sortir d'ici."
        },
        {
            character: JOUEUR,
            text: "Mais je n'ai pas de réseau !"
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Allons explorer les différentes salles, nous allons bien y trouver un moyen de sortir, et par la même occasion tu verras les horreurs qui se passent ici."
        },
    ],
    after: new AfterMoveToRoom(COULOIR_1)
}

export const usine_exterieur_1bis_dialog: Dialog = {
    timer: 1,
    after: new AfterMoveToRoom(COULOIR_1_CINEMATIQUE_ENTREE),
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

export const dialog_mail_fournisseurs:Dialog = {
    frames: [
        {
            character:NARRATEUR,
            text:"Bonjour, N'ayant pas de réponse de la part de la coopérative qui nous livre habituellement, nous allons être obligés de réduire la portion de foin jusqu'à l'obtention d'un contrat plus avantageux avec une autre société. Cordialement, Mme. Martine, Directrice de l'élevage de Crouez-lès-Caut"
        }
    ]
}

export const dialog_mail_controle:Dialog = {
    frames: [
        {
            character:NARRATEUR,
            text:"Bonjour à tous, je vous transmets ci-joint les informations concernant ma visite prochainement dans votre établissement. Suite à ma visite de l'année dernière, un premier blâme vous avez été adressé. Un second équivaudrait à une fermeture définitive de votre établissement. Je vous préviens, je serai intransigeant, notamment au regard de la récente nouvelle législation. Cordialement, Kévin Dupont, Inspecteur sanitaire"
        }
    ]    
}

export const dialog_mail_reunion:Dialog = {
    frames: [
        {
            character:NARRATEUR,
            text: "Ci-joint le CR"
        }
    ]    
}

export const dialog_mail_legislation:Dialog = {
    frames: [
        {
            character:NARRATEUR,
            text: "Bonjour, Je vous transmets les nouvelles normes qui entreront en vigueur le 1er janvier. Lisez-les attentivement, nous allons devoir les appliquer pour la prochaine visite sanitaire. En effet, l'inspecteur qui nous a été attribués serait apparemment le même que l'an passé. Si tel est bien le cas, nous ne pouvons pas compter sur les pots-de-vins habituels. Sincèrement vôtre, Pascal Clément, Sous-Directeur de l'élevage de Crouez-lès-Caut"
        }
    ]
}

export const dialog_mails_recus: Dialog = {
    frames: [
        {
            character: NARRATEUR,
            text: "L'employé a reçu quatre mails. Lequel aimeriez-vous lire ?",
            choice: [
                {
                    proposition: "Mme. Martine, \"Re: Informations fournisseurs\"",
                    after: new AfterPlayDialog(dialog_mail_fournisseurs)
                },
                {
                    proposition: "M. Dupont, \"URGENT visite contrôle sanitaire !!\"",
                    after: new AfterPlayDialog(dialog_mail_controle)
                },
                {
                    proposition: "Clinique vétérinaire, \"Réunion 20/12/2021 compte rendu\"",
                    after: new AfterPlayDialog(dialog_mail_reunion)
                },
                {
                    proposition: "M. Clément, \"IMPORTANT: Update législation\"",
                    after: new AfterPlayDialog(dialog_mail_legislation)
                }
            ]
        }
    ]
}

export const dialog_maison_A_C: Dialog = {
    timer:0.25,
    frames: [
        {
            character: NARRATEUR,
            text: "Ainsi se conclut notre journal télévisé du 4 janvier 2022."
        }
    ],
    after: new AfterMoveToRoom(CREDITS_ID)
}

export const dialog_maison_B: Dialog = {
    timer:0.25,
    frames: [
        {
            character: NARRATEUR,
            text: "Vos parents étaient morts d'inquiétude, quel soulagement !"
        },
        {
            character: NARRATEUR,
            text: "Vous êtes rentrés tous ensemble à la maison, pour reprendre votre quotidien."
        },
        {
            character: NARRATEUR,
            text: "Enfin, \"reprendre votre quotidien\"..."
        },
        {
            character: NARRATEUR,
            text: "Pas totalement, puisque ce soir personne ne regarde le journal télévisé."
        }
    ],
    after: new AfterMoveToRoom(CREDITS_ID)
}

export const dialog_exterieur_A: Dialog = {
    timer:0.25,
    frames: [
        {
            character: NARRATEUR,
            text: "Suite à la réception d'un mail anonyme envoyé depuis l'élevage intensif de Crouez-lès-Caut, L214 a annoncé avoir lancé une investigation."
        },
        {
            character: NARRATEUR,
            text: "Leur enquête a révélé des actes de maltraitance animale au sein de locaux insalubres et surpeuplés."
        },
        {
            character: NARRATEUR,
            text: "L'ONG a pu entrer en contact avec des anciens employés qui ont démissionné ou qui se sont faits renvoyer pour avoir tenté d'alerter leur direction."
        },
        {
            character: NARRATEUR,
            text: "De plus, l'enquête indiquerait que des pots-de-vins auraient été versés par la direction durant de précédents contrôles sanitaires."
        }
    ],
    after: new AfterMoveToRoom(MAISON_A_C)
}

export const dialog_exterieur_C: Dialog = {
    timer:0.25,
    frames: [
        {
            character: NARRATEUR,
            text: "La police a récemment ouvert une enquête à l'encontre de l'élevage intensif de Crouez-lès-Caut, après s'y être rendue pour retrouver une personne égarée."
        },
        {
            character: NARRATEUR,
            text: "Leur enquête a révélé des actes de maltraitance animale au sein de locaux insalubres et surpeuplés."
        },
        {
            character: NARRATEUR,
            text: "De plus, des documents récupérés sur place indiqueraient que des pots-de-vins auraient été versés par la direction durant de précédents contrôles sanitaires."
        }
    ],
    after: new AfterMoveToRoom(MAISON_A_C)
}

export const dialog_cinematique_fin_couloir_A: Dialog = {
    timer:0.25,
    frames: [
        {
            character: JOUEUR,
            text: "Tu devrais venir avec moi, ce n'est pas un endroit sûr pour toi ici."
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Je ne peux pas abandonner mes amies à leur sort. Grâce à toi, nous nous en sortirons bientôt."
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Je crois entendre des gens à l'extérieur."
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "C'est le moment de nous dire au revoir, merci pour tout."
        }
    ],
    after: new AfterMoveToRoom(EXTERIEUR_A)
}

export const dialog_cinematique_fin_couloir_B: Dialog = {
    timer:0.25,
    frames: [
        {
            character: JOUEUR,
            text: "Tu devrais venir avec moi, ce n'est pas un endroit sûr pour toi ici."
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Je ne peux pas abandonner mes amies à leur sort."
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Je crois entendre tes parents qui te cherchent dehors."
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "C'est le moment de nous dire au revoir."
        }
    ],
    after: new AfterMoveToRoom(MAISON_B)
}

export const dialog_cinematique_fin_couloir_C: Dialog = {
    timer:0.25,
    frames: [
        {
            character: JOUEUR,
            text: "Tu devrais venir avec moi, ce n'est pas un endroit sûr pour toi ici."
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Je ne peux pas abandonner mes amies à leur sort."
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Je crois entendre les sirènes de police."
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "C'est déjà le moment de nous dire au revoir."
        }
    ],
    after: new AfterMoveToRoom(EXTERIEUR_C)
}

export const dialog_fin_C: Dialog = {
    frames: [
        {
            character: NARRATEUR,
            text: "Vous écrivez votre mail..."
        },
        {
            character: NARRATEUR,
            text: "Et vous l'envoyez !"
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text:"Merci d'avoir au moins prévenu la police. Peut-être qu'en venant te chercher ils découvriront ce qu'il se passe ici.",
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Je te raccompagne jusqu'à l'entrée, ils ne devraient pas trop tarder."
        }
    ],
    after: new AfterMoveToRoom(COULOIR_1_FIN_C)
}

export const dialog_fin_B: Dialog = {
    frames: [
        {
            character: NARRATEUR,
            text: "Vous écrivez votre mail..."
        },
        {
            character: NARRATEUR,
            text: "Et vous l'envoyez !"
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text:"Je suis désolé de t'avoir entraîné là-dedans. J'espère que tu ne te feras pas trop punir.",
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "On devrait attendre tes parents à l'entrée, ils ne devraient pas trop tarder."
        }
    ],
    after: new AfterMoveToRoom(COULOIR_1_FIN_B)
}

export const dialog_fin_A: Dialog = {
    frames: [
        {
            character: NARRATEUR,
            text: "Vous écrivez votre mail..."
        },
        {
            character: NARRATEUR,
            text: "Et vous l'envoyez !"
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text:"Merci beaucoup, ton témoignage pourra sauver mes amies.",
        },
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text: "Tu devrais écrire à tes parents, nous retournerons ensuite à l'entrée."
        }
    ],
    after: new AfterMoveToRoom(COULOIR_1_FIN_A)
}

export const dialog_final_1_1: Dialog = { // -> rentrer -> parent
    frames: [
        {
            character: NARRATEUR,
            text:"Au secours ! Je rentrais du collège quand j'ai croisé un chien qui m'a emmené jusqu'à l'élevage de Crouez-lès-Caut et la porte s'est refermée derrière-moi j'ai pas de réseau s'il vous plaît venez me chercher j'ai peur",
        }
    ],
    after: new AfterPlayDialog(dialog_fin_B)
}

export const dialog_final_1_2: Dialog = { // -> rentrer -> police
    frames: [
        {
            character: NARRATEUR,
            text:"Bonsoir Madame la policière, Monsieur le policier, Je rentrais du collège quand j'ai croisé un chien. Je l'ai suivi jusqu'à l'élevage de Crouez-lès-Caut et là la porte s'est refermée derrière-moi. Je sais, j'aurais pas dû entrer mais je voulais juste rendre le chien à ses maîtres. Maintenant je ne peux plus sortir et j'ai peur. S'il vous plaît venez m'aider",
        }
    ],
    after: new AfterPlayDialog(dialog_fin_C)
}


export const dialog_final_1: Dialog = { // -> rentrer 
    frames: [
        {
            character: JOUEUR,
            text:"Je vais envoyer un message à...",
            choice: [
                {
                    proposition: "mes parents, pour qu'ils viennent me chercher",
                    after: new AfterPlayDialog(dialog_final_1_1)
                },
                {
                    proposition: "la police, pour sortir d'ici",
                    after: new AfterPlayDialog(dialog_final_1_2)
                }
            ]
        }
    ]
}

export const dialog_final_3_1: Dialog = { // -> alerter -> anciens employés
    frames: [
        {
            character: JOUEUR,
            text:"...et notamment...",
            choice: [
                {
                    proposition: "celui d'un employé qui serait prêt à témoigner",
                    after: new AfterPlayDialog(dialog_fin_A)
                },
                {
                    proposition: "un morceau de lettre d'un ancien employé",
                    after: new AfterPlayDialog(dialog_fin_A)
                }
            ]
        }
    ]
}

export const dialog_final_3_2: Dialog = { // -> alerter -> dirigeants
    frames: [
        {
            character: JOUEUR,
            text:"...et notamment...",
            choice: [
                {
                    proposition: "un mail concerant des pots-de-vins",
                    after: new AfterPlayDialog(dialog_fin_A)
                },
                {
                    proposition: "un mail sur la réduction de foin pour les vaches",
                    after: new AfterPlayDialog(dialog_fin_A)
                },
                {
                    proposition: "un message vocal de la directrice de l'établissement",
                    after: new AfterPlayDialog(dialog_fin_A)
                }
            ]
        }
    ]
}

export const dialog_final_3: Dialog = { // -> alerter 
    frames: [
        {
            character: JOUEUR,
            text:"De plus j'ai lu des documents...",
            choice: [
                {
                    proposition: "d'anciens employés dénonçant le traitement des animaux",
                    after: new AfterPlayDialog(dialog_final_3_1)
                },
                {
                    proposition: "des dirigeants n'ayant que faire des animaux",
                    after: new AfterPlayDialog(dialog_final_3_2)
                }
            ]
        }
    ]
}

export const dialog_final_2: Dialog = { // -> alerter 
    frames: [
        {
            character: JOUEUR,
            text:"Avant de prévenir mes parents, je vais envoyer un message à l'ONG L214 pour relayer mon témoignage",
        },
        {
            character: JOUEUR,
            text:"J'ai été témoin de...",
            choice: [
                {
                    proposition: "locaux insalubres et inadaptés",
                    after: new AfterPlayDialog(dialog_final_3)
                },
                {
                    proposition: "la surpopulation animal dans l'élevage",
                    after: new AfterPlayDialog(dialog_final_3)
                }
            ]
        }
    ]
}

export const dialog_final: Dialog = {
    timer:0.25,
    frames: [
        {
            character: CHIEN,
            img: "/img/dog/chien_face.png",
            text:"Que vas-tu faire ?",
            choice: [
                {
                    proposition: "Je veux rentrer chez moi",
                    after: new AfterPlayDialog(dialog_final_1)
                },
                {
                    proposition: "Je veux alerter sur ce qui se passe ici",
                    after: new AfterPlayDialog(dialog_final_2)
                }
            ]
        }
    ]
}