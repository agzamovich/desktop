$(document).ready(function(){
  
    $('#midground').css({backgroundPosition: '0px 0px'});
    $('#foreground').css({backgroundPosition: '0px 0px'});
    $('#background').css({backgroundPosition: '0px 0px'});
  
      $('#midground').animate({
          backgroundPosition:"(-10000px -2000px)"
      }, 240000, 'linear');
      
      $('#foreground').animate({
          backgroundPosition:"(-10000px -2000px)"
      }, 120000, 'linear');
      
      $('#background').animate({
          backgroundPosition:"(-10000px -2000px)"
      }, 480000, 'linear');


      //video ends and scrolls automatically to about me
    window.addEventListener('load', function() {
    var video = document.getElementById('about');
    var element = document.getElementById('aboutme');
    video.onended = function() {
    //the video ended
    var scrollDistance = document.body.scrollTop;
    var elemRect = element.getBoundingClientRect();
    var elemOffsetViewportDistance = elemRect.top;
    var totalOffset = scrollDistance + elemOffsetViewportDistance;
    window.scrollTo(0, totalOffset);
  };
}); //End of all code for video


    //image scroll below for travel

    $('.right').click(function() {
    alert('Thanks for visiting Nevada!');
});

$('.right').click(function() {
    $('.img').slideUp(3000);
    $('.p').slideUp(3000);
});//End of travel page

 $('.nebraska').click(function() {
    alert('Thanks for visiting Nebraska!');
});

$('.nebraska').click(function() {
    $('.neb').slideUp(3000);
    $('.nebr').slideUp(3000);
});//End of travel page

$('.miami').click(function() {
    alert('Thanks for visiting Florida!');
});

$('.miami').click(function() {
    $('.mia').slideUp(3000);
    $('.miam').slideUp(3000);
});//End of travel page

$('.tashkent').click(function() {
    alert('You will love Tashkent!');
});

$('.tashkent').click(function() {
    $('.tash').slideUp(3000);
    $('.taw').slideUp(3000);
});//End of travel page

});