var express = require ('express');
var router = express.Router();
var bodyParser = require ('body-parser');
var mongo = require ('../mongo');
var mongoose  = require('mongoose');

mongoose.connect( 'localhost:27017/shelf' );
var shelfSchema = new mongoose.Schema({
  description: String,
  imageUrl: String,
  username: String
});
var shelfModel = mongoose.model( 'shelfModel', shelfSchema );

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.get( '/', function( req, res ){
  console.log( 'shelfObjects get call' );
  shelfModel.find().then( function( results ){
    res.send( results );
  });
}); //end shelf get call

router.post('/', function(req, res) {
  console.log('shelfObjects url hit', req.body);
  var newShelf = req.body;
  // console.log( 'saving user:', newShelf );
  // save newShelf to db
  // exporting model from mongo
  shelfModel( newShelf ).save();
  res.sendStatus( 201 );
});

module.exports = router;
