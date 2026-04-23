// 1. 'number' + 3 + 3
// When a string is added to a number, it becomes a string.
// 'number' + 3 → 'number3', then + 3 → 'number33'
console.log('number' + 3 + 3); // Result: 'number33'

// 2. null + 3
// null is treated like 0 in math operations.
// So 0 + 3 = 3
console.log(null + 3); // Result: 3

// 3. 5 && "qwerty"
// && returns the first falsy value or the last truthy one.
// Both values are true, so it returns "qwerty"
console.log(5 && "qwerty"); // Result: "qwerty"

// 4. +'40' + +'2' + "hillel"
// Unary + converts strings into numbers.
// 40 + 2 = 42, then becomes a string with "hillel"
console.log(+'40' + +'2' + "hillel"); // Result: "42hillel"

// 5. '10' - 5 === 6
// '10' becomes 10, then 10 - 5 = 5
// 5 !== 6
console.log('10' - 5 === 6); // Result: false

// 6. true + false
// true → 1, false → 0
// 1 + 0 = 1
console.log(true + false); // Result: 1

// 7. '4px' - 3
// '4px' cannot be converted into a number → NaN
console.log('4px' - 3); // Result: NaN

// 8. '4' - 3
// '4' becomes number 4
// 4 - 3 = 1
console.log('4' - 3); // Result: 1

// 9. '6' + 3 ** 0
// 3 ** 0 = 1
console.log('6' + 3 ** 0); // Result: '61'

// 10. 12 / '6'
// '6' becomes number 6
console.log(12 / '6'); // Result: 2

// 11. '10' + (5 === 6)
// (5 === 6) is false
// '10' + false → '10false'
console.log('10' + (5 === 6)); // Result: '10false'

// 12. null == ''
// null only equals undefined
console.log(null == ''); // Result: false

// 13. 3 ** (9 / 3)
// 9 / 3 = 3
// 3 ** 3 = 27
console.log(3 ** (9 / 3)); // Result: 27

// 14. !!'false' == !!'true'
// both are non-empty strings → true
console.log(!!'false' == !!'true'); // Result: true

// 15. 0 || '0' && 1
// && runs first: '0' && 1 → 1
// 0 || 1 → 1
console.log(0 || '0' && 1); // Result: 1

// 16. (+null == false) < 1
// +null → 0
// 0 == false → true → 1
// 1 < 1 → false
console.log((+null == false) < 1); // Result: false

// 17. false && true || true
// false && true → false
// false || true → true
console.log(false && true || true); // Result: true

// 18. false && (false || true)
// (false || true) → true
// false && true → false
console.log(false && (false || true)); // Result: false

// 19. (+null == false) < 1 ** 5
// 1 ** 5 = 1
// +null → 0
// 0 == false → true → 1
// 1 < 1 → false
console.log((+null == false) < 1 ** 5); // Result: false
