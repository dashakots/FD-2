// 'use strict';
//
// const response = [];
// class BasketError extends Error {
//     constructor(message) {
//         super(message = ' BasketError');
//         this.basket = true;
//     }
// }
//
//
// class EmptyBasketError  extends BasketError {
//     constructor(message = 'Empty BasketError') {
//         super(message);
//         this.emptyBasket = true;
//     }
// }
//
// const basketError = new BasketError();
// const  emptyBasketError= new EmptyBasketError();
//
// console.log(emptyBasketError instanceof BasketError);
// console.log(emptyBasketError instanceof EmptyBasketError);
//
// try {
//     try {
//         try {
//             if (!response.length) throw basketError;
//                 //render basket logic
//             } catch (e) {
//             console.error(e)
//             if (!e.emptyBasket) throw e;
//             console.error(e, 'level 3')
//             }
//         } catch (e) {
//         if (!e.basket) throw e;
//         console.error(e, 'level 2')
//     }
// }  catch (e) {
//     console.error(e, 'level 1')
// }

// class DivisionsError extends Error {
//     constructor() {
//         super('Division by zero is not allowed');
//     }
// }
// const division = (a,b) => {
//     if (b===0) throw new DivisionsError();
//     return a/b;
// };
//
// try {
//     console.log(division(4,0));
// } catch (error) {
//     console.error(error);
// }

// function divide (a, b) {
//     if (b === 0) {
//         throw new Error('Division by zero is not allowed')
//     }
//     return a/b
// }
//
// try {
//     console.log(divide(40, 5));
//     console.log(divide(6, 0));
// } catch (error) {
//     console.error('Error in divide');
// }

// const date =  new Date(2015, 0,1);
// console.log(date.toLocaleDateString());

// const cb  = () => {
//     console.log('done')
// }
//
// setTimeout(cb, 10000);




// const date1 = Date.now();
// console.log(date1);

// console.time('timeout')
// console.time('timeout2')
//
// const cb = (id) => {
//     console.timeEnd(id);
// }
// const timerID = setTimeout(cb, 1000);
//
// console.time('interval')
// let count = 0;
//
// const id = setInterval(() => {
//     count++;
//     console.timeLog('interval')
//     if (count > 10) clearInterval(id)
//
// }, 1000)


console.time('interval');

let count = 0;

const cb = () => {
    console.timeLog('count', count);
    count++;
}

const id = setTimeout(() => {
    if (count > 10) clearTimeout(id);
    setTimeout(cb, 1000);
}, 1000);




















