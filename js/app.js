let number = prompt("Enter INN (10 or 12 digitals): ");
const weightFor10 = [2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
const weightFor12_1 = [7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
const weightFor12_2 = [3, 7, 2, 4, 10, 3, 5, 9, 4, 6, 8, 0];
let sum = 0;
let sum2 = 0;
let contrNum = 0;
let contrNum2 = 0;
let contrNumFoo = (cN, s) => {
    cN = s % 11;
    if (cN > 9) {
        cN = cN % 10;
    }
    return cN;
}
let contrSum = (s, w, n, m) => {
    for (let i = 0, j = 0; i < n, j < m; i++, j++)
        s += (Number(number[i]) * w[j]);
    return s;
}
for (let i = 0; i < number.length; i++) {
    if (number.length == 10 || number.length == 12) {
        number[i] = String(number[i]).split('');
        console.log(number[i]);
    }
    else {
        number = prompt("Wrong amount of digits. Try again");
    }
}
if (number.length == 10) {
    console.log((contrNumFoo(contrNum, contrSum(sum, weightFor10, number.length, number.length)) == number[number.length - 1]) ? "INN is OK" : "INN is NOT OK");
}
else {
    console.log((contrNumFoo(contrNum, contrSum(sum, weightFor12_1, number.length - 1, weightFor12_1.length)) == number[number.length - 2] && contrNumFoo(contrNum2, contrSum(sum2, weightFor12_2, number.length, number.length)) == number[number.length - 1]) ? "INN is OK" : "INN is NOT OK");
}
console.log(number);