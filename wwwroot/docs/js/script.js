
$(window).resize(function () {
  exampleJsFunctions.resizePage();
});

exampleJsFunctions.resizePage()



window.exampleJsFunctions = {
  sidebarClick: function() {
    var sidebar = $('body').hasClass('hide-sidebar');
    var pagesmall = $('body').hasClass('page-small');
  
    if (pagesmall) {
      $('body').removeClass('hide-sidebar');
      $('body').removeClass('page-small');
    }
    else {
      if (sidebar) {
        $('body').removeClass('hide-sidebar');
        $('body').removeClass('page-small');
      }
      else {
        $('body').addClass('hide-sidebar');
        $('body').removeClass('page-small');
      }
    }
    console.log(sidebar)
  },
  resizePage :function() {
    var width = $(window).width();
    console.log(width);
  
    if (width < 767) {
      $('body').addClass('page-small');
      $('body').removeClass('hide-sidebar');
    }
    else {
      $('body').removeClass('page-small');
      $('body').removeClass('hide-sidebar');
    }
  }
};