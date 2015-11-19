function init() {
  $("#newsBox").jTinder({
    onDislike: function (item) {
        alert("It's a dislike");
    },
    onLike: function (item) {
        //alert('Like image ' + (item.index()+1));
        alert("It's a like");
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
  //document.getElementById("Article").className = "show";
  //document.getElementByTagName("body").className = "showFullPage";

  }
