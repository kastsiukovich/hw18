'use strict'
//task 1
// вар1
// function sorting(a, b) {
//    return a.length - b.length
// }

// function numbSort(arr) {
//    let arrStr = [];
//    for (let i = 0; i < arr.length; i++) {
//       arrStr.push((arr[i].toString()))
//    }
//    const newArrStr = arrStr.sort(sorting);
//    const newArrFinish = [];
//    newArrStr.forEach(item => newArrFinish.push(+item))
//    return (newArrFinish);
// }
// вар2
const numbSort = (arr) => {
   return arr = arr.join(',').split(',').sort((a, b) => { return a.length - b.length }).map((itme) => +itme);
}
console.log(numbSort([2, 37, 1, 2, 739, 2]));
console.log(numbSort([777, 182, 11, 881, 27]));
console.log(numbSort([5, 4, 3, 2, 1, 18, 6, 1, 3]));

// task 2
let sortStr = (arr, str) => {
   let arrFin = []
   for (let i of str)
      arr.forEach((item) => {
         if (i === item.trim()[0]) {
            arrFin.push(item);
         }
      });
   return arrFin
}
console.log(sortStr(["orange ", "mandarin", " pear", "coconut "], "cmop"));
console.log(sortStr(["middle", "junior", "senior"], "stnmj"));
console.log(sortStr(["bike", "car", "motorcycle"], "camrb"));

// task 3
const revOddWord = (str) => {
   str = str.split(' ');
   let strFin = str.map((item) => {
      if (item.length % 2 !== 0) {
         return item.split('').reverse().join('');
      }
      return item.split(' ').join(' ');
   });
   return strFin.join(' ');
}
// let result = [];
// let revOddWord = (str) => {
//    str.split(" ").map(key => {
//       if (key.length % 2 !== 0) {
//          result.push(key.split('').reverse().join(''));
//       }
//       else if (key.length % 2 === 0 && key[key.length - 1] === ',') {
//          key = key.substr(0, key.length - 1).split('').reverse().join('')
//          result.push(key + ",")
//       }
//       else {
//          result.push(key);
//       }
//    })
//    console.log(...result);

// }
// revOddWord("Egg");
// revOddWord("It is false");
// revOddWord("Dear Santa, give me a new iPhone")



console.log(revOddWord("Egg"));
console.log(revOddWord("It is false"));
console.log(revOddWord("Dear Santa give me a new iPhone"));
