const express = require('express');
const router = express.Router();
const models = require('../database/models');

router.get('/', (req, res, next) => {
    models.Restaurant.findAll()
    .then(restaurants => {
        res.status(200)
        .json({
            message: "Success!",
            restaurants
        });
    }).catch(err => {
        res.status(500)
        .json({
            message: "An error has occurred!",
            err,
        })
    })
})

router.get('/:id', (req, res, next) => {
    models.Restaurant.findByPk(req.params.id)
    .then(restaurant => {
        res.status(200)
        .json({
            message: "Success!",
            restaurant,
        });
    }).catch(err => {
        res.status(500)
        .json({
            message: "An error has occurred!",
            err,
        })
    })
})

router.post('/', (req, res, next) => {
    models.Restaurant.create({
        name: req.body.name,
        address: req.body.address,
        description: req.body.description,
        imgUrl: req.body.ImgUrl
    })
    .then(restaurant => {
        res.status(201)
        .json({
            message: "Success",
            restaurant
        })
    })
    .catch(err => {
        res.status(400)
        .json({
            message: "Error posting",
            err,
        })
    })
})

router.put('/:id', (req, res, next) => {
    models.Restaurant.findByPk(req.params.id)
    .then(restaurant => {
        restaurant.update({
            name: req.body.name,
            gpa: req.body.gpa
        });

        restaurant.save();

        res.status(200)
        .json({
            message: "Successfully updated restaurant",
            restaurant
        })
    })
    .catch(err => {
        res.status(500)
        .json({
            message: "Cant update restaurant",
            err
        })
    })
})

router.delete('/:id', (req, res, next) => {
    models.Restaurant.findByPk(req.params.id)
    .then(restaurant => {
        restaurant.destroy();

        res.status(200)
        .json({
            message: "Successfully updated restaurant",
            restaurant
        })
    })
    .catch(err => {
        res.status(500)
        console.log(err)
        .json({
            message: "Cant deelete restaurant",
            err
        })
    })
})

module.exports = router;