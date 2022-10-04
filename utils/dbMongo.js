//ESTE FICHERO ABRE LA CONEXIÓN A MONGOOSE
//para que .evn pueda ser usado
require('dotenv').config();

const mongoose = require("mongoose");

//const DATABASE_URL = "mongodb://localhost:27017/fakeshop";
mongoose.connect(`mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@nasa.zuh5hvc.mongodb.net/`+'nasa?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true,ssl: true});
const db = mongoose.connection;

// Eventos O "Listeners"
db.on("error", error => console.log(error));
db.once("open", () => console.log("connection to MongoDB established"));

module.exports = mongoose; //exportamos a app.js para que afecte a todo el proyecto