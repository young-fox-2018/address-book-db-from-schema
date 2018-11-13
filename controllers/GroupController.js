const Model = require('../models/model')
const Group = require('../models/group')
const View = require('../views/view')

class GroupController {
    static findAll() {
        Model.findAll('Groups', (err, data) => {
            if (err) View.showErr(err)
            else View.showData(data)
        })
    }
    static findOne(data) {
        Model.findOne({field: data[0], value: data[1]}, 'Groups', (err, data) => {
            if (err) View.showErr(err)
            else View.showData(data)
        })
    }
    static update(data) {
        Model.update({field: data[0], value: data[1], updateValue: data[2]}, 'Groups', (err, data) => {
            if (err) View.showErr(err)
            else View.showData('Successfully updated')
        })
    }
    static create(data) {
        Group.create({
            name: data[0]
        }, err => {
            if (err) View.showErr(err)
            else View.showData(`Successfully added new Groups`)
        })
    }
    static delete(data) {
        Model.delete({field: data[0], value: data[1]}, 'Groups', (err, data) => {
            if (err) View.showErr(err)
            else View.showData('Successfully deleted!')
        })
    }
}

module.exports = GroupController