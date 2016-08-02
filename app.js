var express = require('express');
var app = express();
var

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('landing');
});

app.get('/artists', function(req, res){
  var artists = [
    {name: "Kat Von D", image: "http://media.todaybirthdays.com/thumb_x256x256/upload/1982/03/08/kat-von-d.jpg"}
    {name: "Don Ed Hardy", image: "http://images4.fanpop.com/image/photos/18500000/christian-audigier-and-ed-hardy-christian-audigier-and-ed-hardy-18588424-380-500.jpg"}
    {name: "Sailor Jerry", image: "https://img0.etsystatic.com/015/0/7011699/il_570xN.467689996_o7hj.jpg"}
  ]
});

app.get('/shops', function(req, res){

});

app.listen(5150, function(){
  console.log("The Tattoo Review App Service is Started!");
});
