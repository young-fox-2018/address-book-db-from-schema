const Group = require('../models/Group')
const View = require('../views/View')

class GroupController {
    static create(name){
        Group.create(name, function(err) {
            if(err) View.showError(err)
            else View.showData("data successfully inserted")
        })
    }

    static update(field, value, whereField, whereId){
        Group.update("groups", field, value, whereField, whereId, function(err) {
            if(err) View.showError(err)
            else View.showData("update data successfull")
        })
    }

    static delete(whereField, whereValue){
        Group.deleteGroup(whereField, whereValue, function(err) {
            if(err) View.showError(err)
            else View.showData("data has been deleted")
        })
    }

    static showGroup(){
        Group.showGroup(function(err, rows) {
            if(err) View.showError(err)
            else View.showList(rows)
        })
    }
}

module.exports = GroupController