
const db = require("../db");

class Contact {
    static createContact(name, email, company, phone_number, callback) {
        db.serialize(function() {
            let addQuery = `INSERT INTO contact (name, email, company, phone_number)
                            VALUES ("${name}", "${email}", "${company}", "${phone_number}");`
            db.run(addQuery, function(err, data){
                if(err) {
                    callback(err)
                } else {
                    callback(data)
                }
            })
        })
    }

    static showContact(callback) {
        let selectAll = `SELECT * FROM contact`;
        db.all(selectAll, function(err, data){
            if(err) {
                callback(err)
            } else {
                callback(data)
            }
        })
    }
}

module.exports = Contact;