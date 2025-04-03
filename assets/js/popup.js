function openConsultation() {
    $('.consultation_popup').addClass('active');
    $('.popup_bg').addClass('active');
    $('body').addClass('no-scroll');
}

function closeConsultation() {
    $('.consultation_popup').removeClass('active');
    $('.popup_bg').removeClass('active');
    $('body').removeClass('no-scroll');
}

$('.consultation_popup__close').on('click', closeConsultation);

$('.consultation_popup__open').on('click', openConsultation);

$('.popup_bg').on('click', function (e) {
    if ($(e.target).is('.popup_bg')) {
        closeConsultation();
    }
});


function openMobileMenu() {
    $('.header__mobile-menu').toggleClass('active');
    $('.header__burger-btn').toggleClass('active');
}

$('.header__burger-btn').on('click', openMobileMenu);

$(document).on('click', function (event) {
    if (!$(event.target).closest('.header__mobile-menu').length &&
        !$(event.target).closest('.header__burger-btn').length) {
        $('.header__mobile-menu').removeClass('active');
        $('.header__burger-btn').removeClass('active');
    }
});