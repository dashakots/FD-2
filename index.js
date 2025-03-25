// 'use strict';
//
// // const user = {
// //     name: 'John',
// // };
// //
// // Object.setPrototypeOf(user, null)
// //
// // console.log(Object.getPrototypeOf(user));
// //
// // console.log(Object.getPrototypeOf(user) === user.__proto__);
//
//
// function UserFn (name, email, password) {
//     this.name = name;
//     this.email = email;
//     this.password = password;
//
//     UserFn.prototype.sayHello = function () {
//         return 'Hello ' + this.name + '!';
//     }
// };
//
// // const userFN = new UserFn('UserFN', 'email', 'password');
//
// // console.log(userFN);
//
// // console.log(userFN.sayHello());
//
//
// class Human {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//     }
//
//     get name() {
//         return this._name;
//     }
//
//     set name(name) {
//       if (name.length < 4) {
//           console.error('name is too short');
//           return;
//       }
//       this._name = name;
//     }
//     sayHello () {
//         return  this.name ;
//     }
//
// }
//
//
// class User extends Human{
//     constructor( name, age, email, password) {
//         super(name, age) ;
//         this.email = email;
//         this.password = password;
//     }
//     sayHello () {
//         const name = super.sayHello();
//         return 'Hello ' + this.name + '!';
//     }
//     role = 'user';
// };
//
// const john = new Human('John', 22);
// console.log(john)
//
// const user = new User('John', 22, 'email', 'password');
// console.log(user);
// console.log(user.sayHello());
// console.log(john.sayHello());

const generatedID = () => {
    (Date.now() - Math.random() * 1000).toString(36).substring(2,6);
};


class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
        this.ID = generatedID();
        this.isAvailable = true;
    }

    borrow () {
        console.log(`${this.title} has been borrowed`)
        this.isAvailable = false;
    }

    returnBook () {
        console.log(`${this.title} has been returned`)
        this.isAvailable = true;
    }
    static isBook(book) {
        return book instanceof Book;
    }
}


class Library {
    constructor() {
        this.books = [];
    }

    addBook(book) {
        if (!Book.isBook(book)) {
            console.log(`${book.toString()} is not a book`);
            return;
        }
        book.borrow();
        this.books.push(book);
    }

    removeBook(id) {
        const indexBook = this.books.findIndex((book) => book.id === id);
        if (indexBook > -1) {
            this.books[bookID]
            this.books.splice(indexBook, 1);
        }
    }

    findBookByTitle(title) {
        const book =  this.books.find(book => book.title === title);

        if(!book) {
            console.log(`${title} is not found`);
            return null;
        }
        return book;
    }

    findBooksByAuthor(author) {
        return this.books.filter(book => book.author === author);
    }

    listAvailableBooks() {
      return this.books;
    }

}




const library = new Library();
const  book1 = new Book('book1', 'author1');
const  book2 = new Book('book2', 'author2');
const  book3 = new Book('book3', 'author3');



library.addBook(book1);
library.addBook(book2);
library.addBook(book3);

library.findBooksByAuthor(book1.author);

console.log(library.listAvailableBooks())