const submitEl = document.querySelector('.button-create');
function handlerSubmit() {
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/', {
        method: 'POST',
        body: JSON.stringify(dataBack),
    })
}


submitEl.addEventListener('click' handlerSubmit);