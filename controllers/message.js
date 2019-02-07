const mongoose = require('mongoose');
const Message = require('../models/message');

module.exports.getMessages = (cb) => {
        Message.find({}, (err, messages) => {
            if(err) {
                cb(err);
            }
            cb(undefined, messages);
        });
    }

module.exports.putMessage = (message, cb) => {
        var m = new Message(message);
        m.save((err) => {
            if(err) {
                cb(err);
            }
        })
    }    