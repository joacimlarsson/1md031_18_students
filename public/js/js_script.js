/*function start() {
  var myButton = document.getElementById('skickain');

  myButton.onclick = function() {
    console.log("Button clicked!");
  }
}
window.onload=start; */

function valueArray() {
  var name = document.getElementById('fullname').value
  var email = document.getElementById('email').value
  /*  var gata = document.getElementById('gata').value
    var ort = document.getElementById('ort').value
    var postnr = document.getElementById('postnummer').value */
  var betalning = document.getElementById('betalningsmetod').value
  var kon = document.querySelector('input[name="gender"]:checked').value



/*  var burgarval = "Beställning: ";




  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      burgarval += "," + checkboxes[i].value;
    }
  }
  if (burgarval) burgarval = burgarval.substring(0, 13) + burgarval.substring(14);*/

  var arr = [name, email, betalning, kon];
  
  return arr;

}

function orderArray() {

  var checkboxes = document.getElementsByName('cb');
  var burgarval2 = [];

  for (var i = 0; i < checkboxes.length; i++) {
    if (checkboxes[i].checked) {
      burgarval2.push(checkboxes[i].value);
    }
  }

  var matarr = burgarval2;

  return matarr;
}
