const submitEl = document.querySelector('.button-create');
function handlerSubmit() {
    fetch('https://us-central1-awesome-cards-cf6f0.cloudfunctions.net/card/', {
        method: 'POST',
        body: JSON.stringify(dataBack),
        headers: {
            'content-type': 'application/json'
        },
    }).then((responLink) => responLink.json())
    .then((link) => {
        let urlTwitter = link.cardURL;
        const urlTextEl = document.querySelector('.link-profile-card');
        urlTextEl.innerHTML = urlTwitter;
        urlTextEl.href = `${urlTwitter}`;
        const linkTweetEl = document.querySelector(".share-twitter");
        linkTweetEl.href = `https://twitter.com/intent/tweet?text=Mira%20mi%20tarjeta%20${urlTwitter}`;
        const hiddenTwitter = document.querySelector(".container-hide-section");
        hiddenTwitter.classList.remove("hidden");
        submitEl.classList.add("clicked");
        console.log(urlTwitter);
    })
    .catch((error) => console.log(error))
}


submitEl.addEventListener('click', handlerSubmit);