const express = require('express')
require('./utils/dbMongo');
let cors = require('cors')



//Rutas 
const landingsApiRoutes = require('./routes/landingsApiRoutes');
const neasApiRoutes = require('./routes/neasApiRoutes');
const usersApiRouter = require('./routes/usersApiRoutes');

//middleware 404
const manage404 = require('./middlewares/error404');

const app = express()
const port = 5000;

// Permite leer el body recibido en una petición
app.use(express.json(), cors());

//API
app.use("/api",landingsApiRoutes)
app.use("/api",neasApiRoutes)
app.use("/api",usersApiRouter)

//Si la ruta falla
app.use(manage404);


app.get('/api/astronomy/landings', function (req, res, next) {
    res.json({msg: 'This is CORS-enabled for all origins!'})
  })

app.listen(port, () => {
    console.log(`Mi servidor funciona en el puerto ${port}`)
    console.log(`Mi servidor funciona en el puerto http://localhost:${port}`)
    console.log('CORS-enabled web server listening on port 5000')

})