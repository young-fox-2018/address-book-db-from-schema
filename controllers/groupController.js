const Group = require('../models/group')
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
    static readDummyData() {
        Group.readDummyData(function (err) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(`Dummy Data success added!`)
            }
        })
    }
    static add(name) {
        Group.add(name, function (err, array) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(`Group with name ${name} Successfully added, Total Group: ${array.length}`)
            }
        })
    }
    static findOne(field, value) {
        Group.findOne(field, value, function (err, data) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(data)
            }
        })
    }
    static update(field, newValue, fieldCondition, condition) {
        Group.update(field, newValue, fieldCondition, condition, function (err) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(`success updated`)
            }
        })
    }
    static delete(fieldId, id) {
        Group.delete(fieldId, id, function (err) {
            if (err) {
                View.showErr(err)
            } else {
                View.showData(`Data with id ${id} has been successfully deleted`)
            }
        })
    }
}


module.exports = GroupController