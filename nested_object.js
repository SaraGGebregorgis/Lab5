var user = {
    username: 'Sara',
    email: 'saragebregorgis@gmail.com',
    password: 'sara12345',
    contact: {
        office: 'H.11',
        telephone: '651-234-5697',
        location: 'Minneapolis'

    },
    roles: ['user', 'admin']

}

user.salary = 5000
user.roles.push('serve admin')

//another example of looping and objects
let furnitureColors = { couch: 'green', table:'blue', chair:'red'}
for (let furniture in furnitureColors) {
    let color = furnitureColors[furniture]
    console.log(`The ${furniture} is the color ${color}`)
}