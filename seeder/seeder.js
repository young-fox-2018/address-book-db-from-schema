const fs = require("fs")
// const Contact = "./contact.json"
// const Groups = "./group.json"
// const ContactGroup = "./cg.json"
const Model = require("../models/model")

class Seeder extends Model {
    constructor() {
        super()
    }
    static seed(callback) {
        fs.readFile("./seeder/contact.json", "utf-8", (err, data) => {
            if (err) callback(err)
            else {
                let contactData = JSON.parse(data)
                contactData.forEach(param => {
                    let input = `"${param.name}","${param.telp}","${param.email}","${param.company}"`
                    let column = `${Object.keys(param)}`
                    Seeder.save("Contacts", column, input, (err) => {
                        if (err) callback(err)
                        else callback(null)
                    })
                });
            }
        })
        fs.readFile("./seeder/cg.json", "utf-8", (err, data) => {
            if (err) callback(err)
            else {
                let cgData = JSON.parse(data)
                cgData.forEach(param => {
                    let input = `"${param.contact_id}","${param.group_id}"`
                    let column = `${Object.keys(param)}`
                    Seeder.save("ContactGroup", column, input, (err) => {
                        if (err) callback(err)
                        else callback(null)
                    })
                });
            }
        })

        fs.readFile("./seeder/group.json", "utf-8", (err, data) => {
            if (err) callback(err)
            else {
                let groupData = JSON.parse(data)
                groupData.forEach(param => {
                    let input = `"${param.name}"`
                    let column = `${Object.keys(param)}`
                    Seeder.save("Groups", column, input, (err) => {
                        if (err) callback(err)
                        else callback(null)
                    })
                });
            }
        })
    }
}

module.exports = Seeder

