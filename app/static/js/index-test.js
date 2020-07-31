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


function getResults() {
    const request = new XMLHttpRequest();
    const search = document.querySelector("#search-field").value;
            
    request.open('POST', '/composers');

    //handle the JSON response from Flask
    request.onload = () => {

        const data = JSON.parse(request.response);
                
        //if request was successful, create list of links
        if (data.success) {
                
            const composer_data = JSON.parse(data.composers);
                  
            for (let i=0; i < composer_data.length; i++) {
                const li = document.createElement('li');
                li.innerHTML = `<a class="composerLinks" href="composer/${composer_data[i].name}">${composer_data[i].name}</a>`; 
                document.querySelector("#composer-results").append(li);
                }
            }
            else {
                document.querySelector("#test").innerHTML = 'There was an error.';
            };             
        };

            

    const data = new FormData();
    data.append('search-field', search);

    request.send(data);
    return false;

}

//event listeners


searchField.addEventListener('keyup', () => {
    clearList();
    getResults();
})