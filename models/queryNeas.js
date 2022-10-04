const neas = require('../schemas/neas');

//--------- Funciones Query para los GET ----------//

//para coger todas las neas:
const getAllNeas = async () => {
    try{
        const getNeas = await neas.find({});
        console.log("query de allNeas")
        return getNeas
    }
    catch(error){
        console.error(error);
    }
}

const getByOrbit = async (orbit) => {
    try {
        const getByOrbitClass = await neas.find({orbit_class: orbit}, "-_id designation period_yr orbit_class")
        return getByOrbitClass

    } catch (error) {
        console.error(error);
    }
}


//query por fecha:
const getNeasTo = async (dateTo) => {
    try {
        const getNeasDateTo = await neas.find({year:{$lt:dateTo}});
        return getNeasDateTo

    } catch (error) {
        console.error(error);
    }
}


const getNeasFrom = async (dateFrom) => {
    try {
        const getNeasDateFrom = await neas.find({year:{$gt:dateFrom}});
        return  getNeasDateFrom

    } catch (error) {
        console.error(error);
    }
}


const getNeasFromTo = async (dateTo, dateFrom) => {
    try {
        const getNeasDateFromTo = await neas.find({year:{$gt:dateFrom, $lt:dateTo}});
        return getNeasDateFromTo

    } catch (error) {
        console.error(error);
    }
}


//query por fecha más ajustada:
const getNeasByDate = async (date) => {
    try {
        const getNeasDate = await neas.find({discovery_date:{$regex: date, $options: 'i'}});
        return getNeasDate

    } catch (error) {
        console.error(error);
    }
}


//--------- Función Query para el POST ----------//
const createNeas = async (newNea) => {
    try {

        let createNea = new neas (newNea);
        let response = await createNea.save();

        return {
            Objective: "New object created:",
            Nea: response
        }

    } catch (error) {
        console.log(`ERROR:${error}`)
    }
}

//--------- Función Query para el PUT ----------//
const upDateNeas = async(updateNea) => {
    try {
        const newNea = {
            "designation": updateNea.designation,
            "discovery_date": updateNea.discovery_date,
            "h_mag": updateNea.h_mag,
            "moid_au": updateNea.moid_au,
            "q_au_1": updateNea.q_au_1,
            "q_au_2": updateNea.q_au_2,
            "period_yr": updateNea.reclat,
            "i_deg": updateNea.i_deg,
            "pha": updateNea.pha,
            "orbit_class": updateNea.orbit_class
        }
        let oldNea = await neas.findOneAndUpdate({designation: updateNea.designation}, newNea);
        oldNea.overwrite(newNea);
        await oldNea.save();
        return {
            Objective: "neas updated!",
            Nea: oldNea
        }

    } catch (error) {
        console.log(error);
    }
}


//--------- Función Query para el DELETE ----------//
const deleteNeas = async (delNea) => {
    try {
        let response = await neas.deleteOne({designation: delNea.designation});
        console.log("Nea eliminated",response);
        return `Nea with id ${delNea.designation} has been deleted.`

    } catch (error) {
        console.log(`ERROR:${error}`)
    }
}


module.exports = {
    getAllNeas,
    getByOrbit,
    getNeasTo,
    getNeasFrom,
    getNeasFromTo,
    getNeasByDate,
    createNeas,
    upDateNeas,
    deleteNeas
};