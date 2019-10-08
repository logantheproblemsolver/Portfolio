

function menuClick() {
    $('#hamburger').on('click', '#hamburgerMenu', function(event) {
        alert('hey!');

        event.preventDefault();
        $('.hamburgerMenu').css('display', 'inline');
    });
}

function initialize() {
    menuClick();
}


$(initialize)