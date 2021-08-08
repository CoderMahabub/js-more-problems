/*
//Find Chepest Phone from an Object

const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'walton m32', price: 15000, camera: 8, storage: 8 },
    { name: 'Xiomi', price: 15000, camera: 10, storage: 8 },
    { name: 'Oppo a2', price: 17000, camera: 8, storage: 9 },
    { name: 'Nokia N95', price: 80000, camera: 12, storage: 3 },
    { name: 'HTC h81', price: 25000, camera: 18, storage: 8 },
];
let chepest = phones[0];
for (const phone of phones) {
    if (phone.price < chepest.price) {
        chepest = phone;
    }
}
console.log(chepest);
*/

//Find CostlyPhone
const phones = [
    { name: 'samsung s5', price: 45000, camera: 10, storage: 32 },
    { name: 'walton m32', price: 15000, camera: 8, storage: 8 },
    { name: 'Xiomi', price: 15000, camera: 10, storage: 8 },
    { name: 'Oppo a2', price: 17000, camera: 8, storage: 9 },
    { name: 'Nokia N95', price: 80000, camera: 12, storage: 3 },
    { name: 'HTC h81', price: 25000, camera: 18, storage: 8 },
]
let constlyPhone = phones[0];
for (phone of phones) {
    if (phones.price > constlyPhone.price) {
        constlyPhone = phone;
    }
}
console.log(constlyPhone);
