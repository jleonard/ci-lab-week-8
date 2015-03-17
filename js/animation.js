(function(){

  $('#button').on('click', function(event){
    $(this).parent().toggleClass('active');
  });

})();