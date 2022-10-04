const express = require('express')
require('./utils/dbMongo');


//Rutas 
const landingsApiRoutes = require('./routes/landingsApiRoutes');
const neasApiRoutes = require('./routes/neasApiRoutes');
const usersApiRouter = require('./routes/usersApiRoutes');

//middleware 404
const manage404 = require('./middlewares/error404');

const app = express()
const port = 3000

// Permite leer el body recibido en una petición
app.use(express.json());

//API
app.use("/api",landingsApiRoutes)
app.use("/api",neasApiRoutes)
app.use("/api",usersApiRouter)

//Si la ruta falla
app.use(manage404);


app.listen(port, () => {
    console.log(`Mi servidor funciona en el puerto ${port}`)
    console.log(`Mi servidor funciona en el puerto http://localhost:${port}`)
    
})