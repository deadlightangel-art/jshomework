var services = {
  "Haircut": "60 UAH",
  "Shaving": "80 UAH",
  "Hair washing": "100 UAH"
};

services["Break glass"] = "200 UAH";

// total price
function getTotal(obj) {
    let sum = 0;

    for (let key in obj) {
        let value = parseInt(obj[key]);
        sum += value;
    }

    return sum;
}

// minimum price
function getMin(obj) {
    let min = Infinity;

    for (let key in obj) {
        let value = parseInt(obj[key]);

        if (value < min) {
            min = value;
        }
    }

    return min;
}

// maximum price
function getMax(obj) {
    let max = 0;

    for (let key in obj) {
        let value = parseInt(obj[key]);

        if (value > max) {
            max = value;
        }
    }

    return max;
}

// test
console.log(getTotal(services));
console.log(getMin(services));
console.log(getMax(services));