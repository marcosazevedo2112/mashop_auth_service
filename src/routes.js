const userController = require('./controller/userController');

function init(server){
    server.use('/user', userController);
}

module.exports = {init};