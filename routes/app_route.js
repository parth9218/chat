const express = require('express');
const router = express.Router();
const message = require('../controllers/message');

router.get('/messages', (req, res) => {
    message.getMessages((err, messages) => {
        if(err) {
            res.send(err);
        }
        else{
            res.send(messages);
        }
    });
});

router.post('/messages', (req, res) => {
    message.putMessage(req.body, (err) => {
        if(err) {
            res.sendStatus(500);
        }
        res.sendStatus(200);
    });
});


module.exports = router;