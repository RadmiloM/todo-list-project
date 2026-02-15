const addBtn = document.querySelector('.add-button');
const inputData = document.querySelector('.input-data');
const todoListContainer = document.querySelector('.todo-list-container');
const listContainer = document.createElement('ul');

todoListContainer.insertAdjacentElement('afterend', listContainer);
addBtn.addEventListener('click', function () {
    if (inputData.value.trim() === '') {
        alert('You must write something!')
    }
    const listItem = document.createElement('li');
    const closeBtn = document.createElement('span');
    closeBtn.classList.add('close-button');
    closeBtn.innerHTML = '&times;';

    listItem.classList.add('list-item');
    listItem.textContent = inputData.value;
    listItem.style.cursor = 'pointer';
    listItem.style.padding = '10px 15px';

    closeBtn.addEventListener('mouseenter', function () {
        closeBtn.style.backgroundColor = '#f44336';
    })

    closeBtn.addEventListener('mouseleave', function () {
        closeBtn.style.backgroundColor = 'transparent';
    })

    listItem.append(closeBtn);
    listContainer.append(listItem);

    closeBtn.addEventListener('click', function () {
        listContainer.removeChild(listItem);
    })

    listItem.addEventListener('click', function () {
        listItem.classList.toggle('button-clicked');
        if (listItem.classList.contains('button-clicked')) {
            if (listItem.innerHTML.includes('✓')) {
                return;
            } else {
                const text = listItem.textContent.substring(0, listItem.textContent.length - 1);
                const textContent = `&#10003; ${text}`;
                listItem.innerHTML = '';
                listItem.innerHTML = textContent;
                closeBtn.classList.add('close-button');
                closeBtn.innerHTML = '&times;';
                listItem.append(closeBtn);
            }
        } else {
            const text = listItem.textContent.substring(1, listItem.textContent.length - 1);
            listItem.innerHTML = '';
            listItem.innerHTML = text;
            closeBtn.classList.add('close-button');
            closeBtn.innerHTML = '&times;';
            listItem.append(closeBtn);
        }
    })
    inputData.value = '';
})
