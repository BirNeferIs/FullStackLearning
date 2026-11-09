function sayhello() {
    console.log("hello")
}
sayhello()

//let msg = 'msg2'

function msg() {
    let msg = 'msg'
    console.log(msg)
}

msg()


function multiply(num1 , num2){
return num1 + num2     
}

let total = multiply(5,2)

console.log('total')



let num1 = 5,
    num2 = 2
let total1 = multiply(num1, num2)

function sumArrayValues(array) {
    let total1 = 0
    for (let i = 0; i < array.length; i++) {
        total1 += array[i]
    }
    return total1
}

let dizi = [2, 4, 6, 8, 10]
sumArrayValues(dizi)

console.log('Toplam', total1)