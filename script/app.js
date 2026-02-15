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
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-button');
    closeBtn.innerHTML = '&times;';

    listItem.classList.add('list-item');
    listItem.textContent = inputData.value;
    listItem.style.cursor = 'pointer';
    listItem.style.backgroundColor = '#f9f9f9';
    listItem.style.padding = '10px 15px';

    closeBtn.addEventListener('mouseenter', function() {
        closeBtn.style.backgroundColor = '#f44336';
    })

    closeBtn.addEventListener('mouseleave', function() {
        closeBtn.style.backgroundColor = '#f9f9f9';
    })

    listItem.append(closeBtn);
    listContainer.append(listItem);

    listItem.addEventListener('mouseenter', function() {
        listItem.style.backgroundColor = '#ddd';
    });
    listItem.addEventListener('mouseleave', function() {
        listItem.style.backgroundColor = '#f9f9f9'
    })
    inputData.value = '';
})
