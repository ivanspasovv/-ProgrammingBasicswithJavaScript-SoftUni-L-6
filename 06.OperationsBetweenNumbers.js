function calc(input) {
 
    let n1 = Number(input[0]);
    let n2 = Number(input[1]);
    let sign = input[2];
    let evenOrOdd;
     
    if (sign === "+") {
        result = n1 + n2;
        if (result  % 2 === 0 ) {
            evenOrOdd = "even";
            console.log(`${n1} ${sign} ${n2} = ${result} - ${evenOrOdd}`);
        } else {
            evenOrOdd = "odd";
            console.log(`${n1} ${sign} ${n2} = ${result} - ${evenOrOdd}`);
        }
    } else if (sign === "-") {
        result = n1 - n2;
        if (result  % 2 === 0 ) {
            evenOrOdd = "even";
            console.log(`${n1} ${sign} ${n2} = ${result} - ${evenOrOdd}`);
        } else {
            evenOrOdd = "odd";
            console.log(`${n1} ${sign} ${n2} = ${result} - ${evenOrOdd}`);
        }
    } else if (sign === "*") {
        result = n1 * n2;
        if (result  % 2 === 0 ) {
            evenOrOdd = "even";
            console.log(`${n1} ${sign} ${n2} = ${result} - ${evenOrOdd}`);
        } else {
            evenOrOdd = "odd";
            console.log(`${n1} ${sign} ${n2} = ${result} - ${evenOrOdd}`);
        }
    } else if (sign === "/") {
        result = n1 / n2;
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            console.log(`${n1} ${sign} ${n2} = ${(result).toFixed(2)}`);
        }        
    } else if (sign === "%") {
        result = n1 % n2;
        if (n2 === 0) {
            console.log(`Cannot divide ${n1} by zero`);
        } else {
            console.log(`${n1} ${sign} ${n2} = ${result}`);
        }
    }
}

calc(["10", "0", "%"]);