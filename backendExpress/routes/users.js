var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.get('/:id', function(req, res, next) {
  let userId = req.params.id;
  res.send(`user with ${userId} exists`);
});

router.post('/', (req, res) => {
  let user = req.body;
  res.send('new user is there');
});

router.put('/', (req, res) => {
  let user = req.body;
  res.send('user is updated');
});

router.delete('/:id', (req, res) => {
  res.send('user is deleted');
});


module.exports = router;
