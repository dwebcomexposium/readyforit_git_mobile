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
  var $articleTitle = $('.article-title');
  if ($articleIntro.length > 0 && $mainTitle.length > 0) {
    $articleIntro.css('top', $mainTitle.position().top + $mainTitle.height() + 20 + 'px');
    var headerHeight = $articleIntro.height() + $mainTitle.height() + $('.quicklinks-navigation').height() + $('.breadcrumb-nav .inside').height() + 60;
    if (headerHeight > $('#zone1').height()) {
      $('#zone1, .article-title img').css('height', headerHeight);
    }
  } else if ($articleTitle.length > 0 && $mainTitle.length > 0) {
    $articleTitle.css('top', $mainTitle.position().top + $mainTitle.height() + 20 + 'px');
    var headerHeight = $articleTitle.height() + $mainTitle.height() + $('.quicklinks-navigation').height() + $('.breadcrumb-nav .inside').height() + 60;
    if (headerHeight > $('#zone1').height()) {
      $('#zone1, .article-title img').css('height', headerHeight);
    }
  }

  /** Scroll sub nav to active link **/
  var $quickLinksList = $('.quicklinks-navigation .ql-list.unstyled');
  var quickLinksListWidth = 0;
  $('.ql-item', $quickLinksList).each(function() {
    var $self = $(this);
    quickLinksListWidth += parseInt($self.width());
  });

  if ($quickLinksList.length > 0) {
    if (quickLinksListWidth > $(document).width()) {
      $quickLinksList.animate({scrollLeft: parseInt($('.ql-item-link.is-active').position.left)}, 0);
    } else {
      $quickLinksList.css('justify-content', 'center');
    }
  }
});
