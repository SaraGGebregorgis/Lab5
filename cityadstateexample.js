function CityandState(city, state) {
    let State = state.toUpperCase()
    address = city + ', ' + State
    return address
}

console.log(CityandState('Minneapolis', 'mn'))
//extra argument will be ignored too
//if you put 1 arg and suppose 2, error will occur
//no arg gives an error