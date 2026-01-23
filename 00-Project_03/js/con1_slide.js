// create pager list items
var sliderImage = $('.cont1_slide1 > div');


// set up vars
var sliderImages       = '.cont1_slide1',
    sliderImagesItem   = '.cont1_slide1 > div',
    sliderControlNext  = '.arrow1_1_center .next',
    sliderControlPrev  = '.arrow1_1_center .prev',
    sliderSpeed        = 5000,
    lastElem           = $(sliderPagers).length-1,
    sliderTarget;

// add css heigt to slider images list
function checkImageHeight() {
    var sliderHeight = $('.cont1_slide1 > div').height(); 
    $(sliderImages).css('height', sliderHeight+'px');
};

sliderImage.on('load', function() {
    checkImageHeight();
    $(sliderImages).addClass('loaded')
});
$(window).resize(function(){
    checkImageHeight();
});

// set up first slide
$(sliderPagers).first().addClass('active');
$(sliderImagesItem).hide().first().show();

// transition function
function sliderResponse(sliderTarget) {
    $(sliderImagesItem).fadeOut(300).eq(sliderTarget).fadeIn(300);
    $(sliderPagers).removeClass('active').eq(sliderTarget).addClass('active');
}

// pager controls
$(sliderPagers).on('click', function() {
    if ( !$(this).hasClass('active') ) {
        sliderTarget = $(this).index();
        sliderResponse(sliderTarget);
        resetTiming();
    }
});

// next/prev controls
$(sliderControlNext).on('click', function() {
    sliderTarget = $(sliderPagersActive).index();
    sliderTarget === lastElem ? sliderTarget = 0 : sliderTarget = sliderTarget+1;
    sliderResponse(sliderTarget);
    resetTiming();
});
$(sliderControlPrev).on('click', function() {
    sliderTarget = $(sliderPagersActive).index();
    lastElem = $(sliderPagers).length-1;
    sliderTarget === 0 ? sliderTarget = lastElem : sliderTarget = sliderTarget-1;
    sliderResponse(sliderTarget);
    resetTiming();
});

// slider timing
function sliderTiming() {
    sliderTarget = $(sliderPagersActive).index();
    sliderTarget === lastElem ? sliderTarget = 0 : sliderTarget = sliderTarget+1;
    sliderResponse(sliderTarget);
}

// slider autoplay
var timingRun = setInterval(function() {
    sliderTiming();
}, sliderSpeed);

function resetTiming() {
    clearInterval(timingRun);
    timingRun = setInterval(function() {
      sliderTiming();
    }, sliderSpeed);
}
