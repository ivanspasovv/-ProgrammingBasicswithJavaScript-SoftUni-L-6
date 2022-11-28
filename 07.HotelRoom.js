function calc(input) {
    let month = input[0];
    let days = Number(input[1]);

    let priceForApartment;
    let priceForStudio;

    switch (month) {
        case "May":
        case "October":
            priceForStudio = 50;
            priceForApartment = 65;
        break;
        case "June":
        case "September":
            priceForStudio = 75.20;
            priceForApartment = 68.70;
        break;
        case "July":
        case "August":
            priceForStudio = 76;
            priceForApartment = 77;
        break; 
    }

    if ((month === "May" || month === "October") && (days > 7 && days <= 14)) {
        priceForStudio = priceForStudio * 0.95;
    } else if ((month === "May" || month === "October") && days > 14) {
        priceForStudio = priceForStudio * 0.70;
    } else if ((month === "June" || month === "September") && days > 14) {
        priceForStudio = priceForStudio * 0.80;
    }

    if (days > 14) {
        priceForApartment = priceForApartment * 0.90;
    }

    console.log(`Apartment: ${(priceForApartment * days).toFixed(2)} lv.`);
    console.log(`Studio: ${(priceForStudio * days).toFixed(2)} lv.`);
}

calc(["September", "15"])


