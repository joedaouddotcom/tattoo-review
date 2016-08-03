var express = require('express');
var bodyParser = require('body-parser');
var app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');

// SHOPS SAMPLE DATA
var shops = [
  {name: "ABC Tattoo Shop", image: "http://lasvegas.informermg.com/files/2012/03/Sticks-and-Stones-Three.jpg"},
  {name: "DEF Tattoo Shop", image: "http://statics.192.com/estreet/original/large/2253/22531634.jpg"},
  {name: "GHI Tattoo Shop", image: "https://lh5.googleusercontent.com/-yyMgRd5FYAU/TYk8QSSGpcI/AAAAAAAAFMg/Yu2AE0vDO7E/s400/Tattoo+Shop+in+BoonLay.jpg"}
]

// ARTISTS SAMPLE DATA
var artists = [
  {name: "Kat Von D", image: "http://careersamosa.com/wp-content/uploads/2014/08/TattooArtiste-Picture.jpg"},
  {name: "Don Ed Hardy", image: "http://www.tattooartist.co.in/images/10/tattoo%20artist%20Dev%20a.jpg"},
  {name: "Sailor Jerry", image: "http://aceshightattooshop.com/wp-content/uploads/2013/05/joe-400x300.jpg"},
  {name: "Kat Von D", image: "http://careersamosa.com/wp-content/uploads/2014/08/TattooArtiste-Picture.jpg"},
  {name: "Don Ed Hardy", image: "http://www.tattooartist.co.in/images/10/tattoo%20artist%20Dev%20a.jpg"},
  {name: "Sailor Jerry", image: "http://aceshightattooshop.com/wp-content/uploads/2013/05/joe-400x300.jpg"},
  {name: "Kat Von D", image: "http://careersamosa.com/wp-content/uploads/2014/08/TattooArtiste-Picture.jpg"},
  {name: "Don Ed Hardy", image: "http://www.tattooartist.co.in/images/10/tattoo%20artist%20Dev%20a.jpg"}
]

app.get('/', function(req, res){
  res.render('landing');
});

// GET ROUTE FOR ARTISTS PAGE
app.get('/artists', function(req, res){
    res.render('artists', {artists:artists});
});

// GET ROUTE FOR SHOPS PAGE
app.get('/shops', function(req, res){
      res.render('shops', {shops:shops});
});

// POST ROUTE FOR ARTISTS PAGE
app.post('/artists', function(req, res){
// get data from form and add to artists array
  var artistName = req.body.name;
  var artistImage = req.body.image;
  var newArtist = {name: artistName, image: artistImage};
  artists.push(newArtist);

// redirect back to artists page
  res.redirect('/artists');
});

// POST ROUTE FOR SHOPS PAGE
app.post('/shops', function(req, res){
// get data from form and add to shops array
  var shopName = req.body.name;
  var shopImage = req.body.image;
  var newShop = {name: shopName, image: shopImage};
  shops.push(newShop);

// redirect back to shops page
  res.redirect('/shops');
});

app.get('/artists/new', function(req, res){
  res.render('newartist.ejs');
});

app.get('/shops/new', function(req, res){
  res.render('newshop.ejs');
});

app.listen(5150, function(){
  console.log("The Tattoo Review App Service is Started!");
});
