const array = [1, 2, 3, 4, 5,6,7,8,9,10];

console.log([...array] === array);

// array.splice(4,1, 'five');
// console.log(array);
//
//
// const arr2 = array.toSpliced(4,1,'five');
// console.log(arr2);

// function getSum(num1,num2) {
//     let sum = num1 + num2;
//     return sum;
// }
// const getSum = (num1, num2) => num1 + num2;

// const sum = getSum(array[0],array[1]);
// console.log(sum)

const replaceImArray = (arr, from, to) => {
    return arr.map((item) => item === from ? to : item);

}
    // const index = newArr.findIndex((value) => value === from);
    // if (index >= 0) {
    //     newArr.splice(index,1, to)
    // }

replaceImArray(array,5,'five');
const replecedArray = replaceImArray(array,5,'six');

console.log(replecedArray);
console.log(array);


// const index = array.findIndex((value) => value === 5);
// console.log(index)
//
//
// if (index >= 0) {
//     array.splice(index,1, 'five')


const getDayName = (dayNumber) =>  {
    switch (dayNumber) {
        case 1:
            console.log('понедельник')
            break;
        case 2:
            console.log('вторник')
            break;
        case 3:
            console.log('среда')
            break;
        case 4:
            console.log('четверг')
            break;
        case 5:
            console.log('пятница')
            break;
        case 6:
            console.log('суббота')
            break;
        case 7:
            console.log('воскресенье')
            break;
        default: 'Такого дня недели не сущетсвует'
    }
}

console.log(getDayName(1))