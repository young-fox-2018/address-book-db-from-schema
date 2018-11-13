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
}

module.exports = ControllerKontak