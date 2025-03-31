'use strict';

// console.dir(document.body.style.backgroundColor = 'yellow');

//первый вариант
// Array.from(document.body.children).forEach(child => {
//     console.log(child);
// });
//
// console.log(document.body.children);
//второй вариант
// [...document.body.children].forEach(child => {
//     console.log(child);
// });
//третий вариант
// Array.prototype.forEach.call(document.body.children, function (el) {
//     console.log(el)
// });


// const footers = document.querySelectorAll('footer');
// console.log(footers);
// const footer = document.createElement('footer');
//
// document.body.append(footer);
// console.log(footers)


// const el = document.querySelector('div');
// console.log(el.closest('div'));


// const colors = [ 'yellow', 'red', 'green'];
// let index = 0;
//
// function changeBg() {
//     document.body.style.backgroundColor = colors[index];
//     index++;
// }
//
// setInterval(changeBg, 2000);

// const getRandomColor = () => {Math.floor(Math.random() * 0xFFFFFF).toString(16).padEnd(6,'0')};
//
// setInterval(() => {
// document.body.style.backgroundColor = getRandomColor();
// }, 300);


document.body.setAttribute('hello', 'world');
document.body.dataset.helloWorld = 'world';
document.body.classList.add('js', 'css')
document.body.classList.remove('js')
console.log(document.body.classList.contains('js'))
document.body.classList.toggle('html');

console.log(document.querySelector('h1').getAttribute('id'));


// document.querySelector('img').src = 'https://avatars.mds.yandex.net/i?id=e22a3881bf2dd8fd3ca50c258936fd58_sr-12614136-images-thumbs&n=13';


// document.querySelector('input[type="checkbox"]').checked= true;

// document.querySelector('input[type="checkbox"]').setAttribute('checked', true)


console.log(document.querySelector('h1').innerHTML = '<script>console.log("hello")</script>');