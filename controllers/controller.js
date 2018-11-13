const Model = require("../models/model")
const Contact = require("../models/contact")
const ContactGroup = require("../models/contact-group")
const Group = require("../models/group")
const View = require("../views/view")
const Seeder = require("../seeder/seeder")

class Controller {
    static add(param, param1, param2, param3, param4) {
        if (param === "contact") {
            Contact.addData(param1, param2, param3, param4, (err) => {
                if (err) View.displayErr(err)
                else View.displayData("Data berhasil Disimpan")
            })
        }
        else if (param === "contactGroup") {
            ContactGroup.addData(param1, param2, (err) => {
                if (err) View.displayErr(err)
                else View.displayData("Data berhasil Disimpan")
            })
        }
        else if (param === "group") {
            Group.addData(param1, (err) => {
                if (err) View.displayErr(err)
                else View.displayData("Data berhasil Disimpan")
            })

        }
        else {
            View.displayErr("salah memasukan data")
        }
    }

    static update(table, column, updateData, param, data) {
        if (table === "contact") {
            Contact.updateData(column, updateData, param, data, (err) => {
                if (err) View.displayErr(err)
                else View.displayData("Data berhasil Di update")
            })
        }
        else if (table === "contactGroup") {
            ContactGroup.updateData(column, updateData, param, data, (err) => {
                if (err) View.displayErr(err)
                else View.displayData("Data berhasil Di update")
            })
        }
        else if (table === "group") {
            Group.updateData(column, updateData, param, data, (err) => {
                if (err) View.displayErr(err)
                else View.displayData("Data berhasil Di update")
            })
        }
        else {
            View.displayErr("salah memasukan data")
        }
    }
    static delete(table, column, data) {
        if (table === "contact") {
            Contact.deleteData(column, data, (err) => {
                if (err) View.displayErr(err)
                else View.displayData("Data berhasil Di hapus")
            })
        }

        else if (table === "contactGroup") {
            ContactGroup.deleteData(column, data, (err) => {
                if (err) View.displayErr(err)
                else View.displayData("Data berhasil Di hapus")
            })
        }

        else if (table === "group") {
            Group.deleteData(column, data, (err) => {
                if (err) View.displayErr(err)
                else View.displayData("Data berhasil Di hapus")
            })
        }
        else {
            View.displayErr("salah memasukan data")
        }
    }
    static seeder() {
        Seeder.seed((err) => {
            if (err) View.displayErr(err)
            else View.displayData("data berhasil di seeder")
        })
    }
    static showAll(param) {
        if (param === "contact") {
            Contact.AllData((err, data) => {
                if (err) View.displayErr(err)
                else View.displayData(data)
            })
        }
        else if (param === "group") {
            Group.AllData((err, data) => {
                if (err) View.displayErr(err)
                else View.displayData(data)
            })
        }
        else {
            View.displayErr("salah memasukan data")
        }
    }
}
module.exports = Controller