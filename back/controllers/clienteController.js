'use strict'

var Cliente = require('../models/cliente');

const registro_cliente = async function(req,res){
    //
    var data = req.body;

    // REGISTRO
    var reg = await Cliente.create(data);
    console.log(reg);

    res.status(200).send({message: data});
};

module.exports = {
    registro_cliente
};