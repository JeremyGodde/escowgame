export default interface Sound {
    timer?: number
    src: string
    isLoop: boolean
    next?: Sound
}