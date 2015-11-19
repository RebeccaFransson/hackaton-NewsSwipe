function init() {
  $("#newsBox").jTinder({
    onDislike: function (item) {
        alert("It's a dislike");
    },
    onLike: function (item) {
        //alert('Like image ' + (item.index()+1));
        //alert("It's a like");
        DisplayArticle(1);
    },
    animationRevertSpeed: 200,
    animationSpeed: 400,
    threshold: 1,
    likeSelector: '.glyphicon-ok',
    dislikeSelector: '.glyphicon-remove'
  });
}

window.onload = function() {
  init();

};

function DisplayArticle(ArticleID) {
  var articleDiv = document.createElement("div");
  var articleHeader = document.createElement("h1");
  var articleText = document.createElement("p");
  var articleImage = document.createElement("img");
    var stringwithwords = "Fromage paneer blue castello. Say cheese pecorino goat fondue cheddar red leicester queso brie. Jarlsberg caerphilly stilton dolcelatte say cheese pecorino port-salut monterey jack. Babybel st. agur blue cheese cheese triangles. Cheesy grin dolcelatte bocconcini. Jarlsberg macaroni cheese pecorino melted cheese rubber cheese cauliflower cheese dolcelatte cheddar. Croque monsieur melted cheese stinking bishop red leicester emmental smelly cheese edam squirty cheese. Macaroni cheese mascarpone ricotta cheese and biscuits cottage cheese say cheese the big cheese cottage cheese. Red leicester cheese triangles stinking bishop.    Cheesy grin dolcelatte bocconcini. Jarlsberg macaroni cheese pecorino melted cheese rubber cheese cauliflower cheese dolcelatte cheddar. Croque monsieur melted cheese stinking bishop red leicester emmental smelly cheese edam squirty cheese. Macaroni cheese mascarpone ricotta cheese and biscuits cottage cheese say cheese the big cheese cottage cheese. Red leicester cheese triangles stinking bishop."

  articleDiv.setAttribute("id", "articlediv");
  articleHeader.setAttribute("id", "articleheader");
  articleText.setAttribute("id", "articletext");
  articleImage.setAttribute("id", "articleimage");


  document.body.appendChild(articleDiv);
  document.getElementById("articlediv").appendChild(articleHeader);
  document.getElementById("articlediv").appendChild(articleImage);
  document.getElementById("articlediv").appendChild(articleText);

  document.getElementById("articleheader").innerHTML = "works";
  document.getElementById("articletext").innerHTML = stringwithwords;
  document.getElementById("articleimage").setAttribute("href", "pics/3.jpg");
  //document.getElementById("articletext").innerHTML = "works";
  //document.getElementById("Article").className = "show";
  //document.getElementByTagName("body").className = "showFullPage";

  }
