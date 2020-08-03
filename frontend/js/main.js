const loggedIn = document.getElementById('logged-in');
const dropDownMenu = document.getElementById('dropdown-menu');

function showDropDown() {
    if(dropDownMenu.style.display === 'block') {
        dropDownMenu.style.display = 'none';
    } else {
        dropDownMenu.style.display = 'block';
    }
    
    
}



loggedIn.addEventListener('click', showDropDown)
