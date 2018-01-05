var mongoose = require('mongoose');
let Schema = new mongoose.Schema({
  adid: String,
  feedback:String,
  date:String,
  comments : String

});
let emoticon = mongoose.model("emoticon", Schema);
module.exports = emoticon;
