const db = require('../db')
class Contact {
    static create(values, cb) {
        let qry = `INSERT INTO Contacts (name, company, phone, email)
                    VALUES ("${values.name}", "${values.company}", "${values.phone}", "${values.email}")`
        db.serialize(() => {
            db.run(qry, err => {
                if(err) cb(err)
                else cb(null)
            })
        })
        
    }
}

module.exports = Contact