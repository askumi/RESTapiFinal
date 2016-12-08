var express = require('express');
var router = express.Router();
var Game = require('../models/game');

//GET - Reading this Resource
router.get('/', function(req, res, next){
	Game.find(function(err, games){
		if(err){
			res.send(404);
		} else{
			res.json(games);
		}
	});
});
router.get('/:_id', function(req, res, next){
	var _id = req.params._id;
	
	Game.findById(_id, function(err, game){
		if(err){
			res.send(404);
		} else {
			res.json(game);
		}
	});
});

//POST - Creating this Resource
router.post('/', function(req, res, next){
	Game.create({
		title: req.body.title,
		publisher: req.body.publisher,
		genre: req.body.genre,
		year: req.body.year
	}, function(err, game){
		if(err){
			res.send(400);
		} else{
			res.send(201);
		}
	});
});
//PUT - Updating this Resource
router.put('/:_id', function(req, res, next){
	var _id = req.params._id;
	
	var game = new Game({
		_id: _id,
		title: req.body.title,
		publisher: req.body.publisher,
		genre: req.body.genre,
		year: req.body.year
	});
	
	Game.update({_id: _id}, game, function(err){
		if(err){
			res.send(err.message);
		} else{
			res.send(200);
		}
	});
});
//DELETE - Deleting this Resource
router.delete('/:_id', function(req, res, next){
	var _id = req.params._id;
	
	Game.remove({_id: _id}, function(err){
		if(err){
			res.send(404);
		} else{
			res.send(200);
		}
	});
});

module.exports = router;







