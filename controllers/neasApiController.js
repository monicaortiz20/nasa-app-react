const neas = require('../models/queryNeas');

const getNeas = async (req,res) => {

    let orbit = req.query.class //"class" = orbitClass
    let dateFrom = req.query.from
    let dateTo = req.query.to
    let specificDate = req.query.date

    if(orbit) {
        try {
            let neasOrbit = await neas.getByOrbit(orbit)
            console.log("estamos en orbit")
            res.status(200).json(neasOrbit);

        } catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({"message": "Neas not found!"});
        }

    }else if (dateFrom) {
        try {
            let neasDateFrom = await neas.getNeasFrom(dateFrom)
            console.log("estamos en dateFrom")
            res.status(200).json(neasDateFrom);
            
        } catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({"message": "Neas not found!"});
        }

    } else if (dateTo) {
        try {
            let neasDateTo = await neas.getNeasTo(dateTo)
            console.log("estamos en dateTo")
            res.status(200).json(neasDateTo);

        } catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({"message": "Neas not found!"});
        }

    } else if (dateFrom && dateTo) {
        try {
            let neasDateFromTo = await neas.getNeasFromTo(dateFrom, dateTo)
            console.log("estamos en dateFromTo")
            res.status(200).json(neasDateFromTo)

        } catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({"message": "Neas not found!"});
        }

        //por fecha específica:
    } else if (specificDate) {
        try {
            let neasSpecificDate = await neas.getNeasByDate(specificDate)
            console.log("estamos en specificDate")
            res.status(200).json(neasSpecificDate)

        } catch (error) {
            console.log(`ERROR: ${error.stack}`)
            res.status(404).json({"message": "Neas not found!"});
        }

    } else {
        const allNeas = await neas.getAllNeas();
        console.log("estamos en allNeas")
        res.status(200).json(allNeas);
    }
}


//CREATE Nea (object) - POST
const createNewNea = async (req, res) => {
    try {

        let creatingNea = await neas.createNeas(req.body);
        res.status(200).json(creatingNea)   
        console.log("Nea created! ", req.body);
        
    } catch (error) {
        console.log(`ERROR: ${error.stack}`)
        res.status(404).json({ "message": "error creating new nea" });
    }
}


//UPDATE Nea (object)
const updateNeas = async (req, res) => {
    try {
        await neas.upDateNeas(req.body);
        console.log("Esto es la func UPDATE Neas", req.body);
        res.send("Nea updated!");

    } catch (error) {
        console.log(`ERROR: ${error.stack}`)
        res.status(404).json({ "message": "Nea not updated" });
    }
}


//DELETE Nea (object)
const deleteNea = async (req, res) => {
    try {
        await neas.deleteNeas(req.body);
        console.log("estamos deleting")
        res.send("Nea deleted")

        
    } catch (error) {
        console.log(`ERROR: ${error.stack}`)
        res.status(404).json({ "message": "Nea not deleted" });
    }
}

module.exports = {
    getNeas,
    createNewNea,
    updateNeas,
    deleteNea
}