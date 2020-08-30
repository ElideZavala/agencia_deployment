// importar express
const express = require('express'); // Forma anteriior de como exportar los documentos
const path = require('path'); // va ha acceder a los archivos
const bodyParser = require('body-parser');
const routes = require('./routes')
const configs = require('./config');
const db = require('./config/database');
const { SSL_OP_NETSCAPE_CHALLENGE_BUG } = require('constants');

require('dotenv').config({ path: 'variables.env'} )

 db.authenticate()
     .then(() => console.log('DB Conectada'))
     .catch(error => console.log(error));

// configurar express();
const app = express();

//  Habilitar pug
app.set('view engine', 'pug') // Habilitar Pug

// Añadir las vistas 
app.set('views', path.join(__dirname, './views')) // nos va ha retornar la carpeta actuala en la que nos encontramos(server) en views va ha encotrar todos los archivos de la vista. 

// cargar una carpeta estatica llamada public
app.use(express.static('public')); // va a encotrar lla arpeta public

// validar si estamos en desarrollo o en produccion 
const config = configs[app.get('env')];

// creamos la variable para el sitio web. 
app.locals.titulo = config.nombresitio;

// Muestra el año actual y genera la ruta 
app.use((req, res, next) => {
     // Crear una nueva fecha
     const fecha = new Date();
     res.locals.fechaActual = fecha.getFullYear();
     res.locals.ruta = req.path;
     return next();
})
// ejecutamos el bodyParser
app.use(bodyParser.urlencoded({extended: true})); //codigo

// cargar las rutas
app.use('/', routes());

/* Puerto y host para la app */
const host = process.env.HOST || '0.0.0.0'; 
const port = process.env.PORT || 3000; // Esta variable la va a inyectar erroku

app.listen(port, host, () => {
     console.log('El servidor esta funcionando')
}); // Puerto al cual se conectara el servidor 