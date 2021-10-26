import Frame from "./frame.structure"

/*
        Dialog
    correspond à un dialogue
*/
export default interface Dialog {
    timer?: number    // nombre de secondes avant que le dialogue ne se lance    peut-être null (déclenchement immédiat)
    afterDo?: () => void   // action à réaliser lorsque le dialogue se termine        peut-être null
    frames: Array<Frame>
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