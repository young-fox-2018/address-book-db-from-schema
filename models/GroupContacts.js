"use strict"
const Database = require('./Database')
const db = require('./Db.js')

class GroupContact extends Database {
    static create(tableName, data , cb) {
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

        statement.run(data.contactId, data.groupId, err => {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }
}

module.exports = GroupContact