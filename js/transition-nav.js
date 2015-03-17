(function(){
  var $body;

  $(document).ready(function(e){
    $body = $('body');
    $(window).scroll(function(){
      if($(this).scrollTop() > 100){
        $body.addClass('scroll');
      }else{
        $body.removeClass('scroll');
      }
    });
  });
})();