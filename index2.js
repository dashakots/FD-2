// const response = [];
//
// class BasketError extends Error {
//     constructor(message) {
//         super(message  = ' BasketError');
//         this.basket = true;
//     }
// }
//
// class EmptyBasketError extends BasketError {
//     constructor(message) {
//         super(message = 'Empty BasketError');
//         this.emptybasket = true;
//     }
//
// }
//
//
// const basketError = new BasketError();
// const emptyBasketError = new EmptyBasketError();
//
// try {
//     try {
//         try{
//             if (!response.length) throw basketError;
//     } catch (e) {
//             if (!e.emptybasket) throw e
//    // if (!e instanceof EmptyBasketError) throw e;
//     console.error(e, 'level 3');
//     }
// } catch (e) {
//         if (!e.basket) throw e
//         // if(!e instanceof BasketError) throw e;
//         console.error(e, 'level 2');
//     }
// } catch (e) {
// console.error(e, 'level 1');
// }


class DivisionError extends Error {
    constructor() {
        super('нельзя делить на ноль');
    }
}

const division = (a, b) => {
    if (b === 0) throw new DivisionError();
    return a / b;
}
try {
    console.log(division(4,0))
} catch (e) {
console.error(e)
}


// const cb = () => {
//     console.log('done')
// }

// setTimeout(cb, 5000);

//время выполнения функции
// const cb = () => {
//     console.log('done', Date.now() - date1);
// }
//
// const date1 = Date.now();
// console.log(date1);
//
// setTimeout(cb, 1000);
//
// //другой способ
//
// console.time('timeout2');
// console.time('timeout3');
//
// const cb2 = () => {
//     console.timeEnd('timeout2')
// }
//
// const cb3 = () => {
//     console.timeEnd('timeout3')
// }
//
// setTimeout(cb2, 2000);
// setTimeout(cb3, 1000);
//
//
// // другой способ
//
// console.time('timeout');
// console.time('timeout4');
//
// const cB = (id) => {
//     console.timeEnd(id)
// }
// setTimeout(cB, 1000, 'timeout4');
// setTimeout(cB, 1000, 'timeout');


//ИНТЕРВАЛ
console.time('interval')

let count = 0;

const id = setInterval(() => {
    count++;
    if (count > 10) {
        clearInterval(id)
    }
    console.timeLog('interval');
}, 1000)


console.time('interval')
let count = 0;

const cb = () => {
    count += 1;
    console.timeLog('interval', count);
    if (count < 20)setTimeout(cb, 1000);
}

cb()
