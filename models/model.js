const db = require('../database/db')


class Model {
    static createTable(tableName, field, cb) {
        db.serialize(function () {
            db.run(`DROP TABLE IF EXISTS ${tableName}`, function (err) {
                if (err) {
                    cb(err)
                }
            })
            db.run(`CREATE TABLE ${tableName} (
                    ${field}
                    )`, function (err) {
                    if (err) {
                        cb(err)
                    } else {
                        cb(null)
                    }
                })
        })
    }
    static create(tableName, field, cb) {
        db.run(`INSERT INTO ${tableName} VALUES ${field}`, function (err) {
            if (err) {
                cb(err)
            } else {
                cb(null)
            }
        })
    }
    static findAll(tableName, cb) {
        db.all(`SELECT * FROM ${tableName}`, function (err, data) {
            if (err) {
                cb(err, null)
            } else {
                cb(null, data)
            }
        })
    }
    static findOne(tableName, field, values, cb) {
        db.get(`SELECT * FROM ${tableName} WHERE ${field} = "${values}"`, function (err, data) {
            if (err) {
                cb(err, null)
            } else {
                cb(null, data)
            }
        })
    }
    static update(tableName, field, newValue, fieldCondition, condition, cb) {
        db.run(`UPDATE ${tableName}
                SET ${field} = "${newValue}"
                WHERE ${fieldCondition} = "${condition}"`, function (err) {
                if (err) {
                    cb(err)
                } else {
                    cb(null)
                }
            })
    }
}



module.exports = Model