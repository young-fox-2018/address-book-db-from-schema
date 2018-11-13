let View = require('../Views/View')
let ControllerGrup = require('./ControllerGrup')
let ControllerKontak = require('./ControllerKontak')
let ControllerKontakGrup = require('./ControllerKontakGrup')

class Controller {
    static execute(syntax, syntax2, nama, namaPerusahaan, nomorTelepon, email, extension, extension2) {
        switch (syntax) {
            case "kontak":
                if (syntax2 == "create") {
                    ControllerKontak.create(nama, namaPerusahaan, nomorTelepon, email)
                } else if (syntax2 == "read") {
                    ControllerKontak.read()
                } else if (syntax2 == "update") {
                    ControllerKontak.update(nama, namaPerusahaan, nomorTelepon, email, extension)
                } else if (syntax2 == "delete") {
                    ControllerKontak.delete(nama)
                } else if (syntax2 == "findAll") {
                    ControllerKontak.findAll()
                }
                break;

            case "grup":
                if (syntax2 == "create") {
                    ControllerGrup.create(nama, namaPerusahaan, nomorTelepon, email)
                } else if (syntax2 == "read") {
                    ControllerGrup.read(id, nama, namaPerusahaan, nomorTelepon, email)
                } else if (syntax2 == "update") {
                    ControllerGrup.update(nama, namaPerusahaan)
                } else if (syntax2 == "delete") {
                    ControllerGrup.delete(nama)
                } else if (syntax2 == "findAll") {
                    ControllerGrup.findAll()
                }
                break;

            case "kontakgrup":
                if (syntax2 == "create") {
                    ControllerKontakGrup.create(nama, namaPerusahaan)
                } else if (syntax2 == "findAll") {
                    ControllerGrup.findAll()
                } else if (syntax2 == "update") {
                    // ControllerGrup.update(nama, namaPerusahaan)
                } else if (syntax2 == "delete") {
                    ControllerGrup.delete(nama, namaPerusahaan)
                }
                break;
            

            default:
                View.viewHelp()
                break;
        }
    }
}

module.exports = Controller