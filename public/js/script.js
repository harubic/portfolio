$(document).ready(function() {

    $('#nav-toogle :checkbox').change(function() {
        if (this.checked) {
            $('#navbar ul').removeClass('h-0 overflow-hidden');
            $('#navbar').removeClass('opacity-0');
        } else {
            $('#navbar ul').addClass(' h-0 overflow-hidden');
            $('#navbar').addClass('opacity-0');
        }
    });

    // navbar scrollspy
    let navScroll = $('nav').offset().top;
    $(window).scroll(function() {
        let scroll = $(this).scrollTop();

        if (scroll < navScroll) {
            $('nav').removeClass('fixed top-0 bg-slate-300');
            $('#brand').addClass('absolute opacity-0');
        } else {
            $('nav').addClass('fixed top-0 bg-slate-300');
            $('#brand').removeClass('absolute opacity-0');
        }
    });
});