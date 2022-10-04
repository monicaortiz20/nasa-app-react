const mongoose = require('mongoose');

const neasSchema = {
    designation:{
        type: String,
        unique:true
    },
    discovery_date:{
        type: String
    },
    h_mag:{
        type: Number
    },
    moid_au:{
        type: Number
    },
    q_au_1:{
        type: Number
    },
    q_au_2:{
        type: Number
    },
    period_yr:{
        type: Number
    },
    i_deg:{
        type:Number
    },
    pha:{
        type: String
    },
    orbit_class:{
        type: String
    }
};

const createNeasSchema = mongoose.Schema(neasSchema);
const Nea = mongoose.model('neas', createNeasSchema);

module.exports = Nea;