'use strict';

// function multiplyh(a) {
//     return  function (b) {
//         return a * b;
//     }
// }
// const multiply = a => b => a * b;
//
// const double = multiply(2);
// const triple = multiply(3);
//

// console.log(double(12));
// console.log(double(10));
// console.log(triple(11))
// console.log(triple(30))

// const getData = (baseUrl)  => {
//     ///
//     ///
//     return (params) => {
//         return fetch(baseUrl, {});
//     }
// }
//
//
// const getUserData = getData('baseUserUrl');
// const getBasketData= getData('baseBasketUrl');


// function add(a) {
//     let sum = a;
//     return function addInner (b) {
//         if (!b) {
//             return sum;
//         } else {
//              sum += b;
//             return addInner;
//         }
//     }
// }
//
// console.log(add(3)(3)(4)(5)(6)(7)(8)(9)(10)());
//
// const human = {
//     name: 'John',
//     age: 32,
//     sayHello() {
//         console.log(`Hello, my name is ${this.name}`);
//     }
// }
//
// const user = {
//     name: 'Nick',
//     email: 'john@gmail.com',
//     password: 'password',
//
// }
//
// user.__proto__ = human;
//
// human.sayHello();
// user.sayHello();
//
//
// // Object.entries(user).forEach(([key, value]) => {
// //     console.log(key, value);
// // })
//
//
// for (const userKey in user) {
//     if (user.hasOwnProperty(userKey)) {
//         console.log(user[userKey]);
//     }
// }


//
// const human = {
//     name: 'John',
//     age: 32,
// }
//
// function User(email, password) {
//     this.email = email;
//     this.password = password;
// }
//
// User.prototype.changePassword  = function (newPassword) {
//
// }
//
// const user1 = new User('John@kjdgkjdfg.com', 'secretpassword');
// console.log(user1);
//
// User.prototype = null;
// const user2 = new User('John@kjdgkjdfggfnghnhgng.com', 'secretpassword');
//
// console.log(user2);
//
// // function squared(arr) {
// //     return arr.map(function (item) {
// //         return item * item;
// //     })
// // }
//
// Array.prototype.squared = function () {
//     return this.map(num => num * num)
// }
// const arr = [1,2,3,4,5];
// console.log(arr.squared());

//обработка ошибок

// console.log('befor error')
//
//
// window.onerror = err => {
//     console.error('onerror');
// }
//
// undefined();
//
// // try {
// //     // undefined()
// // } catch (e) {
// //     console.error('zdfgdzfgdfg')
// // }
//
// console.log('hello after error')


const obj = {
    name: 'John',
    family:{}
}
console.log(obj.family?.father.name);

console.log(obj.sayHello?.());

варпарвар

