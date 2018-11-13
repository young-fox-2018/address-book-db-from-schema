let View = require('../Views/View')
let ControllerGrup = require('./ControllerGrup')
let ControllerKontak = require('./ControllerKontak')

class Controller {
    static execute(syntax, syntax2, nama, namaPerusahaan, nomorTelepon, email) {
        switch (syntax) {
            case "kontak":
                if (syntax2 == "create") {
                    ControllerKontak.create(nama, namaPerusahaan, nomorTelepon, email)
                } else if (syntax2 == "read") {
                    ControllerKontak.read()
                } else if (syntax2 == "update") {
                    ControllerKontak.update(id, nama, namaPerusahaan, nomorTelepon, email)
                } else if (syntax2 == "delete") {
                    ControllerKontak.delete(id, nama, namaPerusahaan, nomorTelepon, email)
                }
                break;

            case "grup":
                if (syntax2 == "create") {
                    ControllerGrup.create(nama, namaPerusahaan, nomorTelepon, email)
                } else if (syntax2 == "read") {
                    ControllerGrup.read(id, nama, namaPerusahaan, nomorTelepon, email)
                } else if (syntax2 == "update") {
                    ControllerGrup.update(id, nama, namaPerusahaan, nomorTelepon, email)
                } else if (syntax2 == "delete") {
                    ControllerGrup.delete(id, nama, namaPerusahaan, nomorTelepon, email)
                }
                break;

            default:
                View.viewHelp()
                break;
        }
    }
}

module.exports = Controller