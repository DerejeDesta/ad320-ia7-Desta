var express = require('express');
var router = express.Router();
var jsonColors = require("../colors.json");

router.get("/all", function(req,res,next){
	res.send(jsonColors);
});

function getColor(key,res){
	for(var i =0; i<jsonColors.colors.length; i++){
		if(jsonColors.colors[i].color === key){
			return res.send(jsonColors.colors[i]);
       }
     }
   res.status(404).send('404 - PAGE NOT FOUND');
	}

router.get("/:color", function(req,res,next){
 getColor(req.params.color.toLowerCase(),res);

});


module.exports =router;