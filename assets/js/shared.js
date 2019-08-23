function startUp() {
  twitterIDs().forEach(function(tweeterId, index) {
    var node = document.createElement("article");
    console.log(index);
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


$(document).ready(function() {
  startUp();
});