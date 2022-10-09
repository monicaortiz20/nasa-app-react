const Landing = require('../models/queryLandings');


//GETs Landing 
const getLandings = async (req, res) => {
    let minimum_mass = req.query.minimum_mass
    //convertimos a num
    let minMassToNum = parseInt(minimum_mass)

    //para fechas
    let dateFrom = req.query.from
    let dateTo = req.query.to


    //para encontrarlo por masa mínima (200000):
    if (minMassToNum) {
        if(minMassToNum < 200000){
            res.status(400).json({"Bad Request": "Min mass must be equal or greater than 200000"});
        }
        try {
            let landingMassMin = await Landing.getLandingsMassMin(minMassToNum);
            res.status(200).json({ landingMassMin });
        
        }
        catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"landing not found!"}); 
        }

        //por fecha (desde 1960)
    } else if(dateFrom) { 
        try {
            let landingFromTo = await Landing.getLandingFrom(dateFrom)
            res.status(200).json(landingFromTo);

        } catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"landing not found!"});
        }

        //por fecha (hasta 1990)
    } else if (dateTo){
        try {
            let landingFromTo = await Landing.getLandingTo(dateTo);
            res.status(200).json(landingFromTo);

        } catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"landing not found!"});
        }

    //para encontrar meteoritos caídos por fecha comprendida entre 1960 & 1990:
    } else if (dateFrom && dateTo) {
        try {
            let landingFromTo = await Landing.getLandingFromTo(dateFrom, dateTo)
            res.status(200).json(landingFromTo);

        } catch (error) {
            console.log(`ERROR: ${error.stack}`);
            res.status(404).json( {"message":"landing not found!"}); 
        }
    }else {
        const landings = await Landing.getAllLandings();
        res.status(200).json(landings);
    }
}


//para encontrarlo por masa:
const getLandingsByMass = async (req, res) => {
    try {
        let getLandingsMass = await Landing.getLandingByMass(req.params.mass)
        res.status(200).json(getLandingsMass);

    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(404).json( {"message":"landing not found!"});
    }
} 


//para encontrarlo por class:
const getLandingsByClass = async (req, res) => {
    try {
        let getLandingsByClass = await Landing.getLandingByClass(req.params.class)
        res.status(200).json(getLandingsByClass);
        
    } catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(404).json( {"message":"landing not found!"});
    }
}


//CREATE Landing (object) - POST
const createNewLanding = async (req, res) => {
    try {

        let creatingLand = await Landing.createLanding(req.body);
        res.status(200).json(creatingLand)   
        console.log("Landing created! ", req.body);
        
    } catch (error) {
        console.log(`ERROR: ${error.stack}`)
        res.status(404).json({ "message": "error creating new landing" });
    }
}


//UPDATE Landing (object)
const updateLanding = async (req, res) => {
    try {
        const obj = {
            body: req.body,
            id: req.params.id
        }
        await Landing.upDateLandings(obj);
        console.log("Esto es req.body de la func UPDATE", req.body);
        res.send("Landing updated!");

    } catch (error) {
        console.log(`ERROR: ${error.stack}`)
        res.status(404).json({ "message": "landing not updated" });
    }
}


//DELETE Landing (object)
const deleteLanding = async (req, res) => {
    try {
        let deleteLand = req.params.id;
        await Landing.deleteLandings(deleteLand);
        res.send("Landing deleted")

        
    } catch (error) {
        console.log(`ERROR: ${error.stack}`)
        res.status(404).json({ "message": "landing not deleted" });
    }
}

module.exports = {
    getLandings,
    getLandingsByMass,
    getLandingsByClass,
    createNewLanding,
    updateLanding,
    deleteLanding
    }