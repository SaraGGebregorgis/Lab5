console.log('hello world')

let name = 'Sara'
let todayTemp = 71 

console.log(name)
console.log(todayTemp)

function add(a, b) { //add the assign a name for the variable
    let sum = a + b
    return sum
}

let total = add(3, 5)
console.log(total)

//text is the function parameter, used to send data to the function
function shout(text) {
    return text.toUpperCase() + '!!!!'
}
console.log(shout('hello'))

function isMinnesotaZip(code) {
    if (code >= 55001 && code <= 56763) {
        return true
    }
    return false
}
console.log(isMinnesotaZip(55403))
console.log(isMinnesotaZip(94320))
console.log(isMinnesotaZip('55403')) 
//when a fun is called js may coerce that string to a number