var express = require( 'express' );
var path = require('path');
var router = express.Router();
var bodyParser = require ('body-parser');

// uses
router.get( '/', function(req, res){
  console.log('base url head');
  res.sendFile(path.resolve('public/views/index.html'))
});

router.post ('/', function (req, res){
  console.log('base post hit:', req.body);
  res.sendStatus(200);
}); // end post

module.exports = router;
