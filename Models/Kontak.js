let Model = require('./Model')
let db = require('../init')
class Kontak extends Model {
    constructor() {
        super()
    }

    static createKontak(nama, namaPerusahaan, nomorTelepon, email, cb) {
        let tablename = "Kontak"
        let query = `INSERT INTO Kontak (
            nama,
            nama_perusahaan,
            nomor_telepon,
            email
        ) VALUES (
            "${nama}", 
            "${namaPerusahaan}",
            "${nomorTelepon}",
            "${email}"
        )`

        Model.findOne(nama, tablename, function (row) {
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
        })
    }

    static updateKontak(nama, namabaru, namaPerusahaan, nomorTelepon, email, cb) {
        let tablename = "Kontak"
        
        Model.findOne(nama, tablename, function (row) {
            if (row) {
                db.run(`UPDATE Kontak SET 
                nama = "${namabaru}",
                nama_perusahaan = "${namaPerusahaan}",
                nomor_telepon = "${nomorTelepon}",
                email = "${email}"
                 WHERE nama = "${nama}"`, function (err) {
                        if (err) {
                            cb(err)
                        } else {
                            cb(null)
                        }
                    })

            } else {
                cb("Nama belum ada di kontak, insert dolooo")
            }
        })
    }

    static deleteKontak(nama, cb) {
        let tablename = "Kontak"
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

module.exports = Kontak