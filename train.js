// TASK-A
function harfniTop(harf, soz) {
    harf = harf.toLowerCase()
    soz = soz.toLowerCase()
    
    let count = 0
    for (let i = 0; i < soz.length; i++) {
        if (soz[i] === harf) {
            count++
        }
    }

    return count
}

console.log(harfniTop("e", "engineer"))





// console.log('Tips from Jack Ma')

// const list = [
//     "be a good student", // 0-20
//     "choose the right boss and make more mistakes", // 20-30
//     "start your own business", // 30-40
//     "do what you are strong at", // 40-50
//     "invest in youth", // 50-60
//     "relax, now it's useful", // 60
// ]

// function maslahatBering(a, callback) {
//     if(typeof a!== "number") callback("insert a number", null)
//     else if(a <= 20) callback(null, list[0])
//     else if(a > 20 && a <= 30) callback(null, list[1])
//     else if(a > 30 && a <= 40) callback(null, list[2])
//     else if(a > 40 && a <= 50) callback(null, list[3])
//     else if(a > 50 && a <= 60) callback(null, list[4])
//     else {
//         setInterval(() => {
//             callback(null, list[5])
//         }, 1000);
//     }
// }

// console.log('passed here 0')
// maslahatBering(70, (err, data) => {
//     if(err) console.log("ERROR:", err)
//     console.log("Answer:", data)
// })
// console.log('passed here 1')



// ASYNC function
// async function maslahatBering(a) {
//     if(typeof a !== "number") throw new Error("insert a number")
//     else if(a <= 20) return list[0]
//     else if(a > 20 && a <= 30) return list[1]
//     else if(a > 30 && a <= 40) return list[2]
//     else if(a > 40 && a <= 50) return list[3]
//     else if(a > 50 && a <= 60) return list[4]
//     else {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 resolve(list[5])
//             }, 5000);
//         })
//     }
// } 

// call via then / catch
// console.log("passed here 0")
// maslahatBering(25)
// .then((data) => {
//     console.log("Answer:", data)
// })
// .catch((err) => {
//     console.log("ERROR:", err)
// })
// console.log("passed here 1")

// call via async / await
// async function run() {
//     let result = await maslahatBering(65)
//     console.log(result)
//     result = await maslahatBering(61)
//     console.log(result)
//     result = await maslahatBering(41)
//     console.log(result)
// }

// run()