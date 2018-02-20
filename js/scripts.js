$(document).ready(function() {
  $("form#choice").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();
    var spice-meter = $("select#spice-meter").val();

      if (gender === 'female' && spice-meter === 'sassy')
      else if (gender === 'female' && spice-meter === 'cool') {
      else if (gender === 'male' && spice-meter === 'cool') {
      else if (gender === 'male' && spice-meter === 'sassy') {

      }

      $("#rate").empty().append(quote);
      $("#quote").show();
    
    }

    event.preventDefault();
  });
});
