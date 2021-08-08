//Find Total Wood by using function
/*
chairWood = 3cft/chair
tableWood = 10cft/wood
bedWood - 50cft/bed
*/
function woodCalculator(chairQuantity, tableQuantity, bedQuantity) {
    const perChairWood = 3;
    const perTableWood = 10;
    const perBedWood = 50;
    //Catergory wise total wood calculate
    const chairWoodQuantity = perChairWood * chairQuantity;
    const tableWoodQuantity = perTableWood * tableQuantity;
    const bedWoodQuantity = perBedWood * bedQuantity;
    //Total Wood Calculate
    const totalWoodQuantity = chairWoodQuantity + tableWoodQuantity + bedWoodQuantity;
    return totalWoodQuantity;
}
const firstOption = woodCalculator(1, 1, 1);
console.log('Total Wood Quantity: ', firstOption, 'cft');