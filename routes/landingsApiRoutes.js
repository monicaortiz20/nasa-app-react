const express = require('express')

//Rutas 
const landingsApiController= require("../controllers/landingsApiController");
const landingsApiRouter= express.Router();


//API landings:
landingsApiRouter.get("/astronomy/landings",landingsApiController.getLandings)
landingsApiRouter.get('/astronomy/landings/mass/:mass', landingsApiController.getLandingsByMass)
landingsApiRouter.get('/astronomy/landings/class/:class', landingsApiController.getLandingsByClass)
landingsApiRouter.post('/astronomy/landings/create', landingsApiController.createNewLanding)
landingsApiRouter.put('/astronomy/landings/update/:id', landingsApiController.updateLanding)
landingsApiRouter.delete('/astronomy/landings/delete/:id', landingsApiController.deleteLanding)


module.exports= landingsApiRouter;