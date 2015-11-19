function init() {
  $("#tinderslide").jTinder({
    onDislike: function (item) {
        alert('Dislike image ' + (item.index()+1));
    },
    onLike: function (item) {
        //alert('Like image ' + (item.index()+1));
        DisplayArticle(1);
    },
    animationRevertSpeed: 200,
    animationSpeed: 400,
    threshold: 1,
    likeSelector: '.like',
    dislikeSelector: '.dislike'
  });
}

window.onload = function() {
  init();

};

function DisplayArticle(ArticleID) {
  document.getElementById("Article").className = "show";

  }
