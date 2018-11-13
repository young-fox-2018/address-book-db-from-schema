"use strict"
const Database = require('./Database')
const db = require('./Db.js')

class Contacts extends Database {
    static create(tableName,data , cb) {
        let insertquery = `INSERT INTO ${tableName}(`
        let column = ""
        let totalInput = ""

        for (let i in data) {
            column += i +', '
            totalInput += '?, '
        }

        column = column.substring(0, column.length - 2) + ') VALUES('
        totalInput = totalInput.substring(0, totalInput.length - 2) + ')'
    
        insertquery += column + totalInput
        let statement = db.prepare(insertquery)

        statement.run(data.name, data.company, data.telpNumber, data.email, err => {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }

    static  showContact(data, cb) {
        let statement = db.prepare(`SELECT Contacts.id, Contacts.name, Contacts.company, Contacts.telpNumber, Contacts.email, GROUP_CONCAT(Groups.name) as groupName
                            FROM Contacts
                            JOIN ContactGroups
                            ON Contacts.id = ContactGroups.contactId
                            JOIN Groups
                            ON ContactGroups.groupId = Groups.id
                            WHERE Contacts.id = ?`
                           )

        statement.get(data.id, (err, row) => {
            if (err) {
                cb(err)
            } else {
                cb(null ,row)
            }
        })     
    }
}

module.exports = Contacts