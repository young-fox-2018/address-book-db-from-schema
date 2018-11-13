const Model = require('./Model')
const db = require('../setupDb')


class Contact extends Model{

    static create(input, cb){
        let objInput = 
        {
            name: input[0],
            company: input[1],
            phoneNo: input[2],
            email: input[3]
        }
        
        let queryCreate = `
            INSERT INTO Contacts ( name, company, phoneNo, email )
            VALUES ("${objInput.name}", "${objInput.company}", "${objInput.phoneNo}", "${objInput.email}" )
         `
        db.run(queryCreate,function(err){
            if(err){
                let objErr =
                {
                    Message: "Errornya di create Contact",
                    Details: err
                }
                cb(objErr)
            }
            else{
                cb(null, objInput.name)
            }
        })
    }    
}

module.exports = Contact