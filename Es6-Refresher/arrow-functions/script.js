// let and Constant
let name1 = "ehsan"
name1 = "ehsan ali"
console.log(name1)

const name2 = "khan";
// name2 = "abc" it will give error (const) cant be updated 
console.log(name2)

// normal function
function myname(examplename) {
    console.log(examplename)
}
myname("name through normal function")

// arrow function
let myname1 = (examplename1) => {
    console.log(examplename1)
}
myname1("name through arrow function")

// return in arrow function
let myname2 = (examplename2) => {
    return (examplename2)
}
console.log(myname2("name through return arrow function"))

// short form of return in arrow function (above and this one are same)
let myname3 = (examplename3) => (examplename3)
console.log(myname3("name through return arrow function"))