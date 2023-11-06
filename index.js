const myTime = setTimeout(message, 2000)

function message() {
    console.log("Hiii")
}

function timeOut() {
    clearTimeout(myTime)
}

message()
timeOut()