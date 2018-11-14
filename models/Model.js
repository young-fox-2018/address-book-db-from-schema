const db = require('../db')

class Model {

    static update(tableName, field, value, whereField, whereValue, cb) {
        let query = `UPDATE ${tableName}
            SET ${field} = '${value}'
            WHERE ${tableName}.${whereField} = '${whereValue}'`
        db.run(query, function(err) {
            if(err) cb(err)
            else cb(null)
        })
    }

    static delete(tableName, whereField, whereValue, cb){
        let query = `DELETE FROM ${tableName}
            WHERE ${tableName}.${whereField} = "${whereValue}"`
        db.run(query, function(err) {
            if (err) cb(err)
            else cb(null)
        })
    }

    static findAll(tableName, cb) {
        db.all(`SELECT * FROM ${tableName}`, function(err, rows) {
            if(err) cb(err)
            else cb(null, rows)
        })
    }

    static findOne(tableName, field, value, cb) {
        db.get(`SELECT * FROM ${tableName} WHERE ${tableName}.${field} = '${value}'`, function(err, row) {
            if(err) cb(err)
            else cb(null, row)
        })
    }

}

module.exports = Model