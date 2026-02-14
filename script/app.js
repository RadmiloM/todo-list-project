const addBtn = document.querySelector('.add-button');
const inputData = document.querySelector('.input-data');

addBtn.addEventListener('click', function() {
    if(inputData.value.trim() === '') {
        alert('You must write something!')
    }
})
