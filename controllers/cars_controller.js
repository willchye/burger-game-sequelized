var express = require('express');
var router = express.Router();
var models = require('../models');

console.log(models);

router.get('/', function(req, res) {
    res.redirect('/cars');
});

router.get('/cars', function(req, res) {
    // models.selectAll(function (data) {
    // 	var hbsObject = { burger: data };
    // 	console.log(hbsObject);
    // 	res.render('index', hbsObject);
    // });

    models.car.findAll()
        .then(function(data) {
            var hbsObject = {
                car: data
            };
            console.log(hbsObject);
            res.render('index', hbsObject);
        });
});

router.post('/cars/create', function(req, res) {
    models.car.create({
            model_name: req.body.name
        })
        .then(function() {
            res.redirect('/cars');
        });
});

router.put('/cars/updateOne/:id', function(req, res) {
    var condition = 'id = ' + req.params.id;

    console.log('condition', condition);

    models.car.update({
            rented: true,
        }, {
            where: {
                id: req.params.id
            }
        })
        .then(function() {
            res.redirect('/cars');
        })

    // models.updateOne({ devoured: req.body.devoured }, condition, function () {
    // 	res.redirect('/burgers');
    // });
});

module.exports = router;
