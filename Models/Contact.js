const Model = require('./Model')

class Contact extends Model {

    static create (name, company, phone, email, callback) {
        let create = 
        `
        INSERT INTO contacts
            (name, company, phone, email)
        VALUES
            ("${name}", "${company}", "${phone}", "${email}")
        `
        Contact.runner(create, function(err, data) {
            if(err) {
                callback(err)
            } else {
                callback(null, data)
            }
        })
    }

}

module.exports = Contact