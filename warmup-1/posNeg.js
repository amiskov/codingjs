/*
 Given 2 int values, return true if one is negative and one is positive.
 Except if the parameter "negative" is true, then return true only if both are negative.

 Examples

 posNeg(1, -1, false) → true
 posNeg(-1, 1, false) → true
 posNeg(-4, -5, true) → true
 */

function posNeg(a, b, negative) {
    if (negative) {
        return a < 0 && b < 0;
    }

    return (a < 0 && b > 0) || (a > 0 && b < 0);
}


// console.log(posNeg(1, -1, false));
// console.log(posNeg(-1, 1, false));
// console.log(posNeg(-4, -5, true));
// console.log(posNeg(-4, 5, true));

/*
 posNeg(1, -1, false) → true	true	✔
 posNeg(-1, 1, false) → true	true	✔
 posNeg(-4, -5, true) → true	true	✔
 posNeg(-4, -5, false) → false	false	✔
 posNeg(-4, 5, false) → true	true	✔
 posNeg(-4, 5, true) → false	false	✔
 posNeg(1, 1, false) → false	false	✔
 posNeg(-1, -1, false) → false	false	✔
 posNeg(1, -1, true) → false	false	✔
 posNeg(-1, 1, true) → false	false	✔
 posNeg(1, 1, true) → false	false	✔
 posNeg(-1, -1, true) → true	true	✔
 posNeg(5, -5, false) → true	true	✔
 posNeg(-6, 6, false) → true	true	✔
 posNeg(-5, -6, false) → false	false	✔
 posNeg(-2, -1, false) → false	false	✔
 posNeg(1, 2, false) → false	false	✔
 posNeg(-5, 6, true) → false	false	✔
 posNeg(-5, -5, true) → true	true	✔
 */
