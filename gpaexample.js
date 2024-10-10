function validGPA(gpa) {
    if (gpa >= 0 && gpa <= 4) {
        return true
    }
    return false
}

console.log(validGPA(-1))
console.log(validGPA(0))
console.log(validGPA(3.5))
console.log(validGPA(4))
console.log(validGPA(10))
//It will ignore any extra arguments - but you can access them if needed (100,4)
