// map function

// map function create new array of the already defined array and can give permission to change the value of new array

// we double the value of array1 and stored in array2

let array1 = [1,2,3,4,5]
let array2 = array1.map( x => x*2 )

// both are same 

// let array2 = array1.map(function(x){
//     return x*2;
// })

console.log(array2)




// filter function

// filter function create new array of the already defined array and can give permission to filter the value which we want 

// we filter the value which is divisible by 2

let array3 = [2,5,7,9,10,33,22,12]
let array4 = array3.filter( x => x%2 == 0)

// both are same

// let array4 = array3.filter(function(x){
//     if(x%2==0){
//         return x;
//     }
// })

console.log(array4)