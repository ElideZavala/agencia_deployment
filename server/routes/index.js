const express = require('express');
const router =  express.Router();

/* Controladores */
const nosotrosController = require 
('../controllers/nosotrosController');
const homeController = require
('../controllers/homeController');
const viajesControllers = require
('../controllers/viajesController');
const testimonialesController = require
('../controllers/testimonialesController');

module.exports = function() {
    router.get('/', homeController.consultasHomepage);
    router.get('/nosotros', nosotrosController.infoNosotros);
    router.get('/viajes', viajesControllers.mostrarViajes); 
    router.get('/viajes/:id', viajesControllers.mostrarViaje);
    router.get('/testimoniales', testimonialesController.mostrarTestimoniales);
    //Cuando agregas nuevos datos a un formulario
    router.post('/testimoniales', testimonialesController.agregarTestimonial); 
    
    return router; 
}