const express = require('express');
const route = express.Router();

route.get('/', function(req, res, next){
    res.send('------- Bienvenido al Api V1 😄 ------------');
});


route.use('/persona', require('./PersonaRoute'));


module.exports = route;