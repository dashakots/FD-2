let num = 0;

// while (num >0) {
//     console.log(num)
//     num--;
// }


// do {
//     console.log(num)
//     num--;
// } while (num > 0)


// let index = 0;
//
// while (index < arr.length) {
//     console.log(arr[index]);
//     index++;
// }

// for (let i = 0 ; i < arr.length; i++) {
//    const item = arr[i];
//    if (item % 2 !== 0) break
//        console.log(item)
//
// }
let arr = [1, 2, 3, 4, 5,6,7, 8,9,10];
// let arr2 = [1, 2, 3,7,8,9,10];
// const getSum = (arr) => {
//
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//
//         if (typeof arr[i] === 'string') sum += +arr[i];
//         else if (typeof arr[i] !== 'number') continue
//
//         else sum += arr[i];
//     }
//     return sum;
// }
// console.log(getSum(arr))
// console.log(getSum(arr2))


//return arr.reduce((acc,cur) => {
// return acc+ cur;},0}


// const getSum = (arr) => {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum += arr[i];
//     }
//     return sum;
// }
// console.log(getSum(arr));



// const getSum = (arr) => {
//     if (arr.length === 0) return 0;
//     return arr[0] + getSum(arr.slice(1));
// }
// console.log(getSum(arr));


const pow = (a, b) => {
    if (b === 0) return 1;
    return a * pow(a, b-1);
}
console.log(pow(2,3));
console.log(pow(4,3));

const doSmth = (...) => {
    console.log(params)
}
doSmth(1,2)