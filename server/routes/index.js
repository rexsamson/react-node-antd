const registerController = require('../controllers/register')
const loginController = require('../controllers/login')

module.exports = app => {
   app.post('/register', registerController.registerHandler)
    app.post('/login', loginController.loginHandler)
};