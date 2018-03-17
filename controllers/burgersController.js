var express = require('express');
var router = express.Router();

var burger = require('../models/burger.js');

router.get('/', function(req, res) {
  burger.all(function(data) {
    var hbsObject = {
      burgers: data
    };
    res.render('index', hbsObject);
  });
});

router.post('/burgers', function(req, res) {
  burger.new(['burger_name', "devoured"], [req.body.burger_name, false], function(data) {
    res.json({ id: data.insertId });
  });
});

router.put('/burgers/:id', function(req, res) {
  var condition = 'id = ' + req.params.id;

  burger.update({
    devoured: true
  }, condition, function(result) {
    if (result.changedRows === 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      }
      res.status(200).end();

    }
    );
});


module.exports = router;
