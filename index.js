'use strict';

const obj = {
    name: 'John',
    sayHello (phrase) {
        console.log(`${phrase} ${this.name}`)
        // return 'Hello World';
},
    getThis () {
        return this
    }
};

// obj.secondName = 'Smith';

// console.log(obj.getThis())
// obj.getThis().secondName = 'Smith';
// console.log(obj)


// console.log(obj.sayHello()); //undefined

// setTimeout(() => {
//     obj.sayHello();
// }, 1000);
//
// setTimeout(obj.sayHello, 1000);

// const CBwithContext = obj.sayHello.bind(obj, `hello my name is`);
// const CBwithContext1 = obj.sayHello.apply(obj, [`hello my name is`]);
// методы привязки контекста
// bind
//call
//apply
// setTimeout(CBwithContext, 1000)
// setTimeout(CBwithContext1, 1000)

// obj.sayHello.call({
//     name: 'Smith',
// }, `hello my name is`)

// const obj2 = {
//     name: 'Sam',
// }
// obj2.sayHello = obj.sayHello;
//
// obj2.sayHello();

//самовызывающаяся функция и анонимная
    (() => {
        console.log('test')
    })()
