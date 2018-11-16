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
  if (typeof $('body').data('locationPath') != 'undefined') {
    var t = String($('body').data('locationPath'))
      , a = t.split(',').slice(1);
    /*for (var i in a) {
        $('.main-navigation').find('a').has('span.mn-link-text[data-location-id="' + a[i] + '"]').addClass('is-active');
        $('.quicklinks-navigation').find('a').has('span.ql-item-txt[data-location-id="' + a[i] + '"]').addClass('is-active')
    }*/

    var $quickLinksList = $('.quicklinks-navigation .ql-list.unstyled');
    var quickLinksListWidth = 0;

    $('.ql-item', $quickLinksList).each(function() {
      var $self = $(this);
      quickLinksListWidth += parseInt($self.width());
    });

    if ($quickLinksList.length > 0) {
      if (quickLinksListWidth > $(document).width()) {
        try {
          $quickLinksList.animate({scrollLeft: parseInt($('.ql-item-link.is-active').position().left)}, 0);
        }
        catch(e) {
          console.log('error', e);
        }
      } else {
        $quickLinksList.css('justify-content', 'center');
      }
    }
  }

});
