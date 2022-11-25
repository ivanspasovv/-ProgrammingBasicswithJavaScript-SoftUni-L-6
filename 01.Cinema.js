function calc(input) {
    let price = input[0];
    let row = Number(input[1]);
    let col = Number(input[2]);

    switch (price) {
        case "Premiere" :
            console.log(`${(col * row * 12).toFixed(2)} leva`);
        break;
        case "Normal" :
            console.log(`${(col * row * 7.5).toFixed(2)} leva`);
        break;
        case "Discount" :
            console.log(`${(col * row * 5).toFixed(2)} leva`);
        break;
    }

}

calc(["Discount", "12", "30"]);