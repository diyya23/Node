// Arrow Functions

const name = "raja"
const age = 24
const gender = "male"

const store = (username, userage, usergender) => {
    return (
        "I'm: " +
        name +
        " age: " +
        age + 
        " & gender:" +
        gender
    )
}

console.log(store(name, age, gender))



var addNew = () => 1 + 6
console.log(addNew)