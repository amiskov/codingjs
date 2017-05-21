/*
 Given a string, return a new string where "not " has been added to the front.
 However, if the string already begins with "not", return the string unchanged.
 Note: use .equals() to compare 2 strings.

 Examples

 notString('candy') → not candy
 notString('x') → not x
 notString('not bad') → not bad
 */

function notString(str) {
    if (str.indexOf('not ') === 0 || str.indexOf('not') === 0 && str.length === 3) {
        return str;
    }

    return 'not ' + str;
}

console.log(notString('candy'));
console.log(notString('x'));
console.log(notString('jopa not '));
console.log(notString('not bad'));
console.log(notString('not not'));
console.log(notString('not'));

/*
 notString('candy') → not candy	not candy	✔
 notString('x') → not x	not x	✔
 notString('not bad') → not bad	not bad	✔
 notString('bad') → not bad	not bad	✔
 notString('not') → not	not	✔
 notString('is not') → not is not	not is not	✔
 notString('no') → not no	not no	✔
 */


// На сайте решение лучше:
function notString2(str) {
    if (str === null || str === undefined || str.substring(0, 3) === 'not') {
        return str;
    }
    return `not ${str}`;
}
