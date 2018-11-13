const setup = require("../models/setup")
const View = require("../views/view")
const Model = require("../models/model")

class Controller {
    static setup() {
        setup.setupContacts(function(err, data) {
            if (err) View.printError(err) 
            else {
                View.printLine(`${data}`)
            }
        })
        setup.setupGroups(function(err, data) {
            if (err) View.printError(err)
            else {
                View.printLine(`${data}`)
            }
        })
        setup.setupContactsGroups(function(err, data) {
            if (err) View.printError(err)
            else {
                View.printLine(`${data}`)
            }
        }) 
    }
    static create(table, values) {
        Model.create(table, values, function(err, message) {
            if (err) View.printError(err)
            else {
                View.printLine(message)
            }
        })
    }

    static findOne(table, field, value) {
        let option = {
            field : field,
            value : value
        }
        Model.findOne(table, option, function(err, data) {
            if (err) View.printError(err)
            else {
                View.print(data)
            }
        })
    }

    static find(table) {
        Model.find(table, function(err, data) {
            if (err) View.printError(err)
            else {
                View.print(data)
            }
        })
    }

}

module.exports = Controller