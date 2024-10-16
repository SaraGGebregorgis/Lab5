 //create an object -contain properties
 // properties are name: value pairs
 let user = { username: 'Sara', password: 'Kittens'}
  console.log(user.username)
  console.log(user['username'])

//change data 
user.password = 'zebras'
console.log(`New password is ${user.password}`)

user['password'] = 'lion'
console.log(`User password is now ${user.password}`)