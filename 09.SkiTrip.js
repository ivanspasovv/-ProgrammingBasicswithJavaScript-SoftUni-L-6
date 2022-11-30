function calc(input) {
    let days = Number(input[0]);
    let room = input[1];
    let evaluation = input[2];

    let totalPrice ;

    switch (room) {
        case "room for one person":
            totalPrice = 18;
        break;
        case "apartment":
            totalPrice = 25;
            if (days < 10) {
                totalPrice = totalPrice * 0.7;
            } else if (days >= 10 && days <= 15) {
                totalPrice = totalPrice * 0.65;
            } else if (days > 15) {
                totalPrice = totalPrice * 0.5;
            }
        break;
        case "president apartment":
            totalPrice = 35;
            if (days < 10) {
                totalPrice = totalPrice * 0.9;
            } else if (days >= 10 && days <= 15) {
                totalPrice = totalPrice * 0.85;
            } else if (days > 15) {
                totalPrice = totalPrice * 0.8;
            }
        break;

    } 

    if (evaluation === "positive") {
        totalPrice = totalPrice * 1.25;
    } else if (evaluation === "negative") {
        totalPrice = totalPrice * 0.90;
    }

    console.log((totalPrice = (days - 1) * totalPrice).toFixed(2));
}

calc(["2", "apartment", "positive"]);