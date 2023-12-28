var express = require('express');
var router = express.Router();
var connection  = require('../config.js');
 
 
/* GET home page. */
router.get('/', function(req, res, next) {
      
 connection.query('SELECT * FROM users ORDER BY id desc',function(err,rows)     {
 
        if(err){
         req.flash('error', err); 
         res.render('list',{page_title:"Users - Node.js",data:''});   
        }else{
            
            res.render('list',{page_title:"Users - Node.js",data:rows});
        }
                            
         });
        
    });
 
 
module.exports = router;