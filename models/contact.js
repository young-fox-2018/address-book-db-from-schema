const db = require('./../db')
const Model = require('./model')

class  Contact extends Model{
    constructor(name, company, no_telp, email){
        this.name = name
        this.company = company,
        this.no_telp = no_telp,
        this.email = email
    }

    static create_contact(data,callback){
        db.run(`INSERT INTO Contacts(name,company,no_telp,email) VALUES (?,?,?,?)`, data, function(err) {
            if (err) {
              callback(err)
            }
          });
    }

}

module.exports = Contact
