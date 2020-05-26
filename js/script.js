console.log('my js conected');

$(document).ready(function(){
    $('.carusel__inner').slick({
        speed:1200,
        //adaptiveHeight:true,
        autoplay:true,
        autoplaySpeed:2000,
        prevArrow:' <button type="button" class="slick-prev"> <img src="./img/carusel/arrow_l.svg" alt="prew"></button>',
        nextArrow:' <button type="button" class="slick-next"> <img src="./img/carusel/arrow_r.svg" alt="prew"></button>',
        responsive:[
            {
                breakpoint: 992,
                settings: {
                  arrows:false,
                  dots: true
                }
              }
        ]

    });
    
});
