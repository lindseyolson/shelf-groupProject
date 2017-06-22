var express = require( 'express' );
var path = require('path');
var router = express.Router();

// uses
router.get( '/', function(req, res){
  console.log('base url head');
  res.sendFile(path.resolve('public/views/index.html'))
});

module.exports = router;
