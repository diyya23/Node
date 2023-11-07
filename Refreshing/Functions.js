var name = "raja"
var age = 24
var gender = "male"

function details(username, userage, usergender) {
    return(
        "My name is: " +
        username +
        ", age: " +
        userage +
        " & gender: " +
        usergender
    )
}

console.log(details(name, age, gender))