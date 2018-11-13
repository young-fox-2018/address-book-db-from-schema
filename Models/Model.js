let db = require('../init')
class Model {
    static findOne(nama, tablename, cb) {
        db.get(`SELECT * FROM ${tablename} WHERE nama = "${nama}"`, function (err, row) {
            if (err) {
                throw err
            } else {
                if (row) {
                    cb(row)
                } else {
                    cb(null)
                }
            }
        })
    }

    static findAll(tablename, cb) {
        db.all(`SELECT * FROM ${tablename}`,function(err, row) {
            if (err) {
                cb(err)
            } else {
                cb(row)
            }
        })
    }

    static findOne(name, tablename, cb) {
        db.get(`SELECT * FROM ${tablename} WHERE nama = "${name}"`, function(err, row) {
            if (err) {
                cb(err)
            } else {
                cb(row)
            }
        })
    }

    static update() {

    }

    static delete() {

    }

}


module.exports = Model