let world = "JavaScript"
world[0] = "Y"

console.log(world)

let numOne = 3
let numTwo = 3

console.log(numOne == numTwo)

let Js = "JavaScript"
let py = "Python"
console.log(Js == py)

let lightOn = true
let lightOff = false

console.log(lightOff == lightOn)

//arrays

let nums = [1, "JavaScript", true, null, undefined]

nums[0] //1
nums[1] //"JavaScript"
nums[2] //true
nums[3] //null
nums[4] //undefined

console.log(nums)

nums[1]

console.log(nums)

let nums1 = [1, 2, 3]
//let nums2 = [1, 2, 3]
let nums2 = nums1

console.log(nums1 == nums2)

let user1 = {
    name: "Name",
    surname: "Surname"
}

let user2 = {
    name: "Name",
    surname: "Surname"
}

console.log(user1 == user2)

//number
console.log(Math.PI)

console.log(Math.round(4.3))
console.log(Math.ceil(4.3))
console.log(Math.floor(4.3))
console.log(Math.min(4,3,2,1))
console.log(Math.max(4,3,2,1))
console.log(Math.random())

console.log((Math.random()) * 11)

let random1 = Math.random() * 11
console.log(Math.floor(random1))

console.log(Math)

//strings

let string = "Anything"
let string2 = "something"
let space = " "
console.log(string + space + string2)

const paragraph = "Lorem ipsum dolor sit amet\
 consectetur adipisicing elit. Quisquam, quod."

let parag = 'lorem ipsum dolor sit amet\nconsectetur adipi\nsicing elit. Quisquam, quod.'

console.log(parag)


let fullName = `${parag} ${paragraph}`

console.log(fullName)

//string methods

let = language = "JavaScript"
console.log(language.length)

let list = [1, 2, 3 ,4]
console.log(list[0])

let uppercase = "upper"

console.log(uppercase.toUpperCase())

let lowercase = "LOWER"

console.log(lowercase.toLowerCase())

let javajs = "javascript"
console.log(javajs.substring(3, 6))
console.log(javajs.substring(4))

let split = "split splits"

console.log(split.split(""))

let str = "hi how are you , how you"
console.log(str.replace('are', 'how'))

//match

let match = "I love Javascript if you dont love Javascript what else can you love"

console.log(match.match("love"))

console.log(match.match(/love/g))


console.log(+"25")
