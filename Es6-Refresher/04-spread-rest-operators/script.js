// spread and rest operators (...)

// spread operator used to spread or extent the value of array/object is used in (array/object)
// on array
let car = ["Audi","BMW","Mercedes"]
let bestcar = [...car,"Tesla"]
console.log(bestcar)

bestcar = ["Tesla",...car]
console.log(bestcar)

// on object

let person = {
    Name: "Ehsan Ali Khan",
    age: 22
}
let newperson = {
    ...person,
    class: "Bs computer Science"
}
console.log(newperson)

// rest operator used in arguments of the function
// rest operator used to exhance the the number of arguments

function hello (...all){
    console.log(all)
}
hello(1,2,3,4,5,88)