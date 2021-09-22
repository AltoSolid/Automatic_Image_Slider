const responsiveSlider = function() {

    const slider = document.getElementById('slider');
    let sliderWidth = slider.offsetWidth;
    const sliderList = document.getElementById('slideWrap');
    let count = 1;
    const items = sliderList.querySelectorAll('li').length;
    const prev = document.getElementById('prev');
    const next = document.getElementById('next');


    window.addEventListener('resize', function() {
        sliderWidth = slider.offsetWidth;
    });

    const prevSlide = function() {
        if (count > 1) {
            count = count - 2;
            sliderList.style.left = '-' + count * sliderWidth + 'px';
            count++;
        } else if (count = 1) {
            count = items - 1;
            sliderList.style.left = '-' + count * sliderWidth + 'px';
            count++;
        }
    };

    const nextSlide = function() {
        if (count < items) {
            sliderList.style.left = '-' + count * sliderWidth + 'px';
            count++;
        } else if (count = items) {
            sliderList.style.left = '0px';
            count = 1;
        }
    };

    next.addEventListener('click', function() {
        nextSlide();
    });

    prev.addEventListener('click', function() {
        prevSlide();
    });

    setInterval(function() {
        nextSlide();
    }, 5000);
}

window.onload = function() {
    responsiveSlider();
}