/*
    un réglage du volume à un instant donné
*/
export default interface Volume {
    when: number // secondes
    set: number  // pourcentage
}