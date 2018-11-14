const {db} = require('./setup')

class Model {
    static findAll(table, callback) {
        let query = `SELECT * FROM ${table}`
        db.all(query, function(err, data) {
            if (err) callback(err, null)
            else callback(null, data)
        })
    }

    static findOne(table, obj, callback) {
        let query = `SELECT * FROM ${table} WHERE ${obj.field} = "${obj.value}"`
        db.get(query, function(err, row) {
            if (err) callback(err, null)
            else callback(null, row)
        })
    }

    static update(table, obj, callback) {
        let query = `UPDATE ${table} SET ${obj.field} = "${obj.value}" WHERE id = ${obj.id}`
        db.run(query, function(err) {
            if (err) callback(err)
            else callback(null)
        })
    }

    static delete(table, obj, callback) {
        let query = `DELETE FROM ${table} WHERE id = ${obj.id}`
        db.run(query, function(err) {
            if(err) callback(err)
            else callback(null)
        })
    }
}

module.exports = Model