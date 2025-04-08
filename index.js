// const app = document.getElementById('app');
//
//
// const keyDownHadler = (event) => {
//    if (event.keyCode == 13) {
//        const taskEl = event.target.closest(`[data-task]`);
//        const taskInputEl = taskEl.querySelector('input');
//        const taskInputValue = taskInputEl.value;
//
//        const taskTextElement = document.createElement('span');
//        taskTextElement.textContent = taskInputValue;
//
//        taskInputEl.replaceChild(taskTextElement, taskInputEl);
//    }
// }
//
//
// const editAction = () => {
//     const taskEl = app.querySelector(`[data-task = "${id}"]`);
//     const taskTextElement = taskEl.querySelector('span');
//     const taskText = taskTextElement.textContent;
//     const taskInputEl = document.createElement("input");
//     taskInputEl.value = taskText;
//
//     taskInputEl.addEventListener("keydown", keyDownHadler )
//     taskEl.replaceChild(taskInputEl, taskTextElement)
//
//
// }
// const deleteAction = (id) => {
// app.querySelector(`[data-task = "${id}"]`).delete()
// }
//
// app.addEventListener('click', (event) => {
//     const editableId = event.target.dataset.edit;
//     const deleteId = event.target.dataset.delete;
//
//     console.log(editableId)
//     console.log(deleteId)
//
//     if (editableId) editAction(editableId);
//     else if (deleteId) deleteAction(deleteId);
//
// })

/////////////////////////////
// const img = document.querySelector('img');
// img.addEventListener('load', () => {
//     console.log('img loaded')
// });
//
// img.addEventListener('error', (e) => {
//     e.target.style.display = '';
// });


const imgArr = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlk4sLu3o8iqdphZ_uPKbHzQDdZCEQVubIXw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1DiKtk1xhRMRtox6IqcqDLIzUBPmXvULuDA&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGcbs9XyZYQGaguzvn5hxjO8Ws1msHYwMS0A&s'
];

let index = 0;
const imgsLength = imgArr.length -1;

const app = document.querySelector('#app');
const imgEl = document.querySelector('#img');

const updateImgEl = (id) => {
    imgEl.src = imgArr[id];
}

app.addEventListener('hello', (e) => {
    const isPrevBtn = e.target.id === 'prev';
    const isNextBtn = e.target.id === 'next';

    if (isPrevBtn) {
        if (index===0) index = imgsLength;
        else index -=1;
        updateImgEl(index);
    }
    if (isNextBtn) {
        if (index === imgsLength) index = 0;
        else index +=1;
        updateImgEl(index);
    }
})




const event = new MouseEvent('hello', {
    clientX: 200,
    clientY: 400,
    bubbles: true,
});

setInterval(() => document.querySelector('#next').dispatchEvent(event), 1000)