$(document).ready(function(){
  /** Slick init **/
  $('.videos').slick({
    dots: true,
    arrows: true
  });

  $('.front .la-column').slick({
    arrows: true,
    infinite: false,
    slidesToShow: 2,
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  /** Height zone1 + position **/
  var $articleIntro = $('.article-intro');
  var $mainTitle = $('.at-main-title');
  if ($articleIntro.length > 0 && $mainTitle.length > 0) {
    $articleIntro.css('top', $mainTitle.position().top + $mainTitle.height() + 20 + 'px');
    var headerHeight = $articleIntro.height() + $mainTitle.height() + $('.quicklinks-navigation').height() + $('.breadcrumb-nav').height() + 60;
    if (headerHeight > $('#zone1').height()) {
      $('#zone1, .article-title img').css('height', headerHeight);
    }
  }

  var $articleTitle = $('.article-title');
  if ($articleTitle.length > 0 && $mainTitle.length > 0) {
    $articleTitle.css('top', $mainTitle.position().top + $mainTitle.height() + 20 + 'px');
    var headerHeight = $articleTitle.height() + $mainTitle.height() + $('.quicklinks-navigation').height() + $('.breadcrumb-nav').height() + 60;
    if (headerHeight > $('#zone1').height()) {
      $('#zone1, .article-title img').css('height', headerHeight);
    }
  }

  /** Scroll sub nav to active link **/
  var $quickLinksList = $('.ql-list.unstyled');
  if ($quickLinksList.length > 0) {
    if ($quickLinksList.width() > $(document).width()) {
      $quickLinksList.animate({scrollLeft: parseInt($('.ql-item-link.is-active').position().left)}, 0);
    } else {
      $quickLinksList.css('justify-content', 'center');
    }
  }
});
