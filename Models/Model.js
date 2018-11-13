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

    static readAll(tablename) {
        db.get(`SELECT * FROM ${tablename}`)
    }

    static update() {

    }

    static delete() {

    }

}

module.exports = Model