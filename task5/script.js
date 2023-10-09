let enterText = document.querySelector('.enterLocation');
let duplicateText = document.querySelector('.duplicateField');
let consoleWriteB = document.querySelector('.consoleWriteButton');

enterText.addEventListener('input', changeText);
consoleWriteB.addEventListener('click', LogWrite);

function changeText() {
    if (enterText.value !== '') {
        duplicateText.textContent = ('Entering text: ' + enterText.value);
    }
    else {
        console.log('Error, pls enter text in input :)');
    }
}
function LogWrite() {
    if (enterText.value !== '') {
        console.log(duplicateText.textContent);
        enterText.value = '';
        duplicateText.textContent = '';

    } else {
        console.log('Error, pls enter text in input :)');
    }
}
