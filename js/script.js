(function(){
  var $btn;
  $(document).ready(function(e){
    $btn = $('.circle.button');
    $btn.on('click', function(e){
      $btn.toggleClass('active');
      $(this).parent().toggleClass('active');
    });
  });
})();