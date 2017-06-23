var express = require ('express');
var router = express.Router();
var bodyParser = require ('body-parser');
var mongo = require ('../mongo');
var bcrypt = require ('bcrypt');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.post('/', function(req, res) {
  console.log('shelfObjects url hit', req.body);
  var newUser = req.body;
  // console.log( 'saving user:', newUser );
  // save newUser to db
  // exporting model from mongo

  mongo( newUser ).save();
  res.sendStatus( 201 );
});

module.exports = router;
