function calc(input) {
    let hourExam = Number(input[0]);
    let minuteExam = Number(input[1]);
    let hourArrival = Number(input[2]);
    let minuteArrival = Number(input[3]);

    let arrival ;

    let minuteForExam = (hourExam * 60) + minuteExam;
    let minuteForArrival = (hourArrival * 60) + minuteArrival;

    let totalMinutes = minuteForExam - minuteForArrival;

    if (totalMinutes > 30) {
        arrival = "Early"; 
    } else if (totalMinutes <= 30 && totalMinutes >= 0)  {
        arrival = "On time";
    } else if (minuteForArrival > minuteForExam) {
        arrival = "Late";
    }

    console.log(arrival);

    switch (arrival) {
        case "Early":
            if (totalMinutes < 60) {
                console.log(`${totalMinutes} minutes before the start`);
            } else {
                let hour = Math.trunc(totalMinutes / 60);
                let min = totalMinutes % 60;

                if (min < 10) {
                    min = `0${min}`
                }
                console.log(`${hour}:${min} hours before the start`);
            }
        break;
        case "On time":
            if (totalMinutes === 0) {
            }
             else if(totalMinutes < 60) {
                console.log(`${totalMinutes} minutes before the start`);
            } else {
                let hour = Math.trunc(totalMinutes / 60);
                let min = totalMinutes % 60;

                if (min < 10) {
                    min = `0${min}`
                }
                console.log(`${hour}:${min} hours before the start`);
            }
        break;
        case "Late":
            totalMinutes = minuteForArrival - minuteForExam;
            if (totalMinutes < 60) {
                console.log(`${totalMinutes} minutes after the start`);
            } else {
                let hour = Math.trunc(totalMinutes / 60);
                let min = totalMinutes % 60;

                if (min < 10) {
                    min = `0${min}`
                }
                console.log(`${hour}:${min} hours after the start`);
            }
        break;
    }
}
    
calc(["11", "30", "12", "29"])