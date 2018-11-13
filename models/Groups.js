"use strict"
const Database = require('./Database')
const db = require('./Db.js')

class Group extends Database {
    static create(tableName, data, cb) {
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
       
        statement.run(data.name, err => {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }

    static update(where, params, callback) {
       super.update("Groups", data)
    }
}

module.exports = Group