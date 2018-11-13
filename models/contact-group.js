const Model = require("./model")

class ContactGroup extends Model {
    constructor(contact_id, group_id) {
        super()
        this.contact_id = contact_id
        this.group_id = group_id

    }

    static addData(contact_id, group_id, callback) {
        let newData = new ContactGroup(contact_id, group_id)
        let data = `"${newData.contact_id}","${newData.group_id}"`
        let column = `${Object.keys(newData)}`

        ContactGroup.save("ContactGroup", column, data, (err) => {
            if (err) callback(err)
            else callback(null)
        })
    }
    static updateData(column, updateData, param, data, callback) {

        ContactGroup.update("ContactGroup", column, updateData, param, data, (err) => {
            if (err) callback(err)
            else callback(null)
        })
    }

    static deleteData(column, data, callback) {
        ContactGroup.delete("ContactGroup", column, data, (err) => {
            if (err) callback(err)
            else callback(null)
        })
    }

}

module.exports = ContactGroup