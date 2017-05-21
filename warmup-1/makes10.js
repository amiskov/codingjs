/*
 Given 2 ints, a and b, return true if one if them is 10 or if their sum is 10.

 Examples

 makes10(9, 10) → true
 makes10(9, 9) → false
 makes10(1, 9) → true
 */

function makes10(a, b) {
    var isThere10 = (a === 10) || (b === 10);
    return isThere10 || (a + b === 10);
}

/*
 makes10(9, 10) → true	true	✔
 makes10(9, 9) → false	false	✔
 makes10(1, 9) → true	true	✔
 makes10(10, 1) → true	true	✔
 makes10(10, 10) → true	true	✔
 makes10(8, 2) → true	true	✔
 makes10(8, 3) → false	false	✔
 makes10(10, 42) → true	true	✔
 makes10(12, -2) → true	true	✔
 */
