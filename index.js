// Code your solution here
function findMatching (array, name) {
    let drivers = array.filter(X=> X.toLowerCase() === name.toLowerCase())
    return drivers
}

function fuzzyMatch(array, letters) {
    let driver = array.filter( X => X.slice(0,2) === letters)
    return driver
}

function matchName (array, name) {
    let drivers = array.filter(X=> X.name === name)
    return drivers
}