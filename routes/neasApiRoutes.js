const express = require('express')

//Rutas 
const neasApiController= require("../controllers/neasApiController");
const neasApiRouter= express.Router();

//API neas:
neasApiRouter.get("/astronomy/neas",neasApiController.getNeas);
neasApiRouter.post('/astronomy/neas/create', neasApiController.createNewNea)
neasApiRouter.put('/astronomy/neas/edit/:designation', neasApiController.updateNeas)
neasApiRouter.delete('/astronomy/neas/delete/:designation?', neasApiController.deleteNea)


module.exports= neasApiRouter;