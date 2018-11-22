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
    for (var i in a) {
        $('.quicklinks-navigation').find('a').has('span.ql-item-txt[data-location-id="' + a[i] + '"]').addClass('is-active')
    }

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
          console.error(e);
        }
      } else {
        $quickLinksList.css('justify-content', 'center');
      }
    }
  }

  /** Cookie for screen lancher **/
  function createCookie(name,value,days) {
    if (days) {
      var date = new Date();
      date.setTime(date.getTime()+(days*24*60*60*1000));
      var expires = "; expires="+date.toGMTString();
    }
    else var expires = "";
    document.cookie = name+"="+value+expires+"; path=/";
  }

  function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
  }

  function eraseCookie(name) {
    createCookie(name,"",-1);
  }

  /** Set cookie **/
  var screenLauncher = document.getElementById('screen_launcher');
  screenLauncher.onclick = createCookie('screen_launcher_cookie','screen_launcher_cookie',7);
  var screenLauncherAction = readCookie('screen_launcher_cookie')
  if (screenLauncherAction) {
    screenLauncher.style.display = 'none';
  }

});
