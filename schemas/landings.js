//Esquema para modelo de bbdd Landings
const mongoose = require('mongoose');

const landingsSchema = {
    name: { 
        type: String, 
    },
    id: { 
        type: Number, 
        unique: true 
    },
    nametype: { 
        type: String, 
    },
    recclass: { 
        type: String, 
    },
    mass:{
        type: Number,
    },
    fall:{
        type: String,
    },
    year:{
        type: String,
    },
    reclat:{
        type: Number,
    },
    reclong:{
        type: Number,
    },
    geolocation:{
        type: Object,
        latitude:{
            type:Number,
        },
        longitude:{
            type:Number,        }
    }

};
// Crear el esquema
const createlandingsSchema = mongoose.Schema(landingsSchema);
// Crear el modelo --> Colección
const Landing = mongoose.model('landings', createlandingsSchema);

module.exports = Landing;