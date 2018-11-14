const Group = require('../models/group')
const View = require('../views/view')

class ControllerGroup {
    static createGroup(name) {
        let obj = { field: "name", value: name }
        Group.findOne(obj, function (err, row) {
            if (err) View.displayError(err)
            else {
                if (!row) {
                    Group.create(name, function (err) {
                        if (err) View.displayError(err)
                        else View.displayData(`Group ${name} added`)
                    })
                }
                else {
                    View.displayError(`Group ${name} already exist`)
                }
            }
        })
    }

    static showGroups() {
        Group.showGroups(function (err, data) {
            if (err) View.displayError(err)
            else View.displayData(data)
        })
    }

    static findOneGroup(field, value) {
        let obj = { field: field, value: value }
        Group.findOne(obj, function (err, row) {
            if (err) View.displayError(err)
            else View.displayData(row)
        })
    }

    static updateGroup(id, field, value) {
        let obj = { field: "id", value: id }
        Group.findOne(obj, function (err, row) {
            if (err) View.displayError(err)
            else {
                if (!row) {
                    View.displayError(`Cannot find ID ${id}`)
                }
                else {
                    let obj = { id: id, field: field, value: value }
                    Group.update(obj, function (err) {
                        if (err) View.displayError(err)
                        else {
                            let objId = { field: "id", value: id }
                            Group.findOne(objId, function (err, row) {
                                if (err) View.displayError(err)
                                else View.displayData(`Group updated: \n${JSON.stringify(row, null, 2)}`)
                            })
                        }
                    })

                }
            }
        }) 
    }

    static deleteGroup(id) {
        let obj = {field: "id", value: id}
        Group.findOne(obj, function(err, row) {
            if (err) View.displayError(err)
            else {
                if (!row) {
                    View.displayError(`Cannot find ID ${id}`)
                }
                else {
                    let obj = {id: id}
                    Group.delete(obj, function(err) {
                        if (err) View.displayError(err)
                        else View.displayData(`Group ID ${id} successfully deleted`)
                    })
                }
            }
        })
    }
}

module.exports = ControllerGroup