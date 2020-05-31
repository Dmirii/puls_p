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

    // modal

    $('[data-modal=consultation]').on('click', () => {

      console.log('button pushed')
      $('.overlay, #consultation').fadeIn();

    });


   /*    $('.button_catalog').on('click', () => {

        console.log('button pushed')
        $('.overlay, #order').fadeIn();
  
      }); */

      $('.button_catalog').each( function(i)  {

          $(this).on('click', () => {

            $('#order .modal__descr').text($('.catalog-item__subtitle').eq(i).text());
          
            $('.overlay, #order').fadeIn();
          })

      });


      
      $('.modal__close').on('click', () =>{

        $('.overlay, #consultation, #order, #thanks').fadeOut();

      });

      // validation
      const validSettings ={
        rules:{
          name:"required",
          phone:"required",
          email:{required:true,
                email:true}
        },
        messages: {
          name: "Пожалуйста,укажите имя",
          email: {
            required: "Пожалуйста, укажите почту",
            email: "Формат почты должен быть: name@domain.com"
          },
          phone:"Пожалуйста, укажите номер телефона"
        }
      };

      $('#consultation-form').validate(validSettings);
      $('#consultation form').validate(validSettings);
      $('#order form').validate(validSettings);

      
    // const phone = document.querySelector('#phone');
    // console.log(phone);
    $('input[name=phone]').mask("+7 999 999-99-99");

    // show/hide scrol element
    $(window).scroll( () => {

      if ($(this).scrollTop() > 1600){
        $('.pageup').fadeIn('slow');
      }else{
        $('.pageup').fadeOut('slow');
      }
    });

   // slow scroll
   $("a[href^='#up']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
    });

    $('form').submit( function(event)  {

      event.preventDefault();

       $.ajax({
            type: "POST",
             url:"./mailer/smart.php",
               data: $(this).serialize()
       }).done( () => {

        $(this).find("input").val("");
        $('#consultation , #order').fadeOut();
        $('form').trigger('reset');
        $('#thanks').fadeIn();
       

      });

     return false;

    });

    var wow = new WOW(
      {
        boxClass:     'wow',      // animated element css class (default is wow)
        animateClass: 'animated', // animation css class (default is animated)
        offset:       0,          // distance to the element when triggering the animation (default is 0)
        mobile:       true,       // trigger animations on mobile devices (default is true)
        live:         true,       // act on asynchronously loaded content (default is true)
        callback:     function(box) {
          // the callback is fired every time an animation is started
          // the argument that is passed in is the DOM node being animated
        },
        scrollContainer: null,    // optional scroll container selector, otherwise use window,
        resetAnimation: true,     // reset animation on end (default is true)
      }
    );
    wow.init();



    
    
});
