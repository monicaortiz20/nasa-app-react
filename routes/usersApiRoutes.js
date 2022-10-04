const express = require('express')

const usersApiController= require("../controllers/usersApiController")
const usersApiRouter= express.Router();


//API neas:
// usersApiRouter.post("/users/create",usersApiController.createUser);

module.exports= usersApiRouter;