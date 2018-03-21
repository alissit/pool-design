import $ from "jquery";



$('.gal__img').click( function() {
  
  var image = $(this).css('background');
  $('.gal__popup').css('background', image);
  var imageSrc = document
                    .getElementById('gal__popup')
                     .style
                      .backgroundImage
                       .replace(/url\((['"])?(.*?)\1\)/gi, '$2')
                        .split(',')[0];
  var image = new Image();
  image.src = imageSrc;
  var width = image.width,
      height = image.height;
  $('.gal__popup').css('width', width);
  $('.gal__popup').css('height', height);
  
  $('.gal__gallery').css('display', 'none');
  $('.gal__popupborder').css('display', 'block');
});

$('.gal__popup').click( function() {
  $('.gal__gallery').css('display', 'inline-block');
  $('.gal__popupborder').css('display', 'none');
});


  