var mongoose = require('mongoose');

var Message = mongoose.model('Message',
    mongoose.Schema({
        name: String,
        message: String
    })
)

module.exports = Message;