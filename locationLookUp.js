function locationLookUp(val) {
    let result;
    switch (val) {
        case "Kenya":
            result = "Africa"
            break
        case "Minnesota":
            result = "North America"
            break
        case "Japan":
            result = "Asia"
            break
        case "Sydney":
            result = "Australia"
            break
        case "Barcelona":
            result = "South America"
            break
        default:
            result = 'Error 404'
    }
    return val + " is located in: " + result
}
console.log(locationLookUp("Kenya"))