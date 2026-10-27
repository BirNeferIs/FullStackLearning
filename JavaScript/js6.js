/*for (let i = 0; i < 100; i++) {
    console.log(i)
}*/
    

for (let i = 0; i < 5; i++) {
    console.log(`${i} * ${i} = ${i * i}`)
}


const contrys = ["Finlan","Sweden","Norway"," Denmark","Iceland"]

for (let i = 0; i < 4; i++) {
    console.log(contrys[i])
}

let numvers = [5 , 10 , 15]
let sum = 0

for (let i = 0; i < numvers.length; i++) {
    sum += numvers[i]
}
console.log(sum)


let citys = ["paris" , "istanbul"  , "venice" ]
for (let i = 0; i < citys.length; i++) {
    console.log(citys[i])
}


let i = 0
while (i < 10) {
    console.log(i)
    i++
}

do {
    console.log(i)
    i++
}while(i < 10)




for (let i = 0 ; i < 5 ; i ++ ) {
    if (i == 2 ) break;
    console.log(i)
}

for (let i = 0 ; i < 5 ; i ++ ) {
    if (i == 2 ) continue;
    console.log(i)
}




