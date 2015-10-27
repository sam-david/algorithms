var pans = ["ABCDS1234Y","ABAB12345Y","avCDS1234Y"];

for (var i = 0; i<pans.length;i++) {
  var regex = /[A-Z][A-Z][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9][A-Z]/
  console.log(regex.test(pans[i]));
}

var strings = input.split("\n")
  strings.shift();
    for (var i = 0; i<strings.length;i++) {
      var regex = /[A-Z][A-Z][A-Z][A-Z][A-Z][0-9][0-9][0-9][0-9][A-Z]/
      if (regex.test(strings[i])) {
        console.log("YES");    
      } else {
        console.log("NO");
      }
    }

// Hackerrank Tweets: Count tweets with hackerrank in them
var tweets = input.split("\n")
tweets.shift();
var count = 0;
var regex = /hackerrank/
  for (var i=0;i<tweets.length;i++) {
    if (regex.test(tweets[i].toLowerCase())) {
      count++;
    }
  }

  console.log(count);