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
}

module.exports = Grup