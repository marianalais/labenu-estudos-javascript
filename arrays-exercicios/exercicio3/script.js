const arrayNumber = [4, 6, 8, 10];
const arrayStrings = ["banana", "abacaxi", "morango", "melancia"];
const arrayMisto = [10, 20, "laranja", true];

const arrayNumberCopia = arrayNumber.slice();
const arrayStringsCopia = arrayStrings.slice();
const arrayMistoCopia = arrayMisto.slice();

arrayNumberCopia.unshift(2);
console.log(arrayNumberCopia);

arrayStringsCopia.pop();
console.log(arrayStringsCopia);

arrayMistoCopia.splice(1, 1);
console.log(arrayMistoCopia);
