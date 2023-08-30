(function() {
  jQuery(function() {
    $("a[rel=popover]").popover();
    $(".tooltip").tooltip();
    $("a[rel=tooltip]").tooltip();
    $(".alert").alert();
    $('.index-popover').popover({
      html: true,
      placement: 'bottom',
      content: $('.index-popover-content').html(),
      template: '<div class="popover index-content"><div class="arrow"></div><div class="popover-content"></div></div>'
    });
    $('.index-popover').click(function() {
      return false;
    });
    $(".to_top_panel").hide();
    return $(function() {
      $(window).scroll(function() {
        if ($(this).scrollTop() > 900) {
          return $(".to_top_panel").fadeIn(1000);
        }
      });
      return $(".to_top_panel").click(function() {
        return $('body').animate({
          scrollTop: 0
        }, '1000');
      });
    });
  });

}).call(this);
