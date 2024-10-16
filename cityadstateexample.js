function CityandState(city, state) {
    let States = state.toUpperCase()
    address = city + ', ' + States
    return address
}

console.log(CityandState('Minneapolis', 'mn'))
//extra argument will be ignored too
//if you put 1 arg and suppose 2, error will occur
//no arg gives an error