var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
  res.render('landing');
});

// GET ROUTE FOR ARTISTS PAGE
app.get('/artists', function(req, res){
  var artists = [
    {name: "Kat Von D", image: "http://media.todaybirthdays.com/thumb_x256x256/upload/1982/03/08/kat-von-d.jpg"},
    {name: "Don Ed Hardy", image: "http://images4.fanpop.com/image/photos/18500000/christian-audigier-and-ed-hardy-christian-audigier-and-ed-hardy-18588424-380-500.jpg"},
    {name: "Sailor Jerry", image: "https://img0.etsystatic.com/015/0/7011699/il_570xN.467689996_o7hj.jpg"}
  ]
        res.render('artists', {artists:artists});
});

// GET ROUTE FOR SHOPS PAGE
app.get('/shops', function(req, res){
  var shops = [
    {name: "ABC Tattoo Shop", image: "http://lasvegas.informermg.com/files/2012/03/Sticks-and-Stones-Three.jpg"},
    {name: "DEF Tattoo Shop", image: "http://statics.192.com/estreet/original/large/2253/22531634.jpg"},
    {name: "GHI Tattoo Shop", image: "https://lh5.googleusercontent.com/-yyMgRd5FYAU/TYk8QSSGpcI/AAAAAAAAFMg/Yu2AE0vDO7E/s400/Tattoo+Shop+in+BoonLay.jpg"}
  ]
      res.render('shops', {shops:shops});
});

// POST ROUTE FOR ARTISTS PAGE
app.post('/artists')

// POST ROUTE FOR SHOPS PAGE
app.post('/shops')

app.listen(5150, function(){
  console.log("The Tattoo Review App Service is Started!");
});
