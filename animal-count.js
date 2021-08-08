//1-10 = 10
//11-20 = 50
//21-infinite = 100;
function animalCount(miles) {
    const animalDensityFirst10Miles = 10;
    const animalDensitySecond10Miles = 50;
    const animalDensityRestMiles = 100;
    if (miles <= 10) {
        const count = miles * animalDensityFirst10Miles;
        return count;
    }
    else if (miles <= 20) {
        const firstDenseAnimal = 10 * animalDensityFirst10Miles;
        const restMiles = miles - 10;
        const secondDenseAnimal = restMiles * animalDensitySecond10Miles;
        const totalAnimals = firstDenseAnimal + secondDenseAnimal;
        return totalAnimals;
    }
    else if (miles > 20) {
        const firstDenseAnimal = 10 * animalDensityFirst10Miles;
        const secondDenseAnimal = 10 * animalDensitySecond10Miles;
        const thirdDesnseMiles = miles - 20;
        const thirdDesnseAnimal = thirdDesnseMiles * animalDensityRestMiles;
        const totalAnimals = firstDenseAnimal + secondDenseAnimal + thirdDesnseAnimal;
        return totalAnimals;
    }
}
const animals = animalCount(21);
console.log(animals);