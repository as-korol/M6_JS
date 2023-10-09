const container = document.body;
container.onclick = function (event) {
    const element = event.target;

    if (element.id === 'consoleLog') {
        console.log('Hello, it is message in Console Log');
    } else if (element.id === 'alert') {
        alert('It`s alert');
    } else if (element.id === 'prompt') {
        const userInput = prompt('Enter value or words:');
        alert('You enter: ' + userInput);
    }
};
