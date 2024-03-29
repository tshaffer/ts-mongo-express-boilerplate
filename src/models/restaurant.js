var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var RestaurantSchema = new Schema(
  {
    id: { type: String, required: true },
    name: { type: String, required: true, max: 100 },
    category: { type: String, required: true, max: 100 },
    overallRating: { type: Number, required: true },
    foodRating: { type: String, required: true, max: 100 },
    serviceRating: { type: String, required: true, max: 100 },
    ambienceRating: { type: String, required: true, max: 100 },
    outdoorSeating: { type: Boolean },
    comments: { type: String, required: true, max: 100 },
    wouldVisitAgain: { type: Boolean },
  }
);

// export default mongoose.model('Restaurant', RestaurantSchema);
module.exports = mongoose.model('Restaurant', RestaurantSchema);

