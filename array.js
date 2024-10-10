let animals = ['duck', 'bear', 'squirrel']

console.log(animals)  //[duck, bear, squirrel]

//Access elements by index
console.log(animals[0]) 
let first_animal = animals[0]

//modify elements by index
animals[2] = 'mouse'
console.log(animals) // last one to mouse

birds = ['Parrot', 'Chicken', 'Dodo', 'Owl']
birds[1] = 'Eagle' //replace element 1 with egale
birds[5] = 'Sparrow' //since no element on 5 this will be added
console.log(birds)

birds[4] = 'Jay'
console.log(birds)

let firstBird = birds[0]  //read data a copy of data from the array
let thirdBird = birds[2]
console.log(firstBird, thirdBird)

let lastBird = birds.pop()    //removes last item and returns it
console.log(lastBird, birds)
birds.push('Seagull')     // Push adds new element to end of array
console.log(birds)

firstBird = birds.shift()  //remove and return first element
console.log(firstBird, birds)
birds.unshift('Wren') 
console.log(birds)

//how many elements in array?
let numberOfBirds = birds.length
console.log(numberOfBirds)

//where is an element in the array? return index if found, -1 if not
console.log(birds.indexof('Owl')) //3
console.log(birds.indexof('Penguin')) //-1

//loop over array
for (let j = 0; j < birds.length; j++) {
    console.log('Bird' + j + 'is' + birdsirstBird[j]) //remove and return first element
}

birds.reverse() //Reverse order of elements
console.log(birds)

birds.sort() //in ascending order
console.log(birds)

let  allBirds = birds.join() //join all elements into a string
                                // separated by commas
let allBirdWithSeparator = birds.join(' & ')

console.log(allBirds)
console.log(allBirdWithSeparator)