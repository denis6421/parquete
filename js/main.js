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


$('.category_select').click(function(){

    $('.hidden_category_box').hide();
    $('#bottom_works_flex').show();
    $(this).hide()
    $('#work_gallery_h1').html('פרוייקטים')
    $('html, body').animate({scrollTop: $('#work_gallery').offset().top -100 }, 3);
    return false;
})


$('.desktop_slider_btn_bottom').click(function(){
  $('.category_select').show()
    $('#bottom_works_flex').hide();
    $('html, body').animate({scrollTop: $('#work_gallery').offset().top -100 }, 3);
    return false;

})
$('.exit_slider_btn').click(function(){
  $('.sliders').removeClass('show_slider');
})

$('.desktop_slider_pergula').click(function(){
  $('.hidden_pergula_box').css('display', 'flex');
  $('#work_gallery_h1').html('פרגולות')
})

$('.desktop_slider_deck').click(function(){
  $('.hidden_deck_box').css('display', 'flex');
  $('#work_gallery_h1').html('דקים')
})


$('.desktop_slider_stairs').click(function(){
  $('.hidden_stairs_box').css('display', 'flex');
  $('#work_gallery_h1').html('מדרגות')
})


$('.desktop_slider_shower').click(function(){
  $('.hidden_shower_box').css('display', 'flex');
  $('#work_gallery_h1').html('אמבטיות')
})

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
$('#stairs_slider_1').click(function(){
  $('.slider_4').addClass('show_slider')
  $('.slider_4').slick('setPosition');
})
$('#deck_slider_3').click(function(){
  $('.slider_5').addClass('show_slider')
  $('.slider_5').slick('setPosition');
})
$('#shower_slider_1').click(function(){
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
