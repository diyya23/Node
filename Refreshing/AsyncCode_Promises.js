// AsyncCode & Promises


// const data = callback => {
//     setTimeout(() => {
//         callback('DONE')
//     }, 1500);
// }

// setTimeout(() => {
//     console.log("Timer is Done!")
//     data(text => {
//         console.log(text)
//     })
// }, 2000)


// Lets Create a Awesome SetTimeout Feature!!!

const display = callback => {
    setTimeout(() => {
        console.log('RJ')
        setTimeout(() => {
            console.log('Wait.. for 2 Seconds.......')
        }, 2000)
        setTimeout(() => {
            console.log('Thank You :)')
        }, 1000);
    }, 1500)
}

setTimeout(() => {
    console.log("My, Name is: ")
    display(text => {
        console.log(text)
    })
}, 2000);
