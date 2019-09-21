const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const register = mongoose.model('register', userSchema);
class Model {


    findEmail(email) {
        return new Promise((resolve, reject) => {
            register.find({ 'email': email }).then((email) => {
                if (!email) {
                    resolve(`Email is already registered ${email}`);
                }
                else {
                    resolve(`Email is not registered ${email}`)
                }
            }).catch((err) => {
                reject(`Internel Server Error ${err}`)
            })
        })
    }

    registerModel(body) {
        this.findEmail(body.email)

        let newRegister = new register({
            'firstName': body.firstName,
            'lastName': body.lastName,
            'email': body.email,
            'password': body.password
        })
        let response = {
            success: true,
            status: 200
        }

        return new Promise((resolve, reject) => {

            newRegister.save().then((data) => {
                response.data = data,
                    response.success,
                    response.status
                resolve(response)
            }).catch((error) => {
                reject(error)

            })
        })
    }
}
module.exports = new Model();

