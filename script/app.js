const addBtn = document.querySelector('.add-button');
const inputData = document.querySelector('.input-data');
const todoListContainer = document.querySelector('.todo-list-container');
const listContainer = document.createElement('ul');

todoListContainer.insertAdjacentElement('afterend',listContainer);
addBtn.addEventListener('click', function() {
    if(inputData.value.trim() === '') {
        alert('You must write something!')
    }
    const listItem = document.createElement('li');
    listItem.textContent = inputData.value;
    listContainer.append(listItem);
    inputData.value = '';
})
