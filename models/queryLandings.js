const Landing = require('../schemas/landings')


//--------- Funciones Query para los GET ----------//

//para coger todos:
const getAllLandings = async () => {
    try{
        let getLandings = await Landing.find({},"-_id");
        return getLandings
    }
    catch(err){
        console.error(err);
    }
}



//para masa mínima:
const getLandingsMassMin = async(minMassToNum) => {
    try {
        let getLandingsMassMin = await Landing.find( {mass: {$gt: minMassToNum}} )
        console.log(getLandingsMassMin);
        return getLandingsMassMin

    } catch (error) {
        console.error(error)
    }
}


//para la masa:
const getLandingByMass = async (mass) => {
    try {
        const getLandingMass = await Landing.find({mass: mass}, "name mass year -_id")
        return getLandingMass

    } catch (error) {
        console.error(error);
    }
}


//para conseguir por fecha (desde 1960) - FROM:
const getLandingFrom = async(dateFrom) => {
    try {
        let landingDateFromTo = await Landing.find({year: {$gt:dateFrom}})
        return landingDateFromTo

    } catch (error) {
        console.error(error);
    }
}


//para conseguir por fecha (hasta 1990) - TO:
const getLandingTo = async (dateTo) => {
    try {
        let landingDateFromTo = await Landing.find({year: {$lt:dateTo}})
        return landingDateFromTo

    } catch (error) {
        console.error(error);
    }
}


//para conseguir ambas fechas:
const getLandingFromTo = async (dateFrom, dateTo) => {
    try {
        let landingDateFromTo = await Landing.find({year:{$gt:dateFrom, $lt:dateTo}});
        return landingDateFromTo

    } catch (error) {
        console.error(error);
    }
}


//para la class:
const getLandingByClass = async (byClass) => {
    try {
  
        const getLandingsClass = await Landing.find({recclass: byClass}, "name recclass year -_id")
        return getLandingsClass
    }
    catch(error){
    console.error(error);
}}


//--------- Función Query para el POST ----------//
const createLanding = async (newLanding) => {
    try {

        //para crear el nuevo objeto en la colección Landing:
        let createLanding = new Landing (newLanding);
        //para que se guarde el objeto que le pasamos en el body
        let response = await createLanding.save();

        return {
            Objective: "New object created:",
            Landing: response
        }

    } catch (error) {
        console.log(`ERROR:${error}`)
    }
}


//--------- Función Query para el PUT ----------//
const upDateLandings = async(landing) => {
    try {
        const newLand = {
            "id": landing.id,
            "name": landing.name,
            "nametype": landing.nametype,
            "recclass": landing.recclass,
            "mass": landing.mass,
            "fall": landing.fall,
            "year": landing.year,
            "reclat": landing.reclat,
            "reclong": landing.reclong,
            "geolocation": landing.geolocation
        }
        //buscamos la landing a modificar por ID
        let oldLand = await Landing.findOneAndUpdate({id: landing.id}, newLand);
        //para sobreescribir la existente:
        oldLand.overwrite(newLand);
        //para guardar la sobreescrita:
        await oldLand.save();
        return {
            Objective: "Landing updated!",
            Landing: oldLand
        }

    } catch (error) {
        console.log(error);
    }
}


//--------- Función Query para el DELETE ----------//
const deleteLandings = async (landing) => {
    try {
        let response = await Landing.deleteOne({id:landing.id});
        console.log("Landing eliminated",response);
        return `Landing with id ${landing.id} has been deleted.`

    } catch (error) {
        console.log(`ERROR:${error}`)
    }
}




module.exports = {
    getAllLandings,
    getLandingsMassMin,
    getLandingByMass,
    getLandingFrom,
    getLandingTo,
    getLandingFromTo,
    getLandingByClass,
    createLanding,
    upDateLandings,
    deleteLandings
}