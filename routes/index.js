const express = require('express');
const router = express.Router();
const applications = require('../services/applications');
const routines = require ('../services/routine');
const features =  require ('../services/features');
const symptomes = require ('../services/symptomes');
const resultat = require ('../app')

router.get('/', function (req, res){
    res.render('index', {applications, routines, features, symptomes, resultat})
});

module.exports = router;