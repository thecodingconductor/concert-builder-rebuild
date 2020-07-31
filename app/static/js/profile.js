const username = String(document.getElementById('no-show').textContent);









window.addEventListener('DOMContentLoaded', () => {
    
    fetch(`/user/get_favorites/${username}`)
        .then(res => {
            return res.text();
        })
        .then(text => {
            console.log(text);
        })
})