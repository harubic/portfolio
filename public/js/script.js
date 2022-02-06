// when load 
$(window).on('load', function() {
    $('.hero-section h1').removeClass('-translate-y-96');
});

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

    // navbar
    if (scroll < navScroll) {
        $('nav').removeClass('fixed top-0 bg-slate-300');
        $('nav').addClass('relative');
    } else {
        $('nav').addClass('fixed top-0 bg-slate-300');
        $('nav').removeClass('relative');
    }


});