console.log('Tips from Jack Ma')

const list = [
    "be a good student", // 0-20
    "choose the right boss and make more mistakes", // 20-30
    "start your own business", // 30-40
    "do what you are strong at", // 40-50
    "invest in youth", // 50-60
    "relax, now it's useful", // 60
]

function maslahatBering(a, callback) {
    if(typeof a !== "number") callback("insert a number", null)
    else if(a <= 20) callback(null, list[0])
    else if(a > 20 && a <= 30) callback(null, list[1])
    else if(a > 30 && a <= 40) callback(null, list[2])
    else if(a > 40 && a <= 50) callback(null, list[3])
    else if(a > 50 && a <= 60) callback(null, list[4])
    else {
        setTimeout(() => {
        callback(null, list[5])
        }, 5000);
    }
} 

console.log("passed here 0")
maslahatBering(61, (err, data) => {
    if(err) console.log("ERROR:", err)
        else console.log("Answer:" ,data)
})
console.log("passed here 1")