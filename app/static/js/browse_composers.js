const composerLetterContainer = document.getElementById('composer-letter-container');
const resultsColumn = document.getElementById('results-column');
const composerResultList = document.getElementById('composer-result-list');
 
 function openCurrentLetter(e) {
     
     if(e.target.tagName === "LI") {
        console.log(e.target.textContent);
        let composerLetter = e.target.textContent;
        let send = {letter: composerLetter};
        fetch('/browse_composer_list', {
            method: 'POST',
            credentials: "include",
            body: JSON.stringify(send),
            cache: "no-cache",
            headers: new Headers({
                "content-type": "application/json"
            })
        })
        .then(res => {
            if(res.status !== 200) {
                console.log('There was a problem');
                return;
            }
            res.json().then(data => {
                if (resultsColumn.textContent !== '') {
                    resultsColumn.textContent = '';
                }

                data.letterArray.forEach(item => {
                    
                    let composerResultName = document.createElement('p');
                    composerResultName.textContent = `${item}`;
                    resultsColumn.appendChild(composerResultName);
                    
                });


                [...resultsColumn.children].forEach(comp => {
                    comp.addEventListener('click', (e) => {
                        window.location.href = `composer/${e.target.textContent}`;
                    })
                })

            });
                
        })
        .catch(err => console.log(err));
     }
 }


composerLetterContainer.addEventListener('click', openCurrentLetter);