function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://api.overviewnews.com/v1/search.json?key=DsUKxG2iiZV9BRnspdDbdmAiaixvCvHstsQZ&q=media", false);
  xhttp.send();
  console.log(xhttp.responseText);
}

window.onload = function() {
  loadDoc();

};
