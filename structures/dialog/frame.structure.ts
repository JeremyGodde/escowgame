
/*
        Frame
    correspond à une ligne de dialogue
*/
export default interface Frame {
    text: string    // texte du dialogue
    img?: string     // URL de l'image du personnage    peut-être null
}

export const frames_home_screen: Array<Frame> = [
    {
        img: "/img/chien/chien_face.png",
        text: "Bienvenue dans cet essai de dialogue. Cliquez quelque part pour continuer."
    },
    {
        img: "/img/chien/chien_face.png",
        text: "Cela fonctionne-t-il ?"
    },
    {
        img: "/img/chien/chien_face.png",
        text: "Bien ! Passons au générique voulez-vous"
    }
]