//Find Unique Names from an Array
// const names = ['abul', 'babul', 'cabul', 'dabul', 'ebul', 'abul', 'kabul', 'babul', 'pabul', 'babul', 'cabul', 'ebul', 'babul', 'dabul', 'zabul'];

// function uniqueNames(names) {
//     const unique = [];
//     // for (let i = 0; i < names.length; i++) {
//     //     const element = names[i];
//     //     console.log(element);
//     // }
//     for (element of names) {
//         console.log(element);
//         if (unique.indexOf(element) == -1) {
//             unique.push(element);
//         }
//     }
//     return unique;
// }
// const sortedNames = uniqueNames(names);
// console.log(sortedNames);


const rollNumber = [21, 34, 53, 53, 46, 62, 52, 67, 78, 83, 98, 17, 43, 11, 34, 21, 24, 44, 22, 44, 11, 63, 55, 32, 75, 48, 48, 34, 53, 53, 43, 78, 34];

function uniqueRollNumber(rollNumbers) {
    const uniqueRoll = [];
    // for (let i = 0; i < rollNumber.length; i++) {
    //     const roll = rollNumber[i];
    // }
    for (roll of rollNumbers) {
        if (uniqueRoll.indexOf(roll) == -1) {
            uniqueRoll.push(roll);
        }
    }
    return uniqueRoll;
}
const uniqueRolls = uniqueRollNumber(rollNumber);
console.log(uniqueRolls);
