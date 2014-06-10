// You can write custom JS here and it will automatically be inserted into your site!
console.log("hello, world!")

$(document).ready(function(){
  $('head').append("<meta name='viewport' content='width=device-width, initial-scale=1.0'>");
  $(".span12").append($(".project") .get().reverse());

  $('.first-victory .item img').magnificPopup({
    gallery: {
      enabled: true
    },
    type:'image',
  });

});

$("img").lazyload();

