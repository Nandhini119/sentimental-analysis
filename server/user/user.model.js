var mongoose = require('mongoose');
let Schema = new mongoose.Schema({
  username: String,
  password: String,

});
let user = mongoose.model("user", Schema);
module.exports = user;
