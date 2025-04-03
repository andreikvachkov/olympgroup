document.addEventListener("DOMContentLoaded", function () {

    // Блок видео
    const video = document.getElementById("video-block__custom-video");
    const playButton = document.getElementById("video-block__play-button");

    if (video && playButton) {
        playButton.addEventListener("click", function () {
            video.play();
            playButton.classList.add("hidden");
        });

        video.addEventListener("click", function () {
            if (video.paused) {
                video.play();
                playButton.classList.add("hidden");
            } else {
                video.pause();
                playButton.classList.remove("hidden");
            }
        });

        video.addEventListener("pause", function () {
            playButton.classList.remove("hidden");
        });

        video.addEventListener("ended", function () {
            playButton.classList.remove("hidden");
        });
    }


    // блок сервис
    const items = document.querySelectorAll('.services__item');

    function handleHoverEvents() {
        if (window.innerWidth <= 768) return;

        items.forEach(item => {
            item.addEventListener('mouseenter', () => {
                if (item.classList.contains('active')) return;

                items.forEach(i => {
                    if (i !== item) {
                        const content = i.querySelector('.services__item__content');
                        if (content) {
                            content.style.transition = 'opacity 0s';
                            content.style.opacity = 0;
                        }
                    }
                });

                items.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                const content = item.querySelector('.services__item__content');
                if (content) {
                    content.style.opacity = 0;
                }

                item.addEventListener('transitionend', (e) => {
                    if (e.propertyName === 'width' && item.classList.contains('active')) {
                        if (content) {
                            content.style.transition = 'opacity 0.5s ease';
                            content.style.opacity = 1;
                        }
                    }
                });
            });

            item.addEventListener('mouseleave', () => {
                if (item.classList.contains('active')) return;

                const content = item.querySelector('.services__item__content');
                if (content) {
                    content.style.transition = 'opacity 0s';
                    content.style.opacity = 0;
                }
            });
        });
    }

    function handleMobileEvents() {
        if (window.innerWidth > 768) return;

        items.forEach(item => {
            item.addEventListener('click', () => {
                if (item.classList.contains('active')) return;

                items.forEach(i => {
                    i.classList.remove('active');
                    const content = i.querySelector('.services__item__content');
                    if (content) {
                        content.style.transition = 'opacity 0s ease';
                        content.style.opacity = 0;
                    }
                });

                items.forEach(i => i.classList.remove('active'));
                item.classList.add('active');

                const content = item.querySelector('.services__item__content');
                if (content) {
                    item.addEventListener('transitionend', function handler(e) {
                        if (e.propertyName === 'height') {
                            content.style.transition = 'opacity 0.5s ease';
                            content.style.opacity = 1;
                            item.removeEventListener('transitionend', handler);
                        }
                    });
                }
            });
        });
    }

    if (window.innerWidth > 768) {
        handleHoverEvents();
    } else {
        handleMobileEvents();
    }

    window.addEventListener('resize', () => {
        if (window.innerWidth > 768) {
            handleHoverEvents();
        } else {
            handleMobileEvents();
        }
    });



});


$('.reviews__slider').slick({
    vertical: true,
    verticalSwiping: true,
    slidesToShow: 2,
    prevArrow: $('.reviews__slider__prev'),
    nextArrow: $('.reviews__slider__next'),
    variableHeight: false,
    dots: true,
    appendDots: $('.reviews__slider-navigation__pagination'),
    responsive: [
        {
            breakpoint: 768,
            settings: {
                vertical: false,
                verticalSwiping: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                variableWidth: true,
                adaptiveHeight: false
            }
        }
    ]
});