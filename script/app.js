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
    listItem.style.cursor = 'pointer';
    listItem.style.backgroundColor = '#f9f9f9';
    listItem.style.padding = '10px 15px';
    listItem.style.hover
    listContainer.append(listItem);
    listItem.addEventListener('mouseenter', function() {
        listItem.style.backgroundColor = '#ddd';
    });
    listItem.addEventListener('mouseleave', function() {
        listItem.style.backgroundColor = '#f9f9f9'
    })
    inputData.value = '';
})
