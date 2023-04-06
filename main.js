var affirmationRadio = document.querySelector('.affirmation-message');
var mantraRadio = document.querySelector('.mantra-message');
var createMessageButton = document.querySelector('button');
var createMessageBox = document.querySelector('.message');

createMessageButton.addEventListener('click', selectMessage);

function selectMessage() {
    if (affirmationRadio.checked) {
       createMessageBox.innerHTML = `<p>${createMessage(affirmations)}</p>`
    } else if (mantraRadio.checked) {
       createMessageBox.innerHTML = `<p>${createMessage(mantras)}</p>`
    }
}

function createMessage(messageType) {
    var messagePosition = getRandomMessage(messageType);
    return messageType[messagePosition];
}

function getRandomMessage(messageType) {
    return Math.floor(Math.random() * messageType.length);
}