var mongoose = require('mongoose');
let Schema = new mongoose.Schema({
  group: String,
  adid: String,
  feedback:String,
  rating : Number,
  date:String,
  comments : String

});
let emoticon = mongoose.model("emoticon", Schema);
module.exports = emoticon;
