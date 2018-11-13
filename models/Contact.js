const db = require('../setup')
const Model = require("./Model")

class Contact extends Model{
    static create(input, cb) {
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
}

module.exports =  Contact