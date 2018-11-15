$(document).ready(function(){
  /** Slick init **/
  $('.videos').slick({
    dots: true,
    arrows: true
  });

  $('.front .la-column').slick({
    arrows: true,
    infinite: false,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 320,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /** Height zone1 + position
  $('.article-intro').css('top', $('.at-main-title').position().top + $('.at-main-title').height() + 20 + 'px');

  var headerHeight = $('.article-intro').height() + $('.at-main-title').height() + $('.quicklinks-navigation').height() + $('.breadcrumb-nav').height() + 60;

  if (headerHeight > $('#zone1').height()) {
    $('#zone1, .article-title img').css('height', headerHeight);
  }

  $('.article-title').css('top', $('.at-main-title').position().top + $('.at-main-title').height() + 20 + 'px');

  var headerHeight = $('.article-title').height() + $('.at-main-title').height() + $('.quicklinks-navigation').height() + $('.breadcrumb-nav').height() + 60;

  if (headerHeight > $('#zone1').height()) {
    $('#zone1, .article-title img').css('height', headerHeight);
  }

  /** Scroll sub nav to active link
  $('.ql-list.unstyled').animate({scrollLeft: parseInt($('.ql-item-link.is-active').position().left)}, 0);**/
});
