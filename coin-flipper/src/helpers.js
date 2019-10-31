
function randomChoice(array){
    let randomIndex = Math.floor(Math.random() * array.length)
    return array[randomIndex]
}

export { randomChoice }