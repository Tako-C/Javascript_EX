const numbers = [5, 10, 15, 20, 25];
function findMinMaxDifference(numbers) {
    const min = Math.min(...numbers)
    const max = Math.max(...numbers);
    return [min, max, max - min]; 

}
console.log(findMinMaxDifference(numbers))

// console.log(`ค่าสูงสุดในอาร์เรย์คือ: ${result.max}`);
// console.log(`ค่าต่ำสุดในอาร์เรย์คือ: ${result.min}`);
// console.log(`ผลต่างระหว่างค่าสูงสุดและต่ำสุดคือ: ${result.difference}`);
