// TASK-E
function getReverse(str) {
    let reversed = ''
    for(let i = str.length - 1; i >= 0; i--) {
        reversed += str[i]
    }
    return reversed
}

console.log(getReverse('salom'))

/* TASK-D
function checkContent(str1, str2) {
    let arr1 = str1.split('').sort().join('')
    let arr2 = str2.split('').sort().join('')

    if(arr1 === arr2) {
        return true
    }
    return false
}

console.log(checkContent('mitgroup', 'gmtiprou'))
*/

/* TASK-C
const moment = require('moment')
class Shop {
    constructor(non, lagmon, cola) {
        this.non = non
        this.lagmon = lagmon
        this.cola = cola
    }
    
    residual() {
        return `Hozir ${moment().format('HH:mm')} da  ${this.non}ta non, ${this.lagmon}ta lagmon, ${this.cola}ta cola mavjud! `
    }
    
    sell(productName, number) {
        if(productName === 'non') {
            if(this.non === 0) {
                return `Bizda non qolmadi!`
            }else if(number <= this.non) {
                this.non -= number
                return `Siz ${number}ta non sotib oldiz.`
            } else {
                return `Bizda ${this.non}ta non mavjud!`
            }
        } else if(productName === 'lagmon') {
            if(this.lagmon === 0) {
                return `Bizda lagmon qolmadi!`
            }else if(number <= this.lagmon) {
                this.lagmon -= number
                return `Siz ${number}ta lagmon sotib oldiz.`
            } else {
                return `Bizda ${this.lagmon}ta lagmon mavjud!`
            }
        } else if(productName === 'cola') {
            if(this.cola === 0) {
                return `Bizda cola qolmadi!`
            }else if(number <= this.cola) {
                this.cola -= number
                return `Siz ${number}ta cola sotib oldiz.`
            } else {
                return `Bizda ${this.cola}ta cola mavjud!`
            }
        } else {
            return `Bizda bunday mahsulot yoq! Bizda non, lagmon, cola bor.`
        }
    }
    
    acceptance(productName, number) {
        if(productName === 'non') {
            this.non += number
            return `Siz ${number}ta non qo'shdiz!`
        } else if(productName === 'lagmon') {
            this.lagmon += number
            return `Siz ${number}ta lagmon qo'shdiz!`
        } else if(productName === 'cola') {
            this.cola += number
            return `Siz ${number}ta cola qo'shdiz!`
        } else {
            return `Biz bunday mahsulot olmaymiz!`
        }
    }
}

let shop = new Shop(10, 5, 8)
console.log(shop.residual())
*/

/* TASK-B
function countDigits(str) {
if(typeof str !== 'string') {
return 'Error: Please enter a string'
}

let count = 0
for(let i = 0; i < str.length; i++) {
let asciiValue = str.charCodeAt(i)
if(asciiValue > 47 && asciiValue < 59) {
count++ 
}
}
return count
}

console.log(countDigits('ad2a54y79wet0sfgb9')) 
*/

/* TASK-A
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
*/





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