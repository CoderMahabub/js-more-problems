//MaxElement Using Function
// function largestElement(numbers) {
//     let max = numbers[0];
//     for (let i = 0; i < numbers.length; i++) {
//         const element = numbers[i];
//         if (element > max) {
//             max = element;
//         }
//     }
//     return max;
// }

// let maxElement = largestElement([21, 12, 33, 42, 12, 33, 18]);
// console.log(maxElement);


//Min ELement from Suing Function
function smallestNumber(number) {
    let min = number[0];
    for (let i = 0; i < number.length; i++) {
        const element = number[i];
        if (element < min) {
            min = element;
        }
    }
    return min;

}

const minElement = smallestNumber([21, 12, 33, 42, 12, 33, 18]);
console.log(minElement);