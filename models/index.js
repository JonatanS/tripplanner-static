var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/tripplanner'); 

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'mongodb connection error: '));  //log error on unsucessful connection
db.on('open', function (){ console.log("Succesfully connected to DB");});

var hotelSchema = new mongoose.Schema({
    name: {type: String, required: true},
    place: {type: [mongoose.Schema.Types.ObjectId], ref: 'Place'},
    num_stars: {type: Number, required: true, min: 1, max: 5},
    amenities: {type: String}	//CSV list
});

var placeSchema = new mongoose.Schema({
	address: {type: String, required: true},
	city: {type: String, required: true},
	state: {type: String, required: true},
	phone: {type: String, required: true},
	location:{type: [Number]}	//longitude, latitude
});

var activitySchema = new mongoose.Schema({
    name: {type: String,required: true},
    place: {type: [mongoose.Schema.Types.ObjectId], ref: 'Place'},
    age_range:{type: String}
});

var restaurantSchema = new mongoose.Schema({
    name: {type: String,required: true},
    place: {type: [mongoose.Schema.Types.ObjectId], ref: 'Place'},
    cuisine: {type:String, required: true},	//CSV list
    price: {type: Number, required: true, min: 1, max: 5}
});








var Hotel = mongoose.model('Hotel', hotelSchema);
var Place = mongoose.model('Place', placeSchema);
var Activity = mongoose.model('Activity', activitySchema);
var Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = {
	Place: Place,
	Hotel: Hotel,
	Restaurant: Restaurant,
	Activity: Activity
};