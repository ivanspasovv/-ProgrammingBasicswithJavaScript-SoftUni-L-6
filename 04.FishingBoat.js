function calc(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fishermen = Number(input[2]);

    let priceForShip ;

    switch (season) {
        case "Spring" :
            priceForShip = 3000
        break;
        case "Winter" :
            priceForShip = 2600
        break;
        case "Autumn" :
        case "Summer" :
            priceForShip = 4200
        break;    
    }

    if (fishermen <= 6 ) {
        let = priceForShip = priceForShip * 0.9;
    } else if (fishermen <= 11) {
        let = priceForShip = priceForShip * 0.85;
    } else {
        let = priceForShip = priceForShip * 0.75;
    }

    if (fishermen % 2 === 0 && season !== "Autumn") {
        let = priceForShip = priceForShip * 0.95;
    }

    if (priceForShip > budget) {
        console.log(`Not enough money! You need ${(priceForShip - budget).toFixed(2)} leva.`);
    } else {
        console.log(`Yes! You have ${(budget - priceForShip).toFixed(2)} leva left.`);
    }
}

calc(["2000", "Winter", "13"]);