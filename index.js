// console.log(JSON.parse(window.localStorage.getItem('')))
//
// localStorage.setItem('key', JSON.stringify({hello: 'world'}));
// localStorage.setItem('key2', [1,2,3]);
//
//
// setTimeout(() => {
//     localStorage.clear();
//     console.log('Local storage is cleared');
// }, 5000);
//
// function addKeyAndRemoveAfter(key, value, ms) {
//     localStorage.setItem(key, value);
//
//     setTimeout(() => {
//         localStorage.removeItem(key);
//     }, ms);
// }
//
// addKeyAndRemoveAfter('myKey', 'someValue', 10000);
// addKeyAndRemoveAfter('key', 'valudfhgdfhdfghe', 7000);

// const transformSecToMilliSec = (sec) => sec * 1000;
// const transformMinToMilliSec = (min) => min * transformSecToMilliSec(60);
//
//
//
// const setItemFromLS = (key, value, time) => {
//     const item = JSON.parse(localStorage.getItem('myStorage')) || {};
//     item[key] = {
//         value,
//         expires: Date.now() + time,
//     }
//
//     localStorage.setItem('myStorage', JSON.stringify(item));
// }
// const getItemFromLS = (key) => {
//     const item  = JSON.stringify(localStorage.getItem('myStorage')) ;
// if (!item) return null
//     const itemFromLS = item.key;
//     const now = Date.now();
//
//     if(now< itemFromLS.expires) {
//         return itemFromLS.value;
//     } else {
//         delete itemFromLS[key];
//         localStorage.setItem('myStorage', JSON.stringify(item));
//         return null
//     }
// }
//
// setItemFromLS('hello', 'world', transformMinToMilliSec(2));
// getItemFromLS('hello');


// window.addEventListener('storage', event => {
//     console.log(event)
// })
const LS_ITEM_PREFIX = `FORM-`
const createLocalStorageItemName = () => `${LS_ITEM_PREFIX}-${Math.random().toString(5)}`;

const isItemName = name => name.split('-')[0] === LS_ITEM_PREFIX;

const createListItem = (value) => {
    const container = document.querySelector("#container");
    const listItem = document.createElement("li");
    listItem.textContent = value;

    container.append(listItem);
}
document.forms[0].addEventListener("submit", function(e) {
    e.preventDefault()
    const value = e.target.elements.value.value;
    localStorage.setItem(createLocalStorageItemName(), value);
    createListItem(value);
    e.target.elements.value.value = '';
})


window.addEventListener("DOMContentLoaded", () => {
    for(let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (isItemName(key)) createListItem(localStorage.getItem(key));
    }
})

window.addEventListener("storage", (e) => {
    if (e.newValue && isItemName(e.key)) createListItem(e.newValue);
})
















