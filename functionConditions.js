function checkNumber(num) {
    if (num > 10) {
        console.log("The number is greater than 10.");
    } else if (num === 10) {
        console.log("The number is exactly 10.");
    } else {
        console.log("The number is less than 10.");
    }
}

checkNumber(5);
checkNumber(10);
checkNumber(15);
