var express = require('express');
var router = express.Router();
var models = require('../models');
var Promise = require('bluebird');
var Restaurant = models.Restaurant;
var Hotel = models.Hotel;
var Activity = models.Activity;
module.exports = router;

// /users
router.get('/', function (req, res, next) {

	var restaurants = Restaurant.find({});
	var hotels = Hotel.find({});
	var activities = Hotel.find({});

	Promise.all([restaurants, hotels, activities])
	.then(function(data){
		var foundRestaurants = data[0];
		var foundHotels = data[1];
		var foundActivities = data[2];

		res.send(foundRestaurants);
	})
	.then(null, next);
});

