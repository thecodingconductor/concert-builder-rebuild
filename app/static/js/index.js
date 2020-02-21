document.addEventListener('DOMContentLoaded', () => {

  const composerLinks = document.querySelector("#composer-results");

    document.querySelector("#search-field").onkeyup = () => {

      //if searchfield is empty, prevent search and clear all results  
          if (document.querySelector("#search-field").value.length === 0) {
            const myNode = document.querySelector("#composer-results");
            while (myNode.firstChild){
              myNode.removeChild(myNode.firstChild);
            }
            return false;
          }


            //clear result list with each key press 
            const myNode = document.querySelector("#composer-results");
            while (myNode.firstChild){
              myNode.removeChild(myNode.firstChild);
            }

            //make AJAX request to Database
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
                    li.innerHTML = `<a class="composerLinks" href="#">${composer_data[i].name}</a>`; 
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

        };

        $('#composer-results').on('click', 'a', function(){
          
          var composerName = $(this).text();
          composerName = composerName.replace(/ /g, "%20"); 

          $("html").load(`composer/${composerName}`)

          console.log(composerName);

        });


        
      //get clicked link and open new page.
      // if (document.querySelectorAll(".composerLinks").length > 0) {
           
      //   console.log('It worked');
      //   console.log(document.querySelectorAll(".composerLinks"));
      //   document.querySelectorAll('.composerLinks').onclick = (e) => {
          
          
      //     const linkRequest = new XMLHttpRequest();
      //     linkRequest.open('GET', `/composer/${e.target.value}`, true);  
      //     console.log(e.target.value);
      //     request.onload = () => {
      //       if(this.status >= 200 && this.status < 400) {
      //         const resp = this.response;
      //       } else{
      //         return 'There was an error'
      //       }
      //     };
      //     linkRequest.send();

      //   }
      // }



}); 