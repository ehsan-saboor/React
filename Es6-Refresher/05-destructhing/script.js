// Destructuring


// Arrayy Destructuring
// when we want to assign the variable for array value we use Arrayy Destructuring

let cars = ["Audoi","BMW","Mercedees"]
let [car1,car2,car3] = cars
console.log(car1)
console.log(car2)
console.log(car3)

// when we not want to assign value variable we leave empty
// let [car1,,car3] = cars



// Object Destructuring
// when we want to assign the variable for object propertie we use Object Destructuring

let person = {
    Name: 'Ehsan Ai Khan',
    age: 22
}
let {Name,age} = person
console.log(Name)
console.log(age)