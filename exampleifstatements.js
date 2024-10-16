let grade = 100

if (grade === 100) {
    console.log('You aced the quiz!')
}

if (grade == '100') {
    console.log('The number 100 is the same as the string "100" with double equal ==')
}

if (grade === '100') {
    console.log('This will not be printed')
} else {
    console.log('The number 100 is NOT same as the string "100" with triple equal ===')
}

//== will attempt to convert types before comparison, so '10' == 10 is true

let number_5 = 5
let string_5 ='5'

// == double equals operator
console.log(number_5 == string_5) //True
//the string 5 is considered to be equal to num 5

//=== triple equals operator
console.log(number_5 === string_5) //False
//false. Types are not coerced, the two operates must be the same type
//as well as same value
//the string 5 is not considered to be equal to num 5 bs ===

//!= not equals operator 
console.log(number_5 != string_5) //False
//types are coerced and the string 5 is considered to be equal 

//!== not equals operator
console.log(number_5 !== string_5) //True
/* its true that they are not equal the string 5 is not === to num 5 */
