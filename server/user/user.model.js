var mongoose = require('mongoose');
let Schema = new mongoose.Schema({
  username: String,
    email: {
        type: String,
        unique: true
    },
    password: String,
    type: String,
    


});
let user = mongoose.model("usercredentials", Schema);
module.exports = user;
