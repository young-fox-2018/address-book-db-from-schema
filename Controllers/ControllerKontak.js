const Contact = require('../Models/Kontak')
const View = require('../Views/View')
class ControllerKontak{
    static create(nama, namaPerusahaan, nomorTelepon, email) {
        Contact.createKontak(nama, namaPerusahaan, nomorTelepon, email, function(err, data) {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }

    static read() {
        Contact.read()
    }

    static update(nama, namabaru, namaPerusahaan, nomorTelepon, email) {
        Contact.updateKontak(nama, namabaru, namaPerusahaan, nomorTelepon, email, function (err, data) {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }

    static delete(nama) {
        Contact.deleteKontak(nama, function (err, data) {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }

    static findAll() {
        Contact.findAll("Kontak", function (err, data) {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }
}

module.exports = ControllerKontak