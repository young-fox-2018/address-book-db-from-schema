const db = require('./../db')
const Model = require('./model')

class  Contact extends Model{
    constructor(name, company, phone_num, email){
        this.name = name
        this.company = company,
        this.phone_num = phone_num,
        this.email = email
    }
    static findOne(params, callback){
        super.findOne("Contacts", params, function(err,row){
            if(err){
                callback(err)
            }else{
               callback(null,row)
            }
        })
    }

    static create_contact(data,callback){
        db.run(`INSERT INTO Contacts(name,company,phone_num,email) VALUES (?,?,?,?)`, data, function(err) {
            if (err) {
              callback(err)
            }else{
                callback(null)
            }
          });
    }

    static updateContact(params, callback){
        super.update("Contacts", params, function(err){
            if(err){
                callback(err)
            }else{
                callback(null)
            }
        })
    }

    static deleteContact(params, callback){
        super.delete("Contacts", params, function(err){
            if(err){
                callback(err)
            }else{
                callback(null)
            }
        })
    }
    static showContact(callback){
        const query = `SELECT Contacts.name AS contactname, Contacts.company, Contacts.phone_num, Contacts.email, GROUP_CONCAT(Groups.name) AS groupname FROM  
                        (( Contacts LEFT JOIN Groupcontacts  ON Groupcontacts.id_contact = Contacts.id)
                        LEFT JOIN Groups ON Groupcontacts.id_group = Groups.id)
                        GROUP BY Contacts.name`
        db.all(query, function(err, data){
                if(err) {
                    callback(err)
                }else{
                    callback(null,data)
                }
        })
    }

}

module.exports = Contact
