
const trafficLightEl1 = document.querySelector('#trafficLight1');
const trafficLightEl2 = document.querySelector('#trafficLight2');
const trafficLightEl3 = document.querySelector('#trafficLight3');

trafficLightEl1.addEventListener('click', function() {
    makeGreen(trafficLightEl1);
    trafficLightEl2.style.background = 'black';
    trafficLightEl3.style.background = 'black';
});

trafficLightEl2.addEventListener('click', function() {
    makeGreen(trafficLightEl2);
    trafficLightEl1.style.background = 'black';
    trafficLightEl3.style.background = 'black';
});

trafficLightEl3.addEventListener('click', function() {
    makeGreen(trafficLightEl3);
    trafficLightEl1.style.background = 'black';
    trafficLightEl2.style.background = 'black';
});

function makeGreen(trafficLightEl) {
    trafficLightEl.style.background = 'green';
    trafficLightEl.removeEventListener('click', makeGreen);
    trafficLightEl.addEventListener('click', makeYellow);
}

function makeYellow() {
    this.style.background = 'yellow';
    this.removeEventListener('click', makeYellow);
    this.addEventListener('click', makeRed);
}

function makeRed() {
    this.style.background = 'red';
    this.removeEventListener('click', makeRed);
    this.addEventListener('click', function() {
        makeGreen(this);
        trafficLightEl1.style.background = 'black';
        trafficLightEl2.style.background = 'black';
        trafficLightEl3.style.background = 'black';
    });
}
