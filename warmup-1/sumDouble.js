/*
 Given two int values, return their sum.
 Unless the two values are the same, then return double their sum.

 Examples:

 sumDouble(1, 2) → 3
 sumDouble(3, 2) → 5
 sumDouble(2, 2) → 8
 */

function sumDouble(a, b) {
    return (a === b) ? (a + b) * 2 : a + b;
}

// console.log(sumDouble(1, 2));
// console.log(sumDouble(3, 2));
// console.log(sumDouble(2, 2));

/*
 Тесты:
 sumDouble(1, 2) → 3	3	✔
 sumDouble(3, 2) → 5	5	✔
 sumDouble(2, 2) → 8	8	✔
 sumDouble(-1, 0) → -1	-1	✔
 sumDouble(3, 3) → 12	12	✔
 sumDouble(0, 0) → 0	0	✔
 sumDouble(0, 1) → 1	1	✔
 sumDouble(3, 4) → 7	7	✔
 */
