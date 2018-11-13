let Model = require('./Model')
let db = require('../init')
class Grup extends Model {
    static createGrup(name, cb) {
        let tablename = "Grup"
        let query = `INSERT INTO Grup (
            nama
        ) VALUES (
            "${name}"
        )`

        Model.findOne(name, tablename, function (row) {

            if (row) {
                cb("Nama Grup sudah ada")
            } else {
                if (row) {

                    cb("Nama sudah ada")
                } else {

                    db.run(query, function (err) {
                        if (err) {
                            cb(err)
                        } else {
                            cb(null)
                        }
                    })
                }
            }
        })
    }

    static updateGrup(nama, namabaru, cb) {
        let tablename = "Grup"
        Model.findOne(nama, tablename, function (row) {
            if (row) {
                db.run(`UPDATE Grup SET 
                nama = "${namabaru}"
                 WHERE nama = "${nama}"`, function (err) {
                        if (err) {
                            cb(err)
                        } else {
                            cb(null)
                        }
                    })

            } else {
                cb("Nama belum ada di Grup, insert dolooo")
            }
        })
    }

    static deleteGrup(nama, cb) {
        let tablename = "Grup"
        Model.findOne(nama, tablename, function(row) {
            if (row) {
                db.run(`DELETE FROM ${tablename} WHERE nama = "${nama}"`, function(err) {
                    if (err) {
                        cb(err)
                    } else {
                        cb(null)
                    }
                })
            }
        })
    }
}

module.exports = Grup