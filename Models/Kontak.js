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
            
        Model.findOne(nama, tablename, function(row) {
            
            if (row) {
                cb("Nama sudah ada")
            } else {
                db.run(query,function(err) {
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