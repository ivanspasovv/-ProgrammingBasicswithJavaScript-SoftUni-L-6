function calc(input) {
    let flowerType = input[0];
    let flowerNumber =  Number(input[1]);
    let budget =  Number(input[2]);
    let price ;

    switch (flowerType) {
        case "Roses" : 
            price = 5
        break;
        case "Dahlias" : 
            price = 3.8
        break;
        case "Tulips" : 
            price = 2.8
        break;
        case "Narcissus" : 
            price = 3
        break;
        case "Gladiolus" : 
            price = 2.5
        break;
    }

    let totalPrice = price * flowerNumber;

    if (flowerType === "Roses" && flowerNumber > 80) {
        totalPrice = totalPrice * 0.9;
    } else if (flowerType === "Dahlias" && flowerNumber > 90) {
        totalPrice = totalPrice * 0.85;
    } else if (flowerType === "Tulips" && flowerNumber > 80) {
        totalPrice = totalPrice * 0.85;
    } else if (flowerType === "Narcissus" && flowerNumber < 120) {
        totalPrice = totalPrice * 1.15;
    } else if (flowerType === "Gladiolus" && flowerNumber < 80) {
        totalPrice = totalPrice * 1.2;
    }   

    if (totalPrice > budget) {
        console.log(`Not enough money, you need ${(totalPrice - budget).toFixed(2)} leva more.`);
    } else {
        console.log(`Hey, you have a great garden with ${flowerNumber} ${flowerType} and ${(budget - totalPrice).toFixed(2)} leva left.`);
    }

}

calc(["Narcissus", "119", "360"]);