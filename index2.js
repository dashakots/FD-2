//функции- конструкторы

// const arr = [1, 2, 3, 4, 5];
// console.log(arr)
//
// const arr2 = new Array(1,2);
// console.log(arr2);


// function User (name, age) {
//     //this ={};
//     if (!new.target) return new User(name, age)
//
//     this.name = name;
//     this.age = age;
    //return this
// }
//
// console.log(User('John', '30'));
//
// const makeUser = (name, age) =>  {
//     const user = {}
//     user.name = name;
//     user.age = age;
//
//     return user
// }
//
// console.log(makeUser('John Doe', '29'))
// console.log(makeUser('Dasha', '30'))


// function Person (name ,age) {
//     this.name = name;
//     this.age = age;
//     this.sayHello  =  () => {
//         return `Hello my name is ${this.name}`;
//     };
// }
// const person = new Person('Dasha', 29);
// console.log(person.sayHello());
//
// const obj3 = {
//     name: 'dasha',
//     age: 20,
// }
//
// obj3['secondName'] = 'smith';
// Object.defineProperty(obj3, 'second', {
//     value: 'Smith',
//     writable: false,   //в дальнейшем нельзя перезаписать значение
//     enumerable: false, // не будет перебиратьтся в цикле
//     configurable: false, //сможем ли в дальн. изменить наши дексрипторы
// })
//
// delete obj3.second;
//
//
// for (let key in obj3) {
//     console.log(key)
// }
//
//
// console.log(obj3)
//
//
// Object.seal(obj3)

//геттеры и сеттеры

const obj = {
    name: 'John',
    secondName: 'Doe',
    get fullName () {
        return `${this.name} ${this.secondName}`;
    }

}
obj.fullName = 'test'
console.log(obj.fullName );