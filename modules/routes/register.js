var express = require ('express');
var router = express.Router();
var bodyParser = require ('body-parser');
var mongo = require ('../mongo');
var bcrypt = require ('bcrypt');

router.use(bodyParser.urlencoded({extended:true}));
router.use(bodyParser.json());

router.post('/', function( req, res ){
  console.log( 'in register post:', req.body );
  res.sendStatus( 201 );
});



module.exports = router;
