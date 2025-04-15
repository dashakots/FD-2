'use strict';
// const controller = new AbortController();
// controller.signal.addEventListener('abort', () => {
//     console.log('Галя отмена');
// });
// fetch('https://jsonplaceholder.typicode.com/todos/10', {
//     method: 'POST',
//     headers: {
//         'Content-Type': 'application/json',
//     },
//     body: JSON.stringify({
//         email: 'world',
//         name: 'John Doe',
//     })
// })
// .then(res => {
//     if (res.ok) return res.json()
// })
//     .then(json => console.log(json))

const getUrl = (query) => {
    `https://www.google.com/search?q=${query}`;
}
const url = new URL (`https://www.google.com/search`);
url.searchParams.set('q', 'hello');
console.log(url)

fetch(getUrl('hello'))
    .then(res => {
        if (res.ok) return res.json()
    })
    .then(json => console.log(json))



