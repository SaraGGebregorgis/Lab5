let itemprice = 100
if (itemprice === 100 && orderQuantity > 1) {
    console.log('You have ordered at 1 or more $100 items')
}
//&& represent and
//checks if both condition is correct


// || represent or 
//checks if one of the condition is right to return true
letnewCustomer = true
let haveEmail = false

if (newCustomer === true || haveEmail === false) {
    console.log('Need to request customer\'s email')
}


//! resverse of the true value
if (newCustomer || !haveEmail ) {
    console.log('Need to request customer\'s email')
}