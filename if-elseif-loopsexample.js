console.log('Based on the number of legs a creature has, I will try to guess what it is.')

let legs = 4 //pretend this is user input

if (legs<0) {
    console.log('I do not think anything has a negative number of legs')
}
else if (legs % 2 !== 0) {
    console.log('An odd number of legs, are you sure?')
}
else if (legs === 0) {
    console.log('Is it a snake?')
}
else if (legs === 2) {
    console.log('A biped animal, such as a human?')
}
else if (legs === 4) {
    console.log('A quadrupped, like a zebra?')
}
else if (legs === 6) {
    console.log('Probably an insect, like a bee?')
}
else if (legs === 8) {
    console.log('Possibly a spider?')
}
else {
    console.log('More than 8 legs - perhaps a millipede')
}


//LOOPS
//Two ways of loop over an array

//by counting the elements this is useful to know where you are in the array
for (let i = 0; i < letters.length; i++) {
    console.log('Element ' + i + 'is' + letters[i])
}


//Another way of looping over an array
//if dont know to positon of the elements, notice the fun def called
let animals = ['Buffalo', 'Elephant', 'Yak']
animals.forEach(function(element){
    console.log(element)
})

/*  forLoop: More flexible and allows control over the index,
 useful when you need to perform 
operations based on the position in the array.
forEach Method: Cleaner and easier for
 iterating over arrays when you just need
  to access elements without worrying about their indices. */

//While loop 
/* A wile loop to double the number and display it stop when a number
greater than 100 is reached*/
let maxVal = 100
let number = 1
while (number < maxVal) {
    number *= 2
    console.log('number = ' + number)
}