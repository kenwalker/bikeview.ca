var ensureTwitterLoaded = null;

function startUp() {
  twitterIDs().forEach(function(tweeterId, index) {
    var node = document.createElement("article");
    node.id = "tweet" + index;
    document.getElementById("tweetlist").appendChild(node);
    twttr.widgets.createTweet(
      tweeterId,
      document.getElementById("tweet" + index),
      {
        theme: 'light',
        conversation: 'none'
      }
    );
  });
}

function twitterAvailable() {
  if (twttr) {
    clearInterval(ensureTwitterLoaded);
    startUp();
  }
}

$(document).ready(function() {
  ensureTwitterLoaded = setInterval(twitterAvailable, 10);
});