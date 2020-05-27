console.log('my js conected');

$(document).ready(function(){

    // это карусель
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

    // это табы
    $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
      $(this)
        .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
        .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
    });



    function toggleSlide(classItem){
       
         $(classItem).each(function(i) {
          $(this).on('click', function(e){
            e.preventDefault();
            $('.catalog-item__chg-content').eq(i).toggleClass('catalog-item__chg-content_active');
    
            $('.catalog-item__chg-list').eq(i).toggleClass('catalog-item__chg-list_active');
    
          })
      })

    };

    toggleSlide('.catalog-item__back');
    toggleSlide('.catalog-item__link');
   
    
});
