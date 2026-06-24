function checkProbability(count) {
    let even = 0;
    let odd = 0;

    for (let i = 0; i < count; i++) {
        let num = Math.floor(Math.random() * (1000 - 100 + 1)) + 100;

        if (num % 2 === 0) {
            even++;
        } else {
            odd++;
        }
    }

    let percentEven = (even / count) * 100;

    console.log("Total numbers:", count);
    console.log("Even numbers:", even);
    console.log("Odd numbers:", odd);
    console.log("Percentage of even numbers:", percentEven.toFixed(2) + "%");
}