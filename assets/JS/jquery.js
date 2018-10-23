$(function(){
  $('#tenpixel').click(function(){
    var haut = $('#rectangle').height();
    var initialColor = $('#rectangle').css('backgroundColor');
    if(haut < 100){
      $('#rectangle').css('height', '+=10');
    } else {
      $('#rectangle').height(10);
    }
  });
  $('#green').click(function(){
    $('#rectangle').css('backgroundColor', 'green');
  });
  $('#initial').click(function(){
    $('#rectangle').css('backgroundColor', initialColor);
  });
  $('#hide').click(function(){
    $('#rectangle').hide();
  });
  $('#show').click(function(){
    $('#rectangle').show();
  });
});
