$(function() {

  

  $('body').on('submit', 'form[action="/calculate/"]', function () {
    
    const r100 = $('#book_r100').val(),
      r500 = $('#book_r500').val(),
      r1000 = $('#book_r1000').val(),
      m100 = $('#book_m100').val(),
      m500 = $('#book_m500').val(),
      m1000 = $('#book_m1000').val(),
      p100 = $('#book_p100').val(),
      p500 = $('#book_p500').val(),
      p1000 = $('#book_p1000').val(),
      h100 = $('#book_h100').val(),
      h500 = $('#book_h500').val(),
      h1000 = $('#book_h1000').val(),
      a100 = $('#book_a100').val(),
      a500 = $('#book_a500').val(),
      a1000 = $('#book_a1000').val();

    const sum = r100 * 100 + r500 * 500 + r1000 * 1000 + m100 * 100 + m500 * 500 + m1000 * 1000 + p100 * 100 + p500 * 500 + p1000 * 1000 + h100 * 100 + h500 * 500 + h1000 * 1000 + a100 * 100 + a500 * 500 + a1000 * 1000;

    $('#result').html('');
    $('#result').html(sum + ' очков');

    return false;
  });
  // var m
  // var p
  // var h
  // var a

});