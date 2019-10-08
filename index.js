

$(document).ready(function menuClick() {
    $('#hamburger').on('click', '#hamburgerMenu', function(event) {
        alert('hey!');

        event.preventDefault();
        $('.hamburgerMenu').removeClass('hide');
    });
});




$(document).ready(function() {
    $('.next').on('click', function(m) {
        m.preventDefault();
        let currentImg = $('.active');
        let nextImg = currentImg.next();

        if ( nextImg.length) {
            currentImg.removeClass('active').css('z-indez', -10);
            nextImg.addClass('active').css('z-index', -10);
        }
    });

    $('.prev').on('click', function (p) {
        p.preventDefault();
        let currentImg = $('.active');
        let prevImg = currentImg.prev();

        if (prevImg.length) {
            currentImg.removeClass('active').css('z-index', -10);
            prevImg.addClass('active').css('z-index', -10);
        }
    });
});