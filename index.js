

$(document).ready(function menuClick() {
    $('#hamburger').on('click', function(event) {
        event.preventDefault();
        $('.menu').toggleClass('hide');
        $('.hamburger').toggleClass('onClick');
    });
});

