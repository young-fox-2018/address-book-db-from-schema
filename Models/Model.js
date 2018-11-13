const db = require('../Database/db')



class Model {
    static findAll(table, callback) {
        let query = `SELECT * FROM ${table}`
        db.all(query, (err, data) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, data)
            }
        })
    }
    static findOne(table, field, input, callback) {
        let query = `SELECT * FROM ${table} WHERE ${field}='${input}'`
        db.get(query, (err, row) => {
            if (err) {
                callback(err, null)
            } else {
                callback(null, row)
            }
        })
    }
    static delete(table, field, callback) {
        let query = `DELETE FROM ${table} WHERE id='${field}'`
        db.run(query, (err) => {
            if (err) {
                callback(err)
            } else {
                callback(null)
            }
        })
    }

}
module.exports = Model