var http=require('http');
var express = require('express');
var fs = require("fs");
var rss = require('./lib/rss');

var app = express();

var rssFeeds = ["http://rss.cnn.com/rss/cnn_topstories.rss",
                "http://feeds.feedburner.com/TechCrunchIT",
                "http://www.rssweather.com/zipcode/46250/rss.php"];


app.get('/:id', function (req, res) {
    // get id of feed
    console.log(req.params.id);

    rss.read(rssFeeds[req.params.id], function(result){
          //console.log(result);  // debug only
          res.send(result);
    });

})

var server = app.listen(3000, function () {

  var host = server.address().address
  var port = server.address().port

  app.use('/', express.static(__dirname + '/views'));

  console.log("Example app listening at http://%s:%s", host, port)

})
