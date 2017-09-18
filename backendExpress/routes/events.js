var express = require('express');
var router = express.Router();

/* GET events */
router.get('/', function(req, res, next) {
  res.send('respond with events');
});

router.get('/:id', function(req, res, next) {
  let eventId = req.params.id;
  if (eventId)
    res.send(`event with ${eventId} exists`);
});

router.post('/', (req, res) => {
  let event = req.body;
  res.send('new event is there');
});

router.put('/', (req, res) => {
  let event = req.body;
  res.send('event is updated');
});

router.delete('/:id', (req, res) => {
  res.send('event is deleted');
});


module.exports = router;
