var express = require('express');
var router = express.Router();
var Game = require('../models/game');

//GET - Reading this Resource
router.get('/', function(req, res, next) {
	Game.find(function(err, games){
		if(err){
			console.log(err);
			res.render('error', {message: 'GET Error', error: err});
		} else {
			res.render('games', {games: games});
		}
	});
});
router.get('/:_id', function(req, res, next){
	var _id = req.params._id;
	Game.findById(_id, function(err, game){
		if(err){
			console.log(err);
			res.render('error', {message: 'GET ID Error', error: err});
		} else {
			res.render('game', {game: game});
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
	}, function(err, games){
		if(err){
			console.log(err)
			res.render('error', {message: 'Post Error', error: err});
		} else {
			res.send('Successfully Added New Game');
		}
	});
});
//PUT - Updating this Resource
router.put('/:_id', function(req, res, next){
	var _id = req.params._id;
	
	var games = new Game({
		_id: _id,
		title: req.body.title,
		publisher: req.body.publisher,
		genre: req.body.genre,
		year: req.body.year
	});
	
	Game.update({_id: _id}, games, function(err){
		if(err){
			console.log(err);
			res.render('error', {message: 'PUT Error', error: err});
		} else {
			res.send('Successfully Updated');
		}
	});
});
//DELETE - Deleting this Resource
router.delete('/:_id', function(req, res, next){
	var _id = req.params._id;
	
	Game.remove({_id: _id}, function(err){
		if(err){
			console.log(err);
			res.render('error', {message: 'DELETE Error', error: err});
		} else {
			res.send('Successfully Deleted');
		}
	});
});
module.exports = router;