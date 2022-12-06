function choice(arr){
    let randomIndex = Math.floor(Math.random() * arr.lenght )
    return arr[randomIndex]
}
export { choice }