module.exports = function (app) {
    var userList = require('../controllers/userListController')

    app.route('/users')
        .get(userList.getUsers)
        .post(userList.createUser)

    app.route('/users/:id')
        .get(userList.getUserById)
        .delete(userList.deleteUser)
        .post(userList.updateUser)

}
