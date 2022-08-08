// Reference and Primitive type 

// Primitive type (string,number)
// when we assign value the previous value copy to new variable but when we update the value it only update the current variable not both 
let num1 = 50
let num2 = num1
num2 = 90

console.log(num1)
console.log(num2)


// Reference type (Object,Array)
// when we assign value the previous value point to new array but when we update the value it update in both array
let person1 = {
    Name: "Ehsan Ali khan"    
}
let person2 = person1
person2.Name = "Ahsan Ali khan"

console.log(person1)
console.log(person2)

// the correct way to to assign in array/object
let person = {
    Name: "Ehsan Ali Khan",
    age: 22
}
let newperson = {
    ...person,
}
newperson.Name = "Ahsan Ali Khan"

console.log(person)
console.log(newperson)