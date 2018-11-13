let Grup = require('../Models/Grup')
let View = require('../Views/View')
class ControllerGrup {
    static create(nama) {
        Grup.createGrup(nama, function (err, data) {
            if (err) {
                View.viewError(err)
            } else {
                View.viewData(data)
            }
        })
    }



}

module.exports = ControllerGrup