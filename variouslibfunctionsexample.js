let text = 'hello world'

let stringLength = text.length //lengh is a property

let shouts = text.toUpperCase() //These are methods - convert to uppercase

let whisper = text.toLowerCase() //and to lowercase

let whereisW = text.indexOf('w') //Index of first matching character of -1 if not found

let whereIsZ = text.indexOf('z') //index of first matching character or -1 if not found

let whisperAndShout = whisper.concat(shouts) //join strings together

let replace0 = text.replace('o', '0') //Replace the first instance of first thing with
                                      //second thing see reference for more info on this
                                      //can also do global and more complex replacements
                                      //with regular expressions
                                
let replaceAll0 = text.replace(/o/g, '0') //Replace the all instance of first thing with second thing

let removeWhitespace = text.trim() //Remove space, tabs, newlines etc. from both ends of the string

console.log(stringLength, shouts, whisper, whereisW, whereIsZ, whisperAndShout,
    replace0, replaceAll0, removeWhitespace)