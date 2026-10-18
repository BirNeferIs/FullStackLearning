let a = 4
let b = 10

console.log(a+=b)

let result = 5>4 ? "yes 5>4" : "no 5>4"
 
console.log(result)

console.log(5+3-2*3)

//window alert methods 
alert("hi how are u")
//prompt 
let number = prompt('enter a number')
console.log(number)
//confirm
let isDelete = confirm("are u sure")
isDelete ? alert("oke") : prompt("number") 

//dateObject
const date = new Date()
console.log(date.getFullYear())

let year = date.getFullYear , 
    month = date.getMonth, 
    day = date.getDay, 
    hour = date.getHours, 
    minute = date.getMinutes, 
    second = date.getSeconds 
    dayName = date.getDate() 

let months = [
    'jan', 'feb', 'mar', 'apr', 'may', 'jun', 'jul', 'aug', 'sep', 'oct', 'nov', 'dec' 
]

let days = [
    'sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat' 
]
let humanReadable= `${day} , ${month} , ${year} , ${hour} : ${minute} : ${second}`
console.log(humanReadable)
