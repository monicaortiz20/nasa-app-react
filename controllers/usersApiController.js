const users = require('../models/queyUsers');



//CREATE User (object) - POST
const createNewUser = async (req, res) => {
    try {

        let creatingUser = await users.createUser(req.body);
        res.status(200).json(creatingUser)   
        console.log("USER created! ", req.body);
        
    } catch (error) {
        console.log(`ERROR: ${error.stack}`)
        res.status(404).json({ "message": "error creating new nea" });
    }
}


module.exports = {
    createNewUser
};