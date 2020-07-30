const composerLinks = document.getElementById('composer-results');
const searchField = document.getElementById('search-field');


function clearList() {
    if (searchField.value.length === 0) {
        while(composerLinks.firstChild) {
            composerLinks.removeChild(composerLinks.firstChild);
        }

        return false;
    }

    while(composerLinks.firstChild) {
        composerLinks.removeChild(composerLinks.firstChild);
    }
}

async function getResults() {
    console.log('within getResult()>>>', searchField.value);
    const rawResponse = await fetch('/composers', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(searchField.value)
    });

    const content = await rawResponse.json();
    console.log(content);   
}


//event listeners


searchField.addEventListener('keyup', () => {
    
    
    clearList();
    getResults();

})