' use strict';

// const cb = (e) => {
//     console.log('clicked')
//     e.preventDefault();
// };
// const cb2 = () => {
//     console.log('clicked')
// };
// document.querySelector('a').addEventListener('click', cb, {
//     capture: true
// });
// // document.querySelector('#test').addEventListener('click', cb2)
// document.querySelector('#test').removeEventListener('click', cb)


//function cb (e) {
    //console.log(e);
//};

//document.querySelector('button').addEventListener('click', cb);


//делегирование событий

// const cb = (e) => {
//     if (e.target.closest('LI') ) {
//         console.log(e.target.innerText);
//     }
// }
//
// // document.querySelectorAll('li').forEach(el => {
// //     el.addEventListener('click', cb);
// // });
//
// // const el = document.createElement('li');
// // el.innerText = 'item 7';
// //     document.querySelector('ul').append(el)
//
//
// document.querySelector('ul').addEventListener('click', cb);

// const ul = document.querySelector('ul');
// ul.addEventListener('click', (event) => {
//     if (event.target.tagName === 'BUTTON') {
//         event.target.closest('li').remove();
//     }
// });


// if (e.target.closest('button')) e.target.closest('li').remove();
// cb = (e) => {
//     e.preventDefault();
//
//     const value = e.target.querySelector('input[name="task"]').value;
//
//     if (!value) {
//         console.log('please provide input')
//         return;
//     }
//
//   const taskel = document.querySelector(`li[data-task="${value}"`);
//
//   if (taskel) {
//       taskel.remove();
//   } else {
//       console.log(`element with id ${value} not found`);
//       return;
//   }
//     e.target.querySelector('input[name="task"]').value = '';
// }
// document.querySelector('form').addEventListener('submit', cb)


const cb = (e) => {
    e.preventDefault();
    const value = e.target.querySelector('input').value;
    console.log(value);
    const taskEl = document.querySelector()
};

document.querySelector('form').addEventListener('submit', cb)