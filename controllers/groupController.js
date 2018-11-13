const Group = require('../models/Group')
const View = require('../views/view')

class GroupController {
    static createTable() {
        Group.createTable(function (err) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(`Create table success!`)
            }
        })
    }
}


module.exports = GroupController