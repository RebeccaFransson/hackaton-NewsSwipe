var i = 5;
//var load = ;

function init(object) {
DisplayArticleStart(object);
  $("#newsBox").jTinder({
    onDislike: function (item) {
      //loadDoc();
      //DisplayArticleStart(object);
      i -= 1;  //alert("It's a dislike");
    },
    onLike: function (item) {
        //alert('Like image ' + (item.index()+1));
        //alert("It's a like");

        DisplayArticle(object[i]);
        console.log(object[i]);
        i -= 1;

    },
    animationRevertSpeed: 200,
    animationSpeed: 400,
    threshold: 1,
    likeSelector: '.glyphicon-ok',
    dislikeSelector: '.glyphicon-remove'
  });


  document.querySelector(".glyphicon-remove").addEventListener("click", function(){
    //console.log(Plugin)
    $("#newsBox").jTinder('dislike');

  });

  document.querySelector(".glyphicon-ok").addEventListener("click", function(){
    //console.log(Plugin)
    $("#newsBox").jTinder('like');

});


}

window.onload = function() {

  init(loadDoc());

// =======
  //init();
// >>>>>>> 53a03895832d897fec5d065a83365380b1024b25
};

// function Article(object) {
//   return object[
//   "headline" = object.headline,
//   "image" = object.image,
//   "lead" = object.lead];
//   //console.log(this.lead);
// }

//var firstArticle = new Article()


function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.open("GET", "https://api.overviewnews.com/v1/search.json?key=DsUKxG2iiZV9BRnspdDbdmAiaixvCvHstsQZ&q=media&fulltext=true", false);
  xhttp.send();

   return JSON.parse(xhttp.responseText)["result"];
}

function DisplayArticleStart(Article) {
  console.log(Article);
  document.querySelector('#pic1').setAttribute("src", Article[0].image);
  document.querySelector('#texten1').innerHTML = Article[0].headline;
  document.querySelector('#pic2').setAttribute("src", Article[1].image);
  document.querySelector('#texten2').innerHTML = Article[1].headline;
  document.querySelector('#pic3').setAttribute("src", Article[2].image);
  document.querySelector('#texten3').innerHTML = Article[2].headline;
  document.querySelector('#pic4').setAttribute("src", Article[3].image);
  document.querySelector('#texten4').innerHTML = Article[3].headline;
  document.querySelector('#pic5').setAttribute("src", Article[4].image);
  document.querySelector('#texten5').innerHTML = Article[4].headline;
  document.querySelector('#pic6').setAttribute("src", Article[5].image);
  document.querySelector('#texten6').innerHTML = Article[5].headline;
  // document.querySelector('#pic3').setAttribute("src", Article.image);
  // document.querySelector('#texten3').innerHTML = Article.headline;
  // document.querySelector('#pic3').setAttribute("src", Article.image);
  // document.querySelector('#texten3').innerHTML = Article.headline;
}
function DisplayArticle(Article) {
  console.log(Article);
  var articleDiv = document.createElement("div");
  var articleHeader = document.createElement("h1");
  var articleText = document.createElement("p");
  var articleImage = document.createElement("img");
  var articleCross = document.createElement("input");
    var stringwithwords = "Fromage paneer blue castello. Say cheese pecorino goat fondue cheddar red leicester queso brie. Jarlsberg caerphilly stilton dolcelatte say cheese pecorino port-salut monterey jack. Babybel st. agur blue cheese cheese triangles. Cheesy grin dolcelatte bocconcini. Jarlsberg macaroni cheese pecorino melted cheese rubber cheese cauliflower cheese dolcelatte cheddar. Croque monsieur melted cheese stinking bishop red leicester emmental smelly cheese edam squirty cheese. Macaroni cheese mascarpone ricotta cheese and biscuits cottage cheese say cheese the big cheese cottage cheese. Red leicester cheese triangles stinking bishop.    Cheesy grin dolcelatte bocconcini. Jarlsberg macaroni cheese pecorino melted cheese rubber cheese cauliflower cheese dolcelatte cheddar. Croque monsieur melted cheese stinking bishop red leicester emmental smelly cheese edam squirty cheese. Macaroni cheese mascarpone ricotta cheese and biscuits cottage cheese say cheese the big cheese cottage cheese. Red leicester cheese triangles stinking bishop."

  articleCross.setAttribute("id","articlecross");
  articleDiv.setAttribute("id", "articlediv");
  articleHeader.setAttribute("id", "articleheader");
  articleText.setAttribute("id", "articletext");
  articleImage.setAttribute("id", "articleimage");

  document.body.appendChild(articleDiv);
  document.getElementById("articlediv").appendChild(articleCross);
  document.getElementById("articlediv").appendChild(articleHeader);
  document.getElementById("articlediv").appendChild(articleImage);
  document.getElementById("articlediv").appendChild(articleText);


  document.getElementById("articleheader").innerHTML = Article.headline;
  document.getElementById("articletext").innerHTML = Article.text;
  document.getElementById("articleimage").setAttribute("src", Article.image);


      articleCross.type = "button";
      articleCross.className="btn btn-danger";
      articleCross.value="Stäng"
      //articleCross.className+="glyphicon glyphicon-remove";


  articleCross.addEventListener("click", function(){
    console.log("Väck med den då");
    $("#articlediv").remove();

});
  //document.getElementById("articletext").innerHTML = "works";
  //document.getElementById("Article").className = "show";
  //document.getElementByTagName("body").className = "showFullPage";

  }
