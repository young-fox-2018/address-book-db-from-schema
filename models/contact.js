const Model = require("./model")
const db = require("../databases/connection")

class Contact extends Model {
    constructor(name, telp, email, company) {
        super()
        this.name = name
        this.telp = telp
        this.email = email
        this.company = company
    }
    static addData(name, telp, email, company, callback) {
        let newData = new Contact(name, telp, email, company)
        let data = `"${newData.name}","${newData.telp}","${newData.email}","${newData.company}"`
        let column = `${Object.keys(newData)}`

        Contact.save("Contacts", column, data, (err) => {
            if (err) callback(err)
            else callback(null)
        })
    }
    static updateData(column, updateData, param, data, callback) {

        Contact.update("Contacts", column, updateData, param, data, (err) => {
            if (err) callback(err)
            else callback(null)
        })
    }

    static deleteData(column, data, callback) {
        Contact.delete("Contacts", column, data, (err) => {
            if (err) callback(err)
            else callback(null)
        })
    }
    static AllData(callback) {
        let sql = `select Contacts.name, Contacts.telp, Contacts.email, Contacts.company, Groups.name AS GroupName from Contacts
        join ContactGroup on Contacts.id=ContactGroup.contact_id
        join Groups on ContactGroup.group_id=Groups.id
        order by Contacts.name `
        db.all(sql, (err, rows) => {
            if (err) callback(err, null)
            else callback(null, rows)
        })

    }

}

module.exports = Contact