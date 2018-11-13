const Model = require("./model")
const db = require("../databases/connection")

class Group extends Model {
    constructor(name) {
        super()
        this.name = name
    }

    static addData(name, callback) {
        let newData = new Group(name)
        let data = `"${newData.name}"`
        let column = `${Object.keys(newData)}`

        Group.save("Groups", column, data, (err) => {
            if (err) callback(err)
            else callback(null)
        })
    }

    static updateData(column, updateData, param, data, callback) {

        Group.update("Groups", column, updateData, param, data, (err) => {
            if (err) callback(err)
            else callback(null)
        })
    }

    static deleteData(column, data, callback) {
        Group.delete("Groups", column, data, (err) => {
            if (err) callback(err)
            else callback(null)
        })
    }
    static AllData(callback) {
        let sql = `select  Groups.name AS GroupName, Contacts.name, Contacts.telp, Contacts.email, Contacts.company from Contacts
        join ContactGroup on Contacts.id=ContactGroup.contact_id
        join Groups on ContactGroup.group_id=Groups.id
        order by Contacts.name `
        db.all(sql, (err, rows) => {
            if (err) callback(err, null)
            else callback(null, rows)
        })

    }

}

module.exports = Group