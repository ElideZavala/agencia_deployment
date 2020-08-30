const Sequelize = require('sequelize');

const db = require('../config/database');
const { STRING } = require('sequelize');

const Testimonial = db.define('testimoniales', { // nombre del modelo
     nombre : {
          type: Sequelize.STRING
     },
     correo : {
          type: Sequelize.STRING
     },
     mensaje : {
          type: Sequelize.STRING
     },
});
module.exports = Testimonial;