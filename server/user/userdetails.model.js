var mongoose = require('mongoose');
let Schema = new mongoose.Schema({
  adid: String,
  feedback:String,

});
let user = mongoose.model("user", Schema);
module.exports = user;
