const submitEl = document.querySelector('.button-create');
function handlerSubmit() {
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        body: JSON.stringify(dataBack),
        headers: {
            'content-type': 'application/json'
        },
    }).then((responLink) => responLink.json())
    .then((link) => console.log(link))
    .catch((error) => console.log(error))
}


submitEl.addEventListener('click', handlerSubmit);