function calc(input) {
    let budget = Number(input[0]);
    let season = input[1];

    let destination ;
    let place ;
    let amountSpent ;

    if (budget <= 100) {
        destination = "Bulgaria";
        switch (season) {
            case "summer" :
                amountSpent = budget * 0.3;
            break;
            case "winter" :
                amountSpent = budget * 0.7;
            break;
        }
    } else if (budget <= 1000) {
        destination = "Balkans";
        switch (season) {
            case "summer" :
                amountSpent = budget * 0.4;
            break;
            case "winter" :
                amountSpent = budget * 0.8;
            break;
        }
    } else if (budget > 1000) {
        destination = "Europe";
        amountSpent = budget * 0.9;
    }

    if (destination === "Bulgaria" || destination === "Balkans") {
        switch (season) {
            case "winter" :
                place = "Hotel";
            break;
            case "summer" :
                place = "Camp";
            break;
        }
    } else if (destination === "Europe") {
        place = "Hotel";
    }
    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${(amountSpent).toFixed(2)}`);
}

calc(["1500", "summer"]);