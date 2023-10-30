// Write a function that takes in an array of integers from 0-9, and returns a new array:

// Numbers with no identical numbers preceding or following it returns a 1: 2, 4, 9  => 1, 1, 1
// Sequential groups of identical numbers return their count: 6, 6, 6, 6 => 4

// Example
// [0, 4, 6, 8, 8, 8, 5, 5, 7] => [1, 1, 1, 3, 2, 1]

// const numbers = [0, 4, 6, 8, 8, 8, 5, 5, 7]
const numbers = [0, 4, 6, 4, 8, 8, 5, 5, 7,0,0]
numbers.sort((num1,num2)=>num1 - num2)
let count_n = 1
let result = []
    for (let i = 0; i < numbers.length; i++) {
        if ( numbers[i] === numbers[i+1]) {
            count_n++   
        } else{
            result.push(count_n)  
            count_n = 1
        }   
    }
result.sort((result1,result2)=>result1 - result2)
let count_n2 = 1
let result2 = []
    for (let i = 0; i < numbers.length; i++) {
        if ( result[i] === result[i+1]) {
            count_n2++   
        } else{
            result2.push(count_n2)  
            count_n2 = 1
        }   
}


  console.log(result)  
  console.log(result2)  

