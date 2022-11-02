function calcSupply(age, maxAge, food, foodperDay) {
    const foodperYear = foodperDay * 365;
    const ageDifference = maxAge - age;
    const foodTillDeath = foodperYear * ageDifference;

    console.log(`${foodTillDeath}kg of ${food} would be enough until you're ${maxAge} years old.`.toString());
}

calcSupply(18, 100, 'Blueberries', 0.2);