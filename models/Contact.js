const db = require('../db')
const Model = require("./Model")

class Contact extends Model{
    static create(input, cb) {
        Contact.findOne('contacts', input.email, function(err, data) {
            if (err) {
                cb(err)
            } else {
                if (!data) {
                    let queries =`
                    INSERT INTO contacts (name, company, phone, email)
                    VALUES ("${input.name}", "${input.company}", "${input.phone}", "${input.email}")`
                    db.run(queries, function(err) {
                        if (err) {
                            cb({message: "err create contact", err: err})
                        } else {
                            cb(null)
                        }
                    })
                }
                else {
                    cb('email sudah terdaftar')
                }
            }
        })
    }

}

module.exports =  Contact