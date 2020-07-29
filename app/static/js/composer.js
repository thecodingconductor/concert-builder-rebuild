document.addEventListener('DOMContentLoaded', () => {

    const pieceList = document.querySelectorAll(".piece-link");

    

    for (let i=0; i < pieceList.length; i++) {

        pieceList[i].onclick = () => {

            const myNode = document.querySelector("#piece-results");
            while (myNode.firstChild){
                myNode.removeChild(myNode.firstChild);
            }


            const request = new XMLHttpRequest();
            let formattedString = pieceList[i].innerHTML.split('&')[0];
            request.open('POST', `/piece_detail/${formattedString}`);

            request.onload = () => {
                
                $(window).scrollTop(0);
                const data = JSON.parse(request.responseText);
                
                //console.log(data);
                //console.log(data.piece.title);
                //console.log(data["success"]);
                //console.log(data.length);
                
                if (data.piece.title) {
                    const contents = `<span id="piece_title">${data.piece.title}</span> <br>
                                      <span id="piece_duration">${data.piece.duration}</span><br>
                                      <span id="piece_instrumentation">${data.piece.instrumentation}</span><br>
                                      <span id="piece_notes">${data.piece.notes}</span>`;
                    if (data.piece.notes.length > 1) {
                        for (let i=0; i < data.piece.notes.length; i++) {
                            const operaNotes = `<span class="opera_notes">${data.piece.notes[i]}</span>`
                            const li = document.createElement("li");
                            li.innerHTML = operaNotes;
                            document.querySelector("#piece-results").append(li);
                        }
                    }
                                      //add publishers
                    //for (let i=0; i < data.piece.publishers.length; i++){
                      //  const publishers = 
                    //}
                    const li = document.createElement('li');
                    li.innerHTML = contents;
                    document.querySelector("#piece-results").append(li);


                }
                else {
                    const liFail = document.createElement('li');
                    liFail.innerHTML = 'There was a failure.';
                    document.querySelector('#piece-results').append(liFail);
                }
            }

            request.send();
            return false;
        }
        
    }
})

    // $('a').each(function() {
        
    //     var newUrl = $(this).attr("href").replace("#", `/piece_detail/${$(this).text}`);
    //     $(this).attr("href", newUrl);
    // })

//     $('#composer-pieces').on('click', 'a', function(){
//         var pieceName = $(this).text();
//         console.log(pieceName);
//     })
// }
