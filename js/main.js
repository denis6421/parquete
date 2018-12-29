$(document).ready(function(){


  $('.gallery1').on('click', function() {
      $('html, body').animate({scrollTop: $(this.hash).offset().top -50 }, 500);
      return false;
  });
  $('.contact').on('click', function() {
      $("html, body").animate({ scrollTop: $(document).height() }, 1000);
      return false;
  });
  $('.about').on('click', function() {
      $('html, body').animate({scrollTop: $(this.hash).offset().top -500 }, 500);
      return false;
  });


     $('.head_slider').slick({
       dots:true,
       fade: true,
 cssEase: 'linear',
 autoplay: true,
 autoplaySpeed: 4000
     });
     $('.sliders').slick({
       dots:true
     });

     $('.slider_2').slick({
       dots:true
     });

     $('.slider_3').slick({
       dots:true
     });





});

$('#nav-icon1,#nav-icon2,#nav-icon3,#nav-icon4').click(function(){
  $(this).toggleClass('open');
  $('.mobile_menu').toggleClass('opend_menu');
});
$('.mobile_menu ul li a').click(function(){
  $('#nav-icon3').removeClass('open');
  $('.mobile_menu').removeClass('opend_menu');
})
$('.mobile_menu ul li').click(function(){
  $('#nav-icon3').removeClass('open');
  $('.mobile_menu').removeClass('opend_menu');
})
$('.desktop_slider_btn').click(function(){
  $('.hidden_sliders').show()
})
$('.mobile_slider_btn').click(function(){
  $('.hidden_sliders').show()
})
$('#test_1').click(function(){
  $('.slider_1').addClass('show_slider')
  $('.slider_1').slick('setPosition');
})
$('#test_2').click(function(){
  $('.slider_2').addClass('show_slider')
  $('.slider_2').slick('setPosition');
})
$('#test_3').click(function(){
  $('.slider_3').addClass('show_slider')
  $('.slider_3').slick('setPosition');
})
$('#test_4').click(function(){
  $('.slider_4').addClass('show_slider')
  $('.slider_4').slick('setPosition');
})
$('#test_5').click(function(){
  $('.slider_5').addClass('show_slider')
  $('.slider_5').slick('setPosition');
})
$('#test_6').click(function(){
  $('.slider_6').addClass('show_slider')
  $('.slider_6').slick('setPosition');
})

$(document).mouseup(function(e){
  const sliders = $('.sliders')

  if (!sliders.is(e.target) && sliders.has(e.target).length === 0 && sliders.hasClass('show_slider'))
      {
          sliders.removeClass('show_slider');
          $('.hidden_sliders').hide()
      }
})
