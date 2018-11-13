const Model = require("../models/Model")
const Contact = require("../models/Contact")
const Group = require("../models/Group")
const Contact_group = require("../models/Contact_group")
const View = require("../views/View")

class Controller {
    static create(input) {
        switch (input[0]) {
            case "contact":
                if (input.slice(1).length !== 4) {
                    View.displayErr("create contact <name> <company> <phone> <email>")   
                } else {
                    let data = {
                        name: input[1],
                        company: input[2],
                        phone: input[3],
                        email: input[4]
                    }
                    Contact.create(data, function(err) {
                        if (err) {
                            View.displayErr(err);
                        } else {
                            View.display("contact created...");
                        }
                    })
                }
                break;
            case "group":
                if (input.slice(1).length !== 1) {
                    View.displayErr("create group <group_name>")   
                } else {
                    let data = {
                        name: input[1]
                    }
                    Group.create(data, function(err) {
                        if (err) {
                            View.displayErr(err);
                        } else {
                            View.display("group created...");
                        }
                    })
                }
                break;
        
            default:
                break;
        }
    }
}

module.exports = Controller