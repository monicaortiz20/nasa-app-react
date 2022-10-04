const users = require('../schemas/users');

//primero creamos usuario, la BBDD está vacía:
const createUser = async (newUser) => {
    try {

        let createUser = new users (newUser);
        let response = await createUser.save();

        return {
            Objective: "New USER created:",
            User: response
        }

    } catch (error) {
        console.log(`ERROR:${error}`)
    }
}




module.exports = {
    createUser
};