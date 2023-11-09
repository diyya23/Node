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

// const display = callback => {
//     setTimeout(() => {
//         console.log('RJ')
//         setTimeout(() => {
//             console.log('Thank You :)')
//         }, 2000)
//         setTimeout(() => {
//             console.log('Wait for 2 Seconds....')
//         }, 1000);
//     }, 1500)
// }

// setTimeout(() => {
//     console.log("My, Name is: ")
//     display(text => {
//         console.log(text)
//     })
// }, 2000);


// ######################### Promises ###############################
let mypromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Done')
    }, 1500)
})

setTimeout(() => {    
    console.log('My Name is: ')
    mypromise.then(text => {
        console.log(text) 
        return text
    }).then(text => {
        console.log(text)
    })
}, 2000);
