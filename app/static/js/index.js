document.addEventListener('DOMContentLoaded', () => {

    document.querySelector("#search-form").onsubmit = () => {
        const request = new XMLHttpRequest();
        const search = document.querySelector("#search-field").value;
        request.open('POST', '/composers');
        
        
        request.onload = () => {
            //turn into JSON in Flask app?
            
        }

        const data = new FormData();
        data.append('search', search);
        request.send(data);
        return false;

    }
})