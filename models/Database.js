"use strict"

const db = require('./Db.js')

class Database {
    static create(tableName, data, cb) {

    }
    
    static getAll(tableName, cb) {
        let statement = db.prepare(`SELECT * FROM ${tableName}`)

        statement.all((err, rows) => {
            if (err) {
                cb(err)
            } else {
                cb(null ,rows)
            }
        })     
    }

    static getOne(tableName,data, cb) {
        let statement = db.prepare(`SELECT * FROM ${tableName} WHERE ${data.field} = ?`)     
        
        statement.get(data.value, (err, row) => {
            if (err) {
                cb(err)
            } else {
                cb(null ,row)
            }
        })     
    }

    static update(tableName, data, cb) {
        let statement = db.prepare(`UPDATE ${tableName} SET ${data.field} = ? WHERE id = ?`)

        statement.run(data.value, data.id, err => {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }

    static delete(tableName, data, cb) {
        let statement= db.prepare(`DELETE FROM ${tableName} WHERE ${data.field} = ?`)

        statement.run(data.value, err => {
            if (err) {
                cb(err)
            } else {
                let statement = db.prepare(`DELETE FROM ContactGroups WHERE ${data.field2} = ?`)
                statement.run(data.value, error => {
                    if (err) {
                        cb(error)
                    } else {
                        cb(null)
                    }
                })
            }
        })
    }
}

module.exports = Database