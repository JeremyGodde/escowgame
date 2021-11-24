import AfterPlaySound from "../structures/action/after-play-sound.structure"
import Sound from "../structures/immersion/sound.structure"

export const bureau_13_sound: Sound = {
    src: "/sound/Bureau_13.wav", 
    is_loop: true
}

export const bureau_12_sound: Sound = {
    src: "/sound/Bureau_12.wav",
    is_loop: true
}

export const bureau_8_sound: Sound = {
    src: "/sound/Bureau_8.wav",
    is_loop: true
}

export const usine_exterieur_1_sound: Sound = {
    src: "/sound/Usine_exterieur_1.wav",
    is_loop: true
}

export const exterieur_3bis_2_sound: Sound = {
    src: "/sound/Exterieur_3bis_2.wav",
    is_loop: true,
}

export const exterieur_3bis_1_sound: Sound = {
    src: "/sound/Exterieur_3bis_1.wav",
    is_loop: false,                              /* Il y a un bruit de frein au début donc pas boucle*/
    after: new AfterPlaySound(exterieur_3bis_2_sound) 
}

export const exterieur_3_sound: Sound = {
    src: "/sound/Exterieur_3.wav",
    is_loop: true
}

export const exterieur_2_sound: Sound = {
    src: "/sound/Exterieur_2.wav",
    is_loop: true
}

export const exterieur_1_sound: Sound = {
    src: "/sound/Exterieur_1.wav",
    is_loop: true
}
