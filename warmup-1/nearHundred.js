/*
 Given an int n, return true if it is within 10 of 100 or 200.
 Note: Math.abs(num) computes the absolute value of a number.

 Examples

 nearHundred(93) → true
 nearHundred(90) → true
 nearHundred(89) → false
 */

function nearHundred(n) {
    return (Math.abs(n - 100) <= 10) || (Math.abs(n - 200) <= 10);
}

console.log(nearHundred(93));
console.log(nearHundred(90));
console.log(nearHundred(89));

/*
 nearHundred(93) → true	true	✔
 nearHundred(90) → true	true	✔
 nearHundred(89) → false	false	✔
 nearHundred(110) → true	true	✔
 nearHundred(111) → false	false	✔
 nearHundred(121) → false	false	✔
 nearHundred(0) → false	false	✔
 nearHundred(5) → false	false	✔
 nearHundred(191) → true	true	✔
 nearHundred(189) → false	false	✔
 */
