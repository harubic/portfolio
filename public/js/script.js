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

// jarak social media di berbagai device
if (window.matchMedia("(min-width: 768px)").matches && window.matchMedia("(max-width: 800px)").matches) {
    var $size = 900;
} else {
    var $size = 500;
}

// navbar scrollspy
let $navScroll = $('nav').offset().top;
$(window).scroll(function() {
    let $scroll = $(this).scrollTop();

    // navbar
    if ($scroll < $navScroll) {
        $('nav').removeClass('fixed top-0 bg-slate-300 dark:bg-slate-500');
        $('nav').addClass('relative');
    } else {
        $('nav').addClass('fixed top-0 bg-slate-300 dark:bg-slate-500');
        $('nav').removeClass('relative');
    }


    // greeting
    if ($scroll > $('#greeting').offset().top - 450) {
        $('#greeting h1').removeClass('-translate-y-11 opacity-0')
    }

    // social icon
    if ($scroll > $('.info-icons').offset().top - $size) {
        $('.info-icon').each((i) => {
            setTimeout(() => {
                $('.info-icon').eq(i).removeClass('-translate-y-36 opacity-0')
            }, 400 * (i + 1));
        });
    }


});
// dark mode
$('#switch').change(function() {
    if (this.checked) {
        $('#check-mode').addClass('translate-x-4');
        $('html').addClass('dark');
    } else {
        $('#check-mode').removeClass('translate-x-4');
        $('html').removeClass('dark');
    }
})